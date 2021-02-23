/**
 * 工具类 
 */
public class _T
{
    /**
     * 修剪数值
     */
    public static string calcValue(float a, int b = 2)
    {
        string numberStr = "0.";
        for (int i=0;i<b;i++) {
            numberStr += "#";
        }
        return a.ToString(numberStr);
    }

    //字符串首字母转大写
    public static string CapitalizeFirstSetter(string str)
    {
        return str.Substring(0, 1).ToUpper() + str.Substring(1);
    }

    /**
     * 判断是否是预制体资源
     */
    public static bool IsPrefabAsset(UnityEngine.Object obj, bool includePrefabInstance)
    {
        if (!obj)
        {
            return false;
        }

        var type = UnityEditor.PrefabUtility.GetPrefabAssetType(obj);
        if (type == UnityEditor.PrefabAssetType.NotAPrefab)
        {
            return false;
        }

        var status = UnityEditor.PrefabUtility.GetPrefabInstanceStatus(obj);
        if (status != UnityEditor.PrefabInstanceStatus.NotAPrefab && !includePrefabInstance)
        {
            return false;
        }

        return true;
    }
}
