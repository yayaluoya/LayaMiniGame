using System.IO; // 引用输入输出操作的命令空间

/**
 * 文件读写操作
 */
public class ReadWriteFile
{
    /**
     * 读取文件全部内容
     */
    public static string ReadAll(string url)
    {
        return File.ReadAllText(url);
    }

    /**
     * 把内容写入文件
     */
    public static void Write(string url, string content)
    {
        File.WriteAllText(url, content);
    }
}