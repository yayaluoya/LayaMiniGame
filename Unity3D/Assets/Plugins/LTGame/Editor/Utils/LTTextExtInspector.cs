using System.IO;
using UnityEditor;
using UnityEngine;

namespace LTGame.Utils
{
    [CustomEditor(typeof(TextAsset))]
    class LTTextExtInspector : Editor
    {
        private static readonly string[] TEXT_ENDRESS = new string[] {
            ".json"
        };

        private const int MAX_LENGTH = 5000;

        public override void OnInspectorGUI()
        {
            string path = AssetDatabase.GetAssetPath(target);
            bool isShowText = false;
            foreach (var item in TEXT_ENDRESS)
            {
                if (path.EndsWith(item))
                {
                    isShowText = true;
                    break;
                }
            }

            if (isShowText)
            {
                GUI.enabled = true;
                GUI.backgroundColor = new Color(63, 63, 63);

                var ss = File.ReadAllText(path);
                ss = ss.UnicodeToCH();
                if (ss.Length > MAX_LENGTH)
                {
                    GUILayout.Label(ss.Substring(0, MAX_LENGTH) + "...\n\n...and more...[LT]");
                }
                else
                {
                    GUILayout.Label(ss);
                }
            }

        }
    }
}
