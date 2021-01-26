using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using UnityEngine;
using System.Reflection;

namespace LTGame
{
    public static class LTUtils
    {

        public static List<T> CloneList<T>(this List<T> source)
        {
            var result = new List<T>();
            foreach (var item in source)
            {
                result.Add(item);
            }
            return result;
        }

        public static long TickToSeconds(long tick)
        {
            return tick / 10000000;
        }

        private static float R = 100;
        private static float angle = 30;
        private static float h = R * Mathf.Cos(angle / 180 * Mathf.PI);
        private static float r = R * Mathf.Sin(angle / 180 * Mathf.PI);
        /// <summary>
        /// 判断两个HSV颜色的差距值
        /// </summary>
        /// <param name="h1"></param>
        /// <param name="s1"></param>
        /// <param name="v1"></param>
        /// <param name="h2"></param>
        /// <param name="s2"></param>
        /// <param name="v2"></param>
        /// <returns></returns>
        public static float DiffuseHsv(float h1, float s1, float v1, float h2, float s2, float v2)
        {
            var x1 = r * v1 * s1 * Mathf.Cos(h1 / 180 * Mathf.PI);
            var y1 = r * v1 * s1 * Mathf.Sin(h1 / 180 * Mathf.PI);
            var z1 = h * (1 - v1);
            var x2 = r * v2 * s2 * Mathf.Cos(h2 / 180 * Mathf.PI);
            var y2 = r * v2 * s2 * Mathf.Sin(h2 / 180 * Mathf.PI);
            var z2 = h * (1 - v2);
            var dx = x1 - x2;
            var dy = y1 - y2;
            var dz = z1 - z2;
            return Mathf.Sqrt(dx * dx + dy * dy + dz * dz);
        }

        /// <summary>
        /// 判断两个HSV颜色的差距值
        /// </summary>
        /// <param name="hsv1"></param>
        /// <param name="hsv2"></param>
        /// <returns></returns>
        public static float DiffuseHsv(Vector3 hsv1, Vector3 hsv2)
        {
            return DiffuseHsv(hsv1.x, hsv1.y, hsv1.z, hsv2.x, hsv2.y, hsv2.z);
        }

        public static Color ToColor(this string colorStr, bool noA)
        {
            if (colorStr.StartsWith("#"))
                colorStr = colorStr.Replace("#", string.Empty);
            byte br = byte.Parse(colorStr.Substring(0, 2), System.Globalization.NumberStyles.HexNumber);
            byte bg = byte.Parse(colorStr.Substring(2, 2), System.Globalization.NumberStyles.HexNumber);
            byte bb = byte.Parse(colorStr.Substring(4, 2), System.Globalization.NumberStyles.HexNumber);
            byte cc = byte.Parse(colorStr.Substring(6, 2), System.Globalization.NumberStyles.HexNumber);
            float r = br / 255f;
            float g = bg / 255f;
            float b = bb / 255f;
            float a = cc / 255f;

            return new Color(r, g, b, noA ? 1 : a);
        }

        /// <summary>
        /// 深拷贝,用于断开引用链接
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj"></param>
        /// <returns></returns>
        public static T DeepCopy<T>(T obj)
        {
            //如果是字符串或值类型则直接返回
            if (obj is string || obj.GetType().IsValueType) return obj;
            object retval = Activator.CreateInstance(obj.GetType());
            FieldInfo[] fields = obj.GetType().GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static);
            foreach (FieldInfo field in fields)
            {
                try { field.SetValue(retval, DeepCopy(field.GetValue(obj))); }
                catch { }
            }
            return (T)retval;
        }


        /// <summary>
        /// 将秒数转化为HH:MM:SS格式
        /// </summary>
        /// <param name="seconds"></param>
        /// <returns></returns>
        public static string FormatTimeFromSeconds(int seconds)
        {
            var h = seconds / 60 / 60;
            var m = (seconds - h * 60 * 60) / 60;
            var s = seconds - h * 60 * 60 - m * 60;
            return string.Format("{0:D2}:{1:D2}:{2:D2}", h, m, s);
        }

        /// <summary>
        /// 自动合并网格，贴图及骨骼
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="textureNames"></param>
        /// <param name="combineTexSize"></param>
        public static void AutoCombineMesh(GameObject obj, string[] textureNames, int combineTexSize = 2048)
        {
            Dictionary<string, List<SkinnedMeshRenderer>> needCombinelist = new Dictionary<string, List<SkinnedMeshRenderer>>();
            SkinnedMeshRenderer[] parts = obj.GetComponentsInChildren<SkinnedMeshRenderer>(true);
            foreach (var item in parts)
            {
                var shaderName = item.sharedMaterial.shader.name;
                if (needCombinelist.ContainsKey(shaderName))
                {
                    needCombinelist[shaderName].Add(item);
                }
                else
                {
                    var addList = new List<SkinnedMeshRenderer>();
                    addList.Add(item);
                    needCombinelist.Add(shaderName, addList);
                }
            }

            foreach (var item in needCombinelist)
            {
                // 只有一个不合并
                if (item.Value.Count <= 1) continue;
                List<Transform> bones = new List<Transform>();
                List<Vector2[]> uvList = new List<Vector2[]>();
                List<CombineInstance> combineInstances = new List<CombineInstance>();
                Material mat = GameObject.Instantiate(item.Value[0].sharedMaterial) as Material;
                Dictionary<string, List<Texture2D>> textureDict = new Dictionary<string, List<Texture2D>>();
                int uvCount = 0;
                foreach (var cur in item.Value)
                {
                    CombineInstance ci = new CombineInstance();
                    ci.mesh = cur.sharedMesh;
                    combineInstances.Add(ci);
                    uvList.Add(cur.sharedMesh.uv);
                    uvCount += cur.sharedMesh.uv.Length;
                    foreach (var needCombineTex in textureNames)
                    {
                        var getTexture = cur.sharedMaterial.GetTexture(needCombineTex) as Texture2D;
                        if (textureDict.ContainsKey(needCombineTex))
                        {
                            textureDict[needCombineTex].Add(getTexture);
                        }
                        else
                        {
                            List<Texture2D> addList = new List<Texture2D>();
                            addList.Add(getTexture);
                            textureDict.Add(needCombineTex, addList);
                        }
                    }
                    for (int k = 0; k < cur.bones.Length; k++)
                    {
                        bones.Add(cur.bones[k]);
                    }
                }

                Dictionary<string, Texture2D> combinedTexs = new Dictionary<string, Texture2D>();
                Rect[] packingResult = null;
                foreach (var needPackTexList in textureDict)
                {
                    Texture2D newCombineTex = new Texture2D(4, 4, TextureFormat.ARGB4444, true);
                    if (packingResult == null)
                    {
                        packingResult = newCombineTex.PackTextures(needPackTexList.Value.ToArray(), 0, combineTexSize);
                    }
                    else
                    {
                        newCombineTex.PackTextures(needPackTexList.Value.ToArray(), 0, combineTexSize);
                    }
                    combinedTexs.Add(needPackTexList.Key, newCombineTex);
                }

                //string textureName = "autocombine" + obj.name;
                Vector2[] atlasUVs = new Vector2[uvCount];
                int count = 0;
                for (int i = 0; i < uvList.Count; i++)
                {
                    var tmpArray = uvList[i];
                    for (int j = 0; j < tmpArray.Length; j++)
                    {
                        Vector2 uv = tmpArray[j];
                        atlasUVs[count].x = Mathf.Lerp(packingResult[i].xMin, packingResult[i].xMax, uv.x);
                        atlasUVs[count].y = Mathf.Lerp(packingResult[i].yMin, packingResult[i].yMax, uv.y);
                        count++;
                    }
                }
                GameObject newSkinnedGo = new GameObject("CombineObj");
                newSkinnedGo.transform.SetParent(obj.transform);

                var s = newSkinnedGo.AddComponent<SkinnedMeshRenderer>();
                Mesh nMesh = new Mesh();
                nMesh.CombineMeshes(combineInstances.ToArray(), true, false);
                s.sharedMesh = nMesh;
                s.bones = bones.ToArray();
                s.sharedMesh.uv = atlasUVs;
                s.sharedMaterial = mat;

                foreach (var combineTex in combinedTexs)
                {
                    s.sharedMaterial.SetTexture(combineTex.Key, combineTex.Value);
                }

                for (int i = 0; i < item.Value.Count; i++)
                {
                    var skin = item.Value[i];
                    GameObject.DestroyImmediate(skin.gameObject, true);
                }
            }



        }

        private static readonly string DefaultUserAgent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";
        /// <summary>  
        /// 获取网络日期时间  
        /// </summary>  
        /// <returns></returns>  
        public static string GetNetDateTime()
        {
            HttpWebRequest request = null;
            WebResponse response = null;
            WebHeaderCollection headerCollection = null;
            string datetime = string.Empty;
            try
            {
                request = WebRequest.Create("https://www.baidu.com") as HttpWebRequest;

                ServicePointManager.ServerCertificateValidationCallback =
                    delegate (object s, X509Certificate certificate,
                        X509Chain chain, SslPolicyErrors sslPolicyErrors)
                    {
                        return true;
                    };

                request.UserAgent = DefaultUserAgent;
                request.Timeout = 3000;
                response = (WebResponse)request.GetResponse();
                headerCollection = response.Headers;
                foreach (var h in headerCollection.AllKeys)
                {
                    if (h == "Date")
                    {
                        datetime = headerCollection[h];
                        break;
                    }
                }
                return datetime;
            }
            catch (Exception e)
            {
                Debug.LogException(e);
                return datetime;
            }
            finally
            {
                if (request != null)
                {
                    request.Abort();
                }
                if (response != null)
                {
                    response.Close();
                }
                if (headerCollection != null)
                {
                    headerCollection.Clear();
                }
            }
        }


        /// <summary>
        /// 裁剪数据
        /// </summary>
        /// <param name="src"></param>
        /// <param name="startIndex"></param>
        /// <param name="count"></param>
        /// <returns></returns>
        public static byte[] SubBytes(byte[] src, int startIndex, int count)
        {
            byte[] data = new byte[count];
            Buffer.BlockCopy(src, startIndex, data, 0, count);
            return data;
        }

        /// <summary>
        /// 获得路径中最长的路径名称
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static string GetDirPath(string path)
        {
            if (Directory.Exists(path)) return path;
            return path.Substring(0, path.LastIndexOf("/"));
        }

        /// <summary>
        /// 检查路径有效性,如果不存在该路径,则创建路径
        /// </summary>
        /// <param name="filePath"></param>
        public static string MakeDirExist(string filePath)
        {
            var dirPath = GetDirPath(filePath);
            if (!Directory.Exists(dirPath))
            {
                return Directory.CreateDirectory(dirPath).FullName;
            }
            return dirPath;
        }

        /// <summary>
        /// 获取Dir的完整路径名
        /// </summary>
        /// <param name="dirPath"></param>
        /// <returns></returns>
        public static string GetDirPathFullName(string dirPath)
        {
            // 先创建路径
            CreateDir(dirPath);
            DirectoryInfo dir = new DirectoryInfo(dirPath);
            return dir.FullName;
        }

        /// <summary>
        /// 将name_name转化为NameName格式
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public static string ConvertNameToFormat(string name)
        {
            StringBuilder sb = new StringBuilder();
            bool needUpper = true;
            for (int i = 0; i < name.Length; ++i)
            {
                string addValue = name[i].ToString();
                if (addValue == "_")
                {
                    needUpper = true;
                    continue;
                }
                if (needUpper)
                {
                    needUpper = false;
                    addValue = addValue.ToUpper();
                }
                sb.Append(addValue);
            }
            return sb.ToString();
        }

        /// <summary>
        /// 创建文件夹
        /// </summary>
        /// <param name="dirPath"></param>
        public static void CreateDir(string dirPath)
        {
            if (Directory.Exists(dirPath)) return;
            Directory.CreateDirectory(dirPath);
        }

        /// <summary>
        /// 获取字符串的MD5值（小写）
        /// </summary>
        /// <param name="sourceStr"></param>
        /// <returns></returns>
        public static string GetMD5(string sourceStr)
        {
            byte[] data = Encoding.GetEncoding("UTF-8").GetBytes(sourceStr);
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] OutBytes = md5.ComputeHash(data);
            string OutString = "";
            for (int i = 0; i < OutBytes.Length; i++)
            {
                OutString += OutBytes[i].ToString("x2");
            }

            return OutString.ToLower();
        }

        public static string GetMD5FromFile(string filePath)
        {
            if (!File.Exists(filePath))
            {
                LTDebug.LogError("尝试计算不存在文件的MD5:{0}", filePath);
                return "";
            }
            return GetMD5(File.ReadAllBytes(filePath));
        }

        public static string GetMD5(byte[] bytes)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] OutBytes = md5.ComputeHash(bytes);
            string OutString = "";
            for (int i = 0; i < OutBytes.Length; i++)
            {
                OutString += OutBytes[i].ToString("x2");
            }

            return OutString.ToLower();
        }

        /// <summary>
        /// 拷贝Dir
        /// </summary>
        /// <param name="srcPath"></param>
        /// <param name="aimPath"></param>
        /// <param name="exceptEndreses"></param>
        public static void CopyDirExcept(string srcPath, string aimPath, string[] exceptEndreses)
        {
            try
            {
                // 检查目标目录是否以目录分割字符结束如果不是则添加
                if (aimPath[aimPath.Length - 1] != System.IO.Path.DirectorySeparatorChar)
                {
                    aimPath += System.IO.Path.DirectorySeparatorChar;
                }
                // 判断目标目录是否存在如果不存在则新建
                if (!System.IO.Directory.Exists(aimPath))
                {
                    System.IO.Directory.CreateDirectory(aimPath);
                }
                // 得到源目录的文件列表，该里面是包含文件以及目录路径的一个数组
                // 如果你指向copy目标文件下面的文件而不包含目录请使用下面的方法
                string[] fileList = System.IO.Directory.GetFileSystemEntries(srcPath);
                // 遍历所有的文件和目录
                foreach (string file in fileList)
                {
                    bool isExcept = false;
                    for (int i = 0; exceptEndreses != null && i < exceptEndreses.Length; ++i)
                    {
                        if (file.EndsWith(exceptEndreses[i]))
                        {
                            isExcept = true;
                            break;
                        }
                    }
                    if (isExcept)
                    {
                        continue;
                    }
                    // 先当作目录处理如果存在这个目录就递归Copy该目录下面的文件
                    if (System.IO.Directory.Exists(file))
                    {
                        CopyDirExcept(file, aimPath + System.IO.Path.GetFileName(file), exceptEndreses);
                    }
                    // 否则直接Copy文件
                    else
                    {

                        System.IO.File.Copy(file, aimPath + System.IO.Path.GetFileName(file), true);
                    }
                }
            }
            catch (Exception e)
            {
                Debug.LogError("复制文件出错:" + e.ToString());
            }
        }

        /// <summary>
        /// 获取文件后缀名
        /// 自动转小写
        /// 不存在后缀名时,返回文件名
        /// </summary>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static string GetFileEndDress(string filePath)
        {
            if (!filePath.Contains("."))
            {
                int lastSptIndex = filePath.LastIndexOf("/");
                return filePath.Substring(lastSptIndex + 1, filePath.Length - lastSptIndex - 1).ToLower();
            }
            int lastIndexOfDot = filePath.LastIndexOf('.');
            string fileTypeName = filePath.Substring(lastIndexOfDot + 1, filePath.Length - lastIndexOfDot - 1).ToLower();
            return fileTypeName;
        }

        /// <summary>
        /// 通过字符串路径获取文件名字
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static string GetFileName(string path)
        {
            path = path.Replace("\\", "/");
            var lastIndexOfDot = path.LastIndexOf(".");
            if (lastIndexOfDot < 0) return null;
            var lastIndexOfSperate = path.LastIndexOf("/") + 1;
            return path.Substring(lastIndexOfSperate, lastIndexOfDot - lastIndexOfSperate);
        }

        /// <summary>
        /// 将路径名称转换为可用的key值名称
        /// </summary>
        /// <param name="pathName"></param>
        /// <returns></returns>
        public static string ConvertPathNameToKeyName(string pathName)
        {
            // 去掉后缀
            if (pathName.Contains("."))
            {
                pathName = pathName.Substring(0, pathName.LastIndexOf('.'));
            }
            // 排除冒号操作符号
            pathName = pathName.Replace(":", "#");
            // 排除分割符号
            pathName = pathName.Replace("/", "_");
            return pathName;
        }

    }
}
