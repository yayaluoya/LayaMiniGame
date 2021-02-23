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
    //导出关卡配置json文件
    [MenuItem("GameObject/ExportSceneToJson")]
    static void Start()
    {
        string sceneName = UnityEngine.SceneManagement.SceneManager.GetActiveScene().name;
        //关卡配置json文件导出目录
        string filepath = ResURL.join(ResURL.rootURL, "bin/res/SceneJson/" + sceneName + ".json");
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
        childDic.Add("root", child);
        string text = JsonMapper.ToJson(childDic);
        //去除空属性
        text = new Regex("\"position\":null").Replace(text, "");
        text = new Regex("\"euler\":null").Replace(text, "");
        text = new Regex("\"scale\":null").Replace(text, "");
        text = new Regex("\"child\":null").Replace(text, "");
        text = new Regex("\"prefabName\":null").Replace(text, "");
        text = new Regex("\"differ\":null").Replace(text, "");
        //整理逗号
        text = new Regex("\",+?\"").Replace(text, "\",\"");
        text = new Regex("([0-9]),+?\"").Replace(text, "$1,\"");
        text = new Regex("},+?\"").Replace(text, "}\"");
        text = new Regex("\",+?}").Replace(text, "\"}");
        text = new Regex("],+?\"").Replace(text, "]\"");
        text = new Regex("\",+?]").Replace(text, "\"]");
        text = new Regex("],+?}").Replace(text, "]}");
        //
        ReadWriteFile.Write(filepath, text);
        //
        AssetDatabase.Refresh();
        //打印输出
        Debug.Log("导出场景 " + sceneName + " 关卡JSON文件完成，时间：" + System.DateTime.Now);
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
        }
        if (light)
        {
            child.SetCameraLightEulerAngles(rot);
            child.name = "light";
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
    public string name;
    public string prefabName;

    public string position;
    public string euler;
    public string scale;
    public List<Child> child;
    public Differ differ;

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
                differ = new Differ();
                for (int i = 0; i < _node.childCount; i++)
                {
                    if (differ.child == null)
                    {
                        differ.child = new List<Differ>();
                    }
                    Transform tmp = _node.GetChild(i);
                    Transform _tmp = node.GetChild(i);
                    Differ _differ = Differ.getDiffer(tmp, _tmp, i);
                    if (_differ != null)
                    {
                        differ.child.Add(_differ);
                    }
                }
                if (differ.child == null || differ.child.Count == 0)
                {
                    differ = null;
                }
            }
            return;
        }
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
            this.position = null;
        }
        else
        {
            this.position = _T.calcValue(-pos.x) + "," + _T.calcValue(pos.y) + "," + _T.calcValue(pos.z);
        }
    }

    /**
     * 设置旋转
     */
    public void SetEulerAngles(Vector3 euler)
    {
        if (euler.x == 0 && euler.y == 0 && euler.z == 0)
        {
            this.euler = null;
        }
        else
        {
            this.euler = _T.calcValue(euler.x) + "," + _T.calcValue(-euler.y) + "," + _T.calcValue(-euler.z);
        }
    }

    /**
     * 设置缩放
     */
    public void SetScale(Vector3 scale)
    {
        if (scale.x == 1 && scale.y == 1 && scale.z == 1)
        {
            this.scale = null;
        }
        else
        {
            this.scale = _T.calcValue(scale.x) + "," + _T.calcValue(scale.y) + "," + _T.calcValue(scale.z);
        }
    }

    /**
     * 设置相机和灯光的旋转
     */
    public void SetCameraLightEulerAngles(Vector3 euler)
    {
        this.euler = _T.calcValue(-euler.x) + "," + _T.calcValue(180 - euler.y) + "," + _T.calcValue(euler.z);
    }
}

/**
 * 差异数据类
 */
public class Differ
{
    public int index;
    public string position;
    public string euler;
    public string scale;
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
            _differ.position = _T.calcValue(-v3.x) + "," + _T.calcValue(v3.y) + "," + _T.calcValue(v3.z);
        }
        v3 = _node.localRotation.eulerAngles - node.localRotation.eulerAngles;
        if (v3.magnitude > 0)
        {
            ifNull = true;
            _differ.euler = _T.calcValue(v3.x) + "," + _T.calcValue(-v3.y) + "," + _T.calcValue(-v3.z);
        }
        v3 = _node.localScale - node.localScale;
        if (v3.magnitude > 0)
        {
            ifNull = true;
            _differ.scale = _T.calcValue(v3.x) + "," + _T.calcValue(v3.y) + "," + _T.calcValue(v3.z);
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