using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using System.Text.RegularExpressions;
/** 
 * 导出
 */
public class ExportPrefabsNameToTs : Editor
{
    //导出预制体名字到ts文件 
    [MenuItem("GameObject/ExportPrefabsNameToTs")]
    static void Start()
    {
        string sceneName = _T.CapitalizeFirstSetter(UnityEngine.SceneManagement.SceneManager.GetActiveScene().name);
        //预制体名字ts文件导出目录
        string filepath = ResURL.join(ResURL.rootURL, "src/Game/_prefabsName/_" + sceneName + "PrefabNames.ts");
        //
        string prefabsNames = "";
        List<string> names = new List<string>();
        Object[] objAll = UnityEngine.SceneManagement.SceneManager.GetActiveScene().GetRootGameObjects();
        GameObject[] gos = (GameObject[])FindObjectsOfType(typeof(GameObject));
        string classText = "";
        List<string> classList = new List<string>();
        Regex classReg = new Regex("(^{ *class *(?<name>[a-zA-Z0-9]*) *(?<log>.*))");
        bool ifClass = false;
        Match classMatch = classReg.Match("");
        //遍历当前场景中的所以物体  
        for (int i = 0; i < objAll.Length; i++)
        {
            GameObject obj = objAll[i] as GameObject;
            string name = obj.name;
            //判断是不是预制体
            if (!_T.IsPrefabAsset(obj, true))
            {
                //检测是不是分类
                if (new Regex("^{").IsMatch(name))
                {
                    // 获取这个分类名字
                    classMatch = classReg.Match(name);
                    ifClass = true;
                }
                //分类结束
                else if (new Regex("^}").IsMatch(name))
                {
                    ifClass = false;
                    classText += "\n";
                    classText += "    /**\n";
                    classText += "    * " + classMatch.Groups["log"] + "\n";
                    classText += "    */\n";
                    classText += "    public static get Get" + _T.CapitalizeFirstSetter(classMatch.Groups["name"].ToString()) + "Class(): string[] {\n";
                    classText += "        //返回数据\n";
                    classText += "        return [\n";
                    if (classList.Count > 0)
                    {
                        //添加进分组数据
                        for (int j = 0; j < classList.Count; j++)
                        {
                            classText += ("            '" + classList[j] + "',\n");
                        }
                        //
                    }
                    classText += "        ];\n";
                    classText += "    }\n";
                    //清空
                    classList = new List<string>();
                }
                else
                {
                    prefabsNames += ("    //" + name + "\n");
                }
                continue;
            }
            //判断是否检测到一个分类
            if (ifClass)
            {
                classList.Add(name);
            }
            //
            names.Add(name);
            //
            string _name = _T.CapitalizeFirstSetter(name.Replace(" ", ""));
            prefabsNames += ("    public static readonly " + _name + ": string = '" + name + "';" + "\n");
        }
        //
        string _prefabeNameTest = "";
        for (int i = 0; i < names.Count; i++)
        {
            _prefabeNameTest = _prefabeNameTest + "@" + names[i] + "@";
        }
        // Debug.Log(_prefabeNameTest);
        //读取本地缓存各个场景预制体列表
        string _AllPrefabsNameCacheURL = ResURL.join(ResURL.cacheURL, "AllPrefabsNameCache.txt");
        string _AllPrefabsNameCacheText = ReadWriteFile.ReadAll(_AllPrefabsNameCacheURL);
        // Debug.Log(_AllPrefabsNameCacheText);
        Regex _AllPrefabsNameCacheSceneRegex = new Regex("@" + sceneName + ":{.*?}");
        string _cacheSceneText = "@" + sceneName + ":{" + _prefabeNameTest + "}";
        //替换场景预制体列表
        if (_AllPrefabsNameCacheSceneRegex.IsMatch(_AllPrefabsNameCacheText))
        {
            _AllPrefabsNameCacheText = _AllPrefabsNameCacheSceneRegex.Replace(_AllPrefabsNameCacheText, _cacheSceneText);
        }
        else
        {
            _AllPrefabsNameCacheText += _cacheSceneText;
        }
        // Debug.Log(_AllPrefabsNameCacheText);
        //存储缓存
        ReadWriteFile.Write(_AllPrefabsNameCacheURL, _AllPrefabsNameCacheText);
        //根据缓存设置一个全局的预制体名字ts脚本
        TextAsset AllPrefabsAsset = (TextAsset)Resources.Load(ResURL.join(ResURL.templateURL, "AllScenePrefabsNames.txt"));
        string AllPrefabsTxt = AllPrefabsAsset.text;
        string _AllPrefabsNameSceneText = "";
        List<string> AllPrefabsNames = new List<string>();
        //读取所有预制体名字
        MatchCollection _allPrefabeMatch = new Regex("@(?<scene>.*?):{(?<prefabs>.*?)}").Matches(_AllPrefabsNameCacheText);
        for (int i = 0; i < _allPrefabeMatch.Count; i++)
        {
            _AllPrefabsNameSceneText = _AllPrefabsNameSceneText + "    " + _allPrefabeMatch[i].Groups["scene"] + ": string = '" + _allPrefabeMatch[i].Groups["prefabs"] + "';\n";
            // 提取所有预制体名字
            MatchCollection _prefabs = new Regex("@(?<prefabs>.*?)@").Matches("" + _allPrefabeMatch[i].Groups["prefabs"]);
            for (int _i = 0; _i < _prefabs.Count; _i++)
            {
                AllPrefabsNames.Add("" + _prefabs[_i].Groups["prefabs"]);
            }
        }
        //
        AllPrefabsTxt = new Regex("{{AllPrefab}}").Replace(AllPrefabsTxt, _AllPrefabsNameSceneText);
        string _AllPrefabsNameSceneURL = ResURL.join(ResURL.rootURL, "/src/dMyGame/_prefabsName/_AllScenePrefabsNames.ts");
        string _AllPrefabsNameURL = ResURL.join(ResURL.rootURL, "src/dMyGame/_prefabsName/_AllPrefabsNames.ts");
        //写入全部场景预制体名字
        ReadWriteFile.Write(_AllPrefabsNameSceneURL, AllPrefabsTxt);
        //读取模板
        TextAsset textAsset = (TextAsset)Resources.Load(ResURL.join(ResURL.templateURL, "template/PrefabsName.txt"));
        string template = textAsset.text;
        //正则替换模板内容
        string text = new Regex("{{PrefabNames}}").Replace(template, prefabsNames);
        text = new Regex("{{sceneName}}").Replace(text, sceneName);
        text = new Regex("{{className}}").Replace(text, classText);
        //写入文件
        ReadWriteFile.Write(filepath, text);
        //
        string AllPrefabsNamesText = "";
        for (int i = 0; i < AllPrefabsNames.Count; i++)
        {
            AllPrefabsNamesText += ("    public static readonly " + AllPrefabsNames[i] + ": string = '" + AllPrefabsNames[i] + "';" + "\n");
        }
        //读取模板
        TextAsset AllPrefabsNamesTextAsset = (TextAsset)Resources.Load(ResURL.join(ResURL.templateURL, "template/AllPrefabsName.txt"));
        string AllPrefabsNamesTemplate = AllPrefabsNamesTextAsset.text;
        AllPrefabsNamesText = new Regex("{{PrefabNames}}").Replace(AllPrefabsNamesTemplate, AllPrefabsNamesText);
        //写入全部预制体名字
        ReadWriteFile.Write(_AllPrefabsNameURL, AllPrefabsNamesText);
        //
        AssetDatabase.Refresh();
        //打印输出
        Debug.Log("导出场景 " + sceneName + " 预制体名字TS文件完成，时间：" + System.DateTime.Now);
    }
}
