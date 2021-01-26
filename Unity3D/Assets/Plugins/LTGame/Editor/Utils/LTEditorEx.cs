using UnityEngine;
using UnityEditor;

namespace LTGame
{
    class LTEditorEx
    {
        [MenuItem("Assets/LTGame/拷贝路径")]
        static void CopySelectPath()
        {
            //获取在Project视图中选择的所有游戏对象  
            UnityEngine.Object[] selectedAssets = Selection.GetFiltered(typeof(Object), SelectionMode.TopLevel);

            if (selectedAssets.Length != 1)
            {
                Debug.LogError("拷贝文件路径只支持选中文件个数为1时使用");
                return;
            }

            var getSourcePath = AssetDatabase.GetAssetPath(selectedAssets[0]);
            var textEditor = new TextEditor
            {
                text = getSourcePath
            };
            textEditor.OnFocus();
            textEditor.Copy();

            Debug.LogFormat("已拷贝路径:{0}", getSourcePath);
        }

        #region Utils
        [MenuItem("LTGame/拷贝选中路径")]
        static void CopySelectObjPath()
        {
            if (Selection.activeTransform)
            {
                var currentTrans = Selection.activeTransform;
                var fullPath = currentTrans.name;
                while (currentTrans.parent != null)
                {
                    currentTrans = currentTrans.parent;
                    fullPath = currentTrans.name + "/" + fullPath;
                }

                var textEditor = new TextEditor
                {
                    text = fullPath
                };
                textEditor.OnFocus();
                textEditor.Copy();

                Debug.LogFormat("已拷贝路径:{0}", fullPath);
            }
            else
            {
                Debug.Log("无选中对象");
            }
        }
        #endregion
    }
}
