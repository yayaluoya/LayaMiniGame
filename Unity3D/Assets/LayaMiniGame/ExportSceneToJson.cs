using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using LitJson;
using System.Text.RegularExpressions;
/**
 * 导出场景到json
 */
public class ExportSceneToJson : Editor
{
    //导出场景配置json文件
    [MenuItem("LayaMiniGame/导出场景JSON文件")]
    static void Start()
    {
        string sceneName = UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;
        //关卡配置json文件导出目录
        string filepath = ResURL.join(ResURL.rootURL, "bin/res/SceneJson/" + sceneName + ".json");
        string sceneJsonTSPath = ResURL.join(ResURL.rootURL, "src/Game/_sceneName/_EAllExportSceneName.ts");
        Object[] objAll = UnityEngine.SceneManagement.SceneManager.GetActiveScene().GetRootGameObjects();
        GameObject[] gos = (GameObject[])FindObjectsOfType(typeof(GameObject));
        List<GameObject> allPrefab = new List<GameObject>();
        for (int i = 0; i < objAll.Length; i++)
        {
            GameObject obj = objAll[i] as GameObject;
            if (!obj.activeSelf)
                continue;
            // if (obj.GetComponent<Light>() != null)
            //     continue;
            allPrefab.Add(obj);
        }

        Dictionary<string, List<Child>> childDic = new Dictionary<string, List<Child>>();
        List<Child> child = new List<Child>();
        foreach (var item in allPrefab)
        {
            if (!item.activeSelf)
                continue;
            child.Add(SetChild(item.transform, (item.GetComponent<Camera>() != null), (item.GetComponent<Light>() != null)));
        }
        childDic.Add("data", child);
        string text = JsonMapper.ToJson(childDic);
        //去除空属性
        text = new Regex("\"[a-zA-Z]+?\":null,?").Replace(text, "");
        text = new Regex("\"transform\":{},?").Replace(text, "");
        text = new Regex("\"_transform\":{},?").Replace(text, "");
        //整理逗号
        text = new Regex("\",+\"").Replace(text, "\",\"");
        text = new Regex("\",}").Replace(text, "\"}");
        text = new Regex("{,\"").Replace(text, "{\"");
        text = new Regex("},}").Replace(text, "}}");
        text = new Regex("{,{").Replace(text, "{{");
        text = new Regex("\\],}").Replace(text, "]}");
        text = new Regex("\\[,{").Replace(text, "[{");
        text = new Regex("},\\]").Replace(text, "}]");
        text = new Regex("{,\\[").Replace(text, "{[");
        //
        ReadWriteFile.Write(filepath, text);
        //整理所有需要到导出json的场景名字
        string _allExportSceneNameCacheUrl = ResURL.join(ResURL.cacheURL, "AllExportSceneNameCache.txt");
        string _allExportSceneNameCacheTxt = ReadWriteFile.ReadAll(_allExportSceneNameCacheUrl);
        if (!new Regex("@" + sceneName + "@").IsMatch(_allExportSceneNameCacheTxt))
        {
            _allExportSceneNameCacheTxt += ("@" + sceneName + "@");
        }
        string _allExportSceneNameTSTxt = ReadWriteFile.ReadAll(ResURL.join(ResURL.templateURL, "AllExportSceneName.txt"));
        string __allExportSceneNameTSTxt = "";
        MatchCollection _allSceneMatch = new Regex("@(?<scene>.*?)@").Matches(_allExportSceneNameCacheTxt);
        for (int i = 0; i < _allSceneMatch.Count; i++)
        {
            Debug.Log(_allSceneMatch[i].Groups["scene"]);
            __allExportSceneNameTSTxt = __allExportSceneNameTSTxt + "    " + _allSceneMatch[i].Groups["scene"] + " = '" + _allSceneMatch[i].Groups["scene"] + "',\n";
        }
        //替换内容
        _allExportSceneNameTSTxt = new Regex("{{AllExportSceneName}}").Replace(_allExportSceneNameTSTxt, __allExportSceneNameTSTxt);
        ReadWriteFile.Write(sceneJsonTSPath, _allExportSceneNameTSTxt);//写入ts文件
        ReadWriteFile.Write(_allExportSceneNameCacheUrl, _allExportSceneNameCacheTxt);//写入缓存文件
        //
        AssetDatabase.Refresh();
        //打印输出
        Debug.Log("导出场景 " + sceneName + " JSON文件完成，时间：" + System.DateTime.Now);
    }

    // 设置子物体
    public static Child SetChild(Transform tmp, bool camera = false, bool light = false)
    {
        Vector3 pos = tmp.localPosition;
        Vector3 rot = tmp.localRotation.eulerAngles;
        Vector3 scale = tmp.localScale;
        Child child = new Child();
        child.SetNode(tmp);
        child.name = tmp.name;
        //去掉首尾空格
        child.name = new Regex(" *").Replace(child.name, "");
        child.SetPos(pos);
        child.SetEulerAngles(rot);
        child.SetScale(scale);
        if (camera)
        {
            child.SetCameraLightEulerAngles(rot);
            child.name = "camera";
            var attachData = new CameraData();
            var cameraCom = tmp.gameObject.GetComponent<Camera>();
            attachData.color = cameraCom.backgroundColor.r + "," + cameraCom.backgroundColor.g + "," + cameraCom.backgroundColor.b + "," + cameraCom.backgroundColor.a;
            attachData.fov = cameraCom.fieldOfView;
            child.attachData = attachData;
        }
        if (light)
        {
            child.SetCameraLightEulerAngles(rot);
            child.name = "light";
            var attachData = new LightData();
            var lightCom = tmp.gameObject.GetComponent<Light>();
            attachData.color = lightCom.color.r + "," + lightCom.color.g + "," + lightCom.color.b;
            attachData.intensity = lightCom.intensity;
            child.attachData = attachData;
        }
        //
        return child;
    }
}

/**
 * 子物体
 */
public class Child
{
    private Transform nodeTran;
    //精灵名字
    public string name;
    //预制体名字
    public string prefabName;
    //变换
    public TransformData transform = new TransformData();
    //子节点
    public List<Child> child;
    //预源预制体差异
    public Differ prefabDiffer;
    //附加数据
    public object attachData;

    /**
     * 设置节点信息
     */
    public void SetNode(Transform node)
    {
        if (_T.IsPrefabAsset(node, true))
        {
            string path = PrefabUtility.GetPrefabAssetPathOfNearestInstanceRoot(node);
            GameObject go = AssetDatabase.LoadAssetAtPath<GameObject>(path);
            prefabName = go.name;
            //获取差异数据
            Transform _node = go.transform;
            if (_node.childCount > 0)
            {
                this.prefabDiffer = new Differ();
                for (int i = 0; i < _node.childCount; i++)
                {
                    if (this.prefabDiffer.child == null)
                    {
                        this.prefabDiffer.child = new List<Differ>();
                    }
                    Transform tmp = _node.GetChild(i);
                    Transform _tmp = node.GetChild(i);
                    Differ _differ = Differ.getDiffer(tmp, _tmp, i);
                    if (_differ != null)
                    {
                        this.prefabDiffer.child.Add(_differ);
                    }
                }
                if (this.prefabDiffer.child == null || this.prefabDiffer.child.Count == 0)
                {
                    this.prefabDiffer = null;
                }
            }
            return;
        }
        //
        nodeTran = node;
        for (int i = 0; i < nodeTran.childCount; i++)
        {
            Transform tmp = nodeTran.GetChild(i);
            if (child == null)
            {
                child = new List<Child>();
            }
            child.Add(ExportSceneToJson.SetChild(tmp));
        }
    }

    /**
     * 设置位置
     */
    public void SetPos(Vector3 pos)
    {
        if (pos.x == 0 && pos.y == 0 && pos.z == 0)
        {
            this.transform.position = null;
        }
        else
        {
            this.transform.position = _T.calcValue(-pos.x) + "," + _T.calcValue(pos.y) + "," + _T.calcValue(pos.z);
        }
    }

    /**
     * 设置旋转
     */
    public void SetEulerAngles(Vector3 euler)
    {
        if (euler.x == 0 && euler.y == 0 && euler.z == 0)
        {
            this.transform.euler = null;
        }
        else
        {
            this.transform.euler = _T.calcValue(euler.x) + "," + _T.calcValue(-euler.y) + "," + _T.calcValue(-euler.z);
        }
    }

    /**
     * 设置缩放
     */
    public void SetScale(Vector3 scale)
    {
        if (scale.x == 1 && scale.y == 1 && scale.z == 1)
        {
            this.transform.scale = null;
        }
        else
        {
            this.transform.scale = _T.calcValue(scale.x) + "," + _T.calcValue(scale.y) + "," + _T.calcValue(scale.z);
        }
    }

    /**
     * 设置相机和灯光的旋转
     */
    public void SetCameraLightEulerAngles(Vector3 euler)
    {
        this.transform.euler = _T.calcValue(-euler.x) + "," + _T.calcValue(180 - euler.y) + "," + _T.calcValue(euler.z);
    }
}

/**
 * 摄像机数据
 */
public class CameraData
{
    public float fov;
    public string color;
}

/**
 * 灯光数据
 */
public class LightData
{
    public string color;
    public float intensity;
}

/**
 * 变换
 */
public class TransformData
{
    //位置
    public string position;
    //旋转
    public string euler;
    //缩放
    public string scale;
}

/**
 * 差异数据类
 */
public class Differ
{
    //索引
    public int index;
    //变换信息
    public TransformData transform = new TransformData();
    //原信息
    public TransformData _transform = new TransformData();
    //子节点差异
    public List<Differ> child;

    /**
     * 获取差异
     */
    public static Differ getDiffer(Transform node, Transform _node, int i)
    {
        int _count = node.childCount;
        Differ _rootDiffer = Differ.getDifferValue(node, _node, i);
        if (_count > 0)
        {
            List<Differ> _childs = new List<Differ>();
            //遍历子对象
            for (int _i = 0; _i < node.childCount; _i++)
            {
                Transform tmp = node.GetChild(_i);
                Transform _tmp = _node.GetChild(_i);
                Differ __differ = Differ.getDiffer(tmp, _tmp, _i);
                if (__differ != null)
                {
                    _childs.Add(__differ);
                }
            }
            if (_childs.Count > 0)
            {
                if (_rootDiffer == null)
                {
                    _rootDiffer = new Differ();
                    _rootDiffer.index = i;
                }
                _rootDiffer.child = _childs;
            }
        }
        return _rootDiffer;
    }

    /**
     * 获取差异数值
     */
    public static Differ getDifferValue(Transform node, Transform _node, int i)
    {
        //获取差异
        Differ _differ = new Differ();
        _differ.index = i;
        Vector3 v3;
        bool ifNull = false;
        //
        v3 = _node.localPosition - node.localPosition;
        if (v3.magnitude > 0)
        {
            ifNull = true;
            if (node.localPosition.magnitude > 0)
            {
                _differ._transform.position = _T.calcValue(-node.localPosition.x) + "," + _T.calcValue(node.localPosition.y) + "," + _T.calcValue(node.localPosition.z);
            }
            else
            {
                _differ._transform.position = null;
            }
            _differ.transform.position = _T.calcValue(-v3.x) + "," + _T.calcValue(v3.y) + "," + _T.calcValue(v3.z);
        }
        v3 = _node.localRotation.eulerAngles - node.localRotation.eulerAngles;
        if (v3.magnitude > 0)
        {
            ifNull = true;
            if (node.localRotation.eulerAngles.magnitude > 0)
            {
                _differ._transform.euler = _T.calcValue(node.localRotation.eulerAngles.x) + "," + _T.calcValue(-node.localRotation.eulerAngles.y) + "," + _T.calcValue(-node.localRotation.eulerAngles.z);
            }
            else
            {
                _differ._transform.euler = null;
            }
            _differ.transform.euler = _T.calcValue(v3.x) + "," + _T.calcValue(-v3.y) + "," + _T.calcValue(-v3.z);
        }
        v3 = _node.localScale - node.localScale;
        if (v3.magnitude > 0)
        {
            ifNull = true;
            if (node.localScale.magnitude > 0)
            {
                _differ._transform.scale = _T.calcValue(node.localScale.x) + "," + _T.calcValue(node.localScale.y) + "," + _T.calcValue(node.localScale.z);
            }
            else
            {
                _differ._transform.scale = null;
            }
            _differ.transform.scale = _T.calcValue(v3.x) + "," + _T.calcValue(v3.y) + "," + _T.calcValue(v3.z);
        }
        if (ifNull)
        {
            return _differ;
        }
        else
        {
            return null;
        }
    }
}