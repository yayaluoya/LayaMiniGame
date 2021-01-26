using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

namespace LTGame
{

    public class LTEditorWindow : EditorWindow
    {

        private static LTEditorWindow _windows;

        [MenuItem("LTGame/Config")]
        static void Init()
        {
            if (_windows == null)
            {
                _windows = GetWindow<LTEditorWindow>();
                _windows.titleContent = new GUIContent("全局配置");
            }
            _windows.Show();
            _windows.Focus();
        }

        private void OnGUI()
        {
            EditorGUILayout.BeginVertical();
            _toggleIndex = 0;
            _HandleToggleUI("Excel配置自动生成_TS", _TSExcelHandle);
            //_HandleToggleUI("动画数据拆分", _AnimHandle);
            //_HandleToggleUI("Proto代码自动生成", _ProtoHandle);

            EditorGUILayout.EndVertical();

        }

        private int _toggleIndex;
        private void _HandleToggleUI(string toggleName, System.Action action)
        {
            LTEditorData.instance.enableKeys[_toggleIndex] = EditorGUILayout.ToggleLeft(toggleName, LTEditorData.instance.enableKeys[_toggleIndex]);
            if (LTEditorData.instance.enableKeys[_toggleIndex])
            {
                action();
            }
            _toggleIndex++;
        }

        private void _UIHandle()
        {
            LTEditorUtils.ShowLine("UI NameSpace", ref LTEditorData.instance.uiNameSpace, "MainGame", false);
            LTEditorUtils.ShowLine("UI Code Gen Path", ref LTEditorData.instance.uiCodeExportPath, "/Scripts/GenUI");
            LTEditorUtils.ShowLine("UI Meditor Gen Path", ref LTEditorData.instance.uiMediaotExportPath, "/Scripts/UIMediator");
            EditorGUILayout.LabelField("");
        }

        private void _ProtoHandle()
        {
            LTEditorUtils.ShowLine("Proto Save Path", ref LTEditorData.instance.protoSavePath, "/_res/proto", true);
            LTEditorUtils.ShowLine("Proto Code Gen Path", ref LTEditorData.instance.protoGenPath, "/Scripts/Proto", true);
            LTEditorUtils.ShowLine("Proto Code Gen Path2", ref LTEditorData.instance.protoGenPath2, "/Scripts/Proto", true);
            EditorGUILayout.BeginHorizontal();
            if (GUILayout.Button("Gen code at save path"))
            {
                LTProtoGenHelper.HandleDir(Application.dataPath + LTEditorData.instance.protoSavePath);
            }
            if (GUILayout.Button("Gen code from select proto"))
            {
                var savePath = LTEditorData.instance.protoSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                var choose = EditorUtility.OpenFilePanelWithFilters("Choose Proto", savePath,
                    new string[] {
                        "Proto文件", "proto",
                    });
                if (!string.IsNullOrEmpty(choose))
                {
                    LTProtoGenHelper.HandleProto(choose);
                }
            }
            if (GUILayout.Button("Copy to save path2"))
            {
                LTProtoGenHelper.CopySavePath1ToPath2();
            }
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.LabelField("");
        }

        private void _AnimHandle()
        {
            LTEditorUtils.ShowLine("Anim Root Node", ref LTEditorData.instance.animRootNode, "Armature/body", false);
            LTEditorUtils.ShowLine("Anim Ignore Node", ref LTEditorData.instance.animIgnoreNode, "Armature", false);
            LTEditorUtils.ShowLine("Anim Save Path", ref LTEditorData.instance.animSavePath, "/_data/anim");
            LTEditorUtils.ShowLine("AnimData SavePath", ref LTEditorData.instance.animDataSavePath, "/_data/animData");
            EditorGUILayout.LabelField("");
        }

        private void _ResHandle()
        {
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField("Enable AB Compress:", GUILayout.Width(200));
            LTEditorData.instance.compressAB = GUILayout.Toggle(LTEditorData.instance.compressAB, "Enable");
            EditorGUILayout.EndHorizontal();
        }

        private void _ResetHandle()
        {
            EditorGUILayout.BeginHorizontal();
            EditorGUILayout.LabelField("Reset Config To Template:", GUILayout.Width(200));
            if (GUILayout.Button("To Example"))
            {
                LTEditorData.instance.uiNameSpace = "Examples";
                LTEditorData.instance.uiCodeExportPath = "/LTGame.Examples/Scripts/GenUI";
                LTEditorData.instance.uiMediaotExportPath = "/LTGame.Examples/Scripts/UIMediator";

                LTEditorData.instance.excelNameSpace = "Examples";
                LTEditorData.instance.excelSavePath = "";
                LTEditorData.instance.configCodeSavePath = "/LTGame.Examples/Scripts/GenConfig";
                LTEditorData.instance.configDataSavePath = "/LTGame.Examples/data/config";
            }
            if (GUILayout.Button("To Default"))
            {
                LTEditorData.instance.uiNameSpace = "MainGame";
                LTEditorData.instance.uiCodeExportPath = "/Scripts/GenUI";
                LTEditorData.instance.uiMediaotExportPath = "/Scripts/UIMediator";

                LTEditorData.instance.excelNameSpace = "MainGame";
                LTEditorData.instance.excelSavePath = "";
                LTEditorData.instance.configCodeSavePath = "/Scripts/GenConfig";
                LTEditorData.instance.configDataSavePath = "/data/config";
            }
            EditorGUILayout.EndHorizontal();
        }

        private void _TSExcelHandle()
        {
            LTEditorUtils.ShowLine("Config命名空间", ref LTEditorData.instance.ts_excelNameSpace, "MainGame", false);
            LTEditorUtils.ShowLine("Excel保存路径", ref LTEditorData.instance.ts_excelSavePath, "");
            LTEditorUtils.ShowLine("Config代码储存路径", ref LTEditorData.instance.ts_configCodeSavePath, "/Scripts/GenConfig");
            LTEditorUtils.ShowLine("Config文件储存路径", ref LTEditorData.instance.ts_configJsonSavePath, "/Scripts/GenConfig");

            EditorGUILayout.BeginHorizontal();
            if (GUILayout.Button("Progress Save Path"))
            {
                var savePath = LTEditorData.instance.ts_excelSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                if (string.IsNullOrEmpty(savePath))
                {
                    Debug.LogError("未配置生成路径");
                }
                else
                {
                    LTExcelHelper.GenCodeWithDir(savePath, true);
                }
            }
            if (GUILayout.Button("Progress Other Path"))
            {
                var savePath = LTEditorData.instance.ts_excelSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                var choosePath = EditorUtility.OpenFolderPanel("Choose Excel Path", savePath, "");
                if (string.IsNullOrEmpty(choosePath))
                {
                    Debug.LogError("选择的路径为空");
                }
                else
                {
                    LTExcelHelper.GenCodeWithDir(choosePath, true);
                }
            }
            if (GUILayout.Button("Progress Single Excel"))
            {
                var savePath = LTEditorData.instance.ts_excelSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                var choose = EditorUtility.OpenFilePanelWithFilters("Choose Excel", savePath,
                    new string[] {
                        "Excel", "xls,xlsx",
                    });
                if (!string.IsNullOrEmpty(choose))
                {
                    LTExcelHelper.GenCodeWithFile(choose, true);
                }
            }
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.LabelField("");
        }

        private void _ExcelHandle()
        {
            LTEditorUtils.ShowLine("Config NameSpace", ref LTEditorData.instance.excelNameSpace, "MainGame", false);
            LTEditorUtils.ShowLine("Excel Save Path", ref LTEditorData.instance.excelSavePath, "");
            LTEditorUtils.ShowLine("Config Code Gen Path", ref LTEditorData.instance.configCodeSavePath, "/Scripts/GenConfig");
            LTEditorUtils.ShowLine("Config Data Save Path", ref LTEditorData.instance.configDataSavePath, "/data/config");

            EditorGUILayout.BeginHorizontal();
            if (GUILayout.Button("Progress Save Path"))
            {
                var savePath = LTEditorData.instance.excelSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                if (string.IsNullOrEmpty(savePath))
                {
                    Debug.LogError("未配置生成路径");
                }
                else
                {
                    LTExcelHelper.GenCodeWithDir(savePath, false);
                }
            }
            if (GUILayout.Button("Progress Other Path"))
            {
                var savePath = LTEditorData.instance.excelSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                var choosePath = EditorUtility.OpenFolderPanel("Choose Excel Path", savePath, "");
                if (string.IsNullOrEmpty(choosePath))
                {
                    Debug.LogError("选择的路径为空");
                }
                else
                {
                    LTExcelHelper.GenCodeWithDir(choosePath, false);
                }
            }
            if (GUILayout.Button("Progress Single Excel"))
            {
                var savePath = LTEditorData.instance.excelSavePath;
                if (savePath.StartsWith("/"))
                {
                    savePath = Application.dataPath + savePath;
                }
                var choose = EditorUtility.OpenFilePanelWithFilters("Choose Excel", savePath,
                    new string[] {
                        "Excel", "xls,xlsx",
                    });
                if (!string.IsNullOrEmpty(choose))
                {
                    LTExcelHelper.GenCodeWithFile(choose, false);
                }
            }
            EditorGUILayout.EndHorizontal();
            EditorGUILayout.LabelField("");
        }

        private void OnDestroy()
        {
            LTEditorData.instance.Save();
            Debug.Log("LTGame Editor数据已保存 at:" + System.DateTime.Now);
        }
    }
}
