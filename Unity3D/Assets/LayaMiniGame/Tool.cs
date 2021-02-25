using UnityEditor;
using UnityEngine;

/** 
 * 工具
 */
public class Tool : Editor
{
    //清空缓存 
    [MenuItem("LayaMiniGame/清空缓存")]
    static void ClearCache()
    {
        ReadWriteFile.Write(ResURL.join(ResURL.cacheURL, "AllExportSceneNameCache.txt"), "");
        ReadWriteFile.Write(ResURL.join(ResURL.cacheURL, "AllPrefabsNameCache.txt"), "");
        //打印消息
        Debug.Log("清空缓存成功，" + System.DateTime.Now);
    }
}