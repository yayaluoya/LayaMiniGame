using UnityEditor;
using UnityEngine;
using System.IO;

namespace LTGame
{

    public class LTEditorData : ScriptableObject
    {
        private static LTEditorData _instance;

        public static LTEditorData instance
        {
            get
            {
                if (_instance == null)
                {
                    _Load();
                }
                return _instance;
            }
        }

        public string uiNameSpace;
        public string uiCodeExportPath;
        public string uiMediaotExportPath;

        public string excelNameSpace;
        public string excelSavePath;
        public string configCodeSavePath;
        public string configDataSavePath;

        public string ts_excelNameSpace;
        public string ts_excelSavePath;
        public string ts_configCodeSavePath;
        public string ts_configJsonSavePath;

        public string layaDebugPath;
        public string ftpSavePath;
        public string wxPath;

        public string[] skipEndress;

        public bool compressAB;

        public string animSavePath;
        public string animDataSavePath;
        public string animRootNode;
        public string animIgnoreNode;
        public Vector3 animFixedAngle;
        public float animFixedScale;

        public string protoSavePath;
        public string protoGenPath;
        public string protoGenPath2;

        public bool[] enableKeys = new bool[10];

        public string ftpPath;
        public string versionCode;

        private const string savePath = "Assets/LTEditorData.asset";

        private static void _Load()
        {
            var realPath = savePath.Replace("Assets", Application.dataPath);
            if (File.Exists(realPath))
            {
                _instance = AssetDatabase.LoadAssetAtPath<LTEditorData>(savePath);
            }
            else
            {
                _instance = ScriptableObject.CreateInstance<LTEditorData>();
                AssetDatabase.CreateAsset(_instance, savePath);
            }
        }

        public void Save()
        {
            EditorUtility.SetDirty(this);
            AssetDatabase.SaveAssets();
        }

    }
}
