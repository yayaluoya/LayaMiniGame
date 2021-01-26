using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LTGame
{

    public static class FileHelper
    {

        public async static Task<bool> WriteBytesToFile(string filePath, byte[] bytes)
        {

            try
            {
                LTUtils.MakeDirExist(filePath);

                var fs = new FileStream(filePath, FileMode.Create);
                await fs.WriteAsync(bytes, 0, bytes.Length);
                fs.Dispose();

                return true;
            }
            catch (Exception e)
            {
                LTDebug.LogException(e);
                return false;
            }

        }

        public static bool RenameFile(string oldFilePath, string newFilePath)
        {
            if (!File.Exists(oldFilePath))
            {
                LTDebug.LogError("原始文件不存在:{0}", oldFilePath);
                return false;
            }
            if (File.Exists(newFilePath))
            {
                File.Delete(newFilePath);
            }
            if (File.Exists(newFilePath))
            {
                LTDebug.LogError("目标文件无法删除:{0}", newFilePath);
                return false;
            }
            File.Move(oldFilePath, newFilePath);
            return true;
        }

    }

}


