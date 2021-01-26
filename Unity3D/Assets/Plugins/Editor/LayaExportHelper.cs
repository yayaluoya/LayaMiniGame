using UnityEngine;
using System;
using System.IO;
using LTGame;
using LitJson;
using JsonFormatterPlus;

public class LayaExportHelper : Util.CustomExport
{

    [UnityEditor.Callbacks.DidReloadScripts]
    static void _Init()
    {
        LayaAir3D.customExport = new LayaExportHelper();
        Debug.Log("LTG导出插件已注入 at " + DateTime.Now.ToShortTimeString());
    }

    public void EndEachHierarchyExport(string hierarchyPath)
    {
        //Debug.Log("EndEachHierarchyExport: " + hierarchyPath);
        //D:/Work_Projects/ltg-laya/FakeProject/code/laya/p_yinyou/bin/res/export/Conventional/floor.lh
        var fileName = LTUtils.GetFileName(hierarchyPath);
        var findObj = GameObject.Find(fileName);
        var extCmps = findObj.GetComponents<BaseExtData>();
        if (extCmps != null && extCmps.Length > 0)
        {
            var extData = new JsonData();
            extData.SetJsonType(JsonType.Object);
            for (var i = 0;i<extCmps.Length; ++i)
            {
                var extCmp = extCmps[i];
                var cmpName = extCmp.GetType().Name;
                Debug.Log("获取到组件名字" + cmpName);
                var addJsonData = new JsonData();
                addJsonData.SetJsonType(JsonType.Object);
                var allFileds = extCmp.GetType().GetFields();
                foreach (var p in allFileds)
                {
                    if (p.Name.StartsWith("lt_"))
                    {
                        var getValue = p.GetValue(extCmp);
                        var getType = getValue.GetType();
                        if (getType == typeof(Vector3))
                        {
                            addJsonData[p.Name] = new JsonData(getValue);
                        }
                        else
                        {
                            addJsonData[p.Name] = new JsonData(getValue);
                        }
                    }
                }
                extData[cmpName] = addJsonData;
            }

            var fs = new FileStream(hierarchyPath, FileMode.Open, FileAccess.Read);
            var sr = new StreamReader(fs);
            var readJsonStr = sr.ReadToEnd();
            var jsonData = JsonMapper.ToObject(readJsonStr);
            jsonData["data"]["props"]["extData"] = extData;
            sr.Close();
            fs.Close();

            var outputJson = jsonData.ToJson();
            outputJson = JsonFormatter.Format(outputJson);

            fs = new FileStream(hierarchyPath, FileMode.Create, FileAccess.Write);
            var sw = new StreamWriter(fs);

            sw.Write(outputJson);

            sw.Close();
            fs.Close();
        }

    }

    public void EndHierarchysExport(string savePath)
    {
        //Debug.Log("EndHierarchysExport: " + savePath);
    }

    public bool StartEachHierarchyExport(string hierarchyPath)
    {
        //Debug.Log("StartEachHierarchyExport: " + hierarchyPath);
        return true;
    }

    public void StartHierarchysExport(string savePath)
    {
        //Debug.Log("StartHierarchysExport: " + savePath);
    }
}
