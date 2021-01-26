using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UnityEditor;
using UnityEngine;

namespace LTGame
{
    public static class LTEditorUtils
    {

        public static string GetRealPath(string savePath)
        {
            if (savePath.StartsWith("/"))
            {
                return Application.dataPath + savePath;
            }
            return savePath;
        }

        public static void ShowLine(string label, ref bool value, bool defaultValue)
        {
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField(label + ":", GUILayout.Width(130));
            value = EditorGUILayout.Toggle(value);
            EditorGUILayout.EndHorizontal();
        }

        public static void ShowLine(string label, ref string value, string defaultValue, Func<string, bool> checkFunc)
        {
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField(label + ":", GUILayout.Width(130));
            var getStr = EditorGUILayout.TextField(value);

            if (checkFunc != null)
            {
                var result = checkFunc.Invoke(getStr);
                if (result)
                {
                    value = getStr;
                }
                else
                {
                    value = defaultValue;
                }
            }
            else
            {
                value = getStr;
            }


            if (GUILayout.Button("Reset", GUILayout.Width(100)))
            {
                value = defaultValue;
            }
            EditorGUILayout.EndHorizontal();
        }

        public static void ShowLine(string label, ref string value, string defaultValue, bool showBrowse = true)
        {
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField(label + ":", GUILayout.Width(130));
            value = EditorGUILayout.TextField(value);
            if (showBrowse)
            {
                if (GUILayout.Button("Browse", GUILayout.Width(100)))
                {
                    var openPath = string.IsNullOrEmpty(value) ? defaultValue : value;
                    var selectPath = UnityEditor.EditorUtility.OpenFolderPanel("Choose " + label, Application.dataPath + openPath, "");
                    if (!string.IsNullOrEmpty(selectPath))
                    {
                        var selectDir = LTDirInfo.CreateDirInfo(selectPath);
                        var dataPathDir = LTDirInfo.CreateDirInfo(Application.dataPath);

                        var matchDirPath = selectDir.Match(dataPathDir);

                        value = matchDirPath;
                    }
                }
            }

            if (GUILayout.Button("Reset", GUILayout.Width(100)))
            {
                value = defaultValue;
            }
            EditorGUILayout.EndHorizontal();
        }
    }
}
