using System.IO;
using UnityEngine;

/**
 * 路径操作工具
 */
public class ResURL
{
    /**
     * 获取根路径
     */
    public static string rootURL
    {
        get
        {
            string _path = Application.dataPath;
            _path = ResURL.URLBack(_path);
            _path = ResURL.URLBack(_path);
            return ResURL.join(_path, "/");
        }
    }

    /**
     * 获取unity中框架的目录
     */
    public static string unityLayaMiniGameURL
    {
        get
        {
            return ResURL.join(ResURL.rootURL, "Unity3D/Assets/LayaMiniGame/");
        }
    }

    /**
     * 获取缓存目录
     */
    public static string cacheURL
    {
        get
        {
            return ResURL.join(ResURL.unityLayaMiniGameURL, "cache/");
        }
    }

    /**
     * 获取模板目录
     */
    public static string templateURL
    {
        get
        {
            return ResURL.join(ResURL.unityLayaMiniGameURL, "template/");
        }
    }

    /**
     * 拼接路径
     */
    public static string join(string a, string b)
    {
        var url = a+ b;
        #if UNITY_STANDALONE_OSX
        url = url.Replace(@"\","/");
        #endif
        #if UNITY_STANDALONE_WIN
        // Debug.Log("win");
        #endif
        return url;
    }
    
    // 路径向后退一步
    public static string URLBack(string url){
        var index = url.LastIndexOf("/");
        var lastPath = url.Substring(0, index);
        return lastPath;
    }
}
