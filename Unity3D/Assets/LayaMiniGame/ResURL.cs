using System.IO;

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
            return ResURL.join("../../", "");
        }
    }

    /**
     * 获取unity中框架的目录
     */
    public static string unityLayaMiniGameURL
    {
        get
        {
            return ResURL.join(ResURL.rootURL, "/Unity3D/Assets/LayaMiniGame/");
        }
    }

    /**
     * 获取缓存目录
     */
    public static string cacheURL
    {
        get
        {
            return ResURL.join(ResURL.unityLayaMiniGameURL, "/cache/");
        }
    }

    /**
     * 获取模板目录
     */
    public static string templateURL
    {
        get
        {
            return ResURL.join(ResURL.unityLayaMiniGameURL, "/template/");
        }
    }

    /**
     * 拼接路径
     */
    public static string join(string a, string b)
    {
        return Path.Combine(a, b);
    }
}
