using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using UnityEngine;

public static class StringEx
{

    /// <summary>
    /// 转换命名,将abc_abc转换为AbcAbc
    /// </summary>
    /// <param name="str"></param>
    /// <returns></returns>
    public static string FormatClassName(this string str)
    {
        var allStrs = str.Split("_");
        var formatName = "";
        for (int i = 0; i < allStrs.Length; ++i)
        {
            var cacheName = "" + allStrs[i][0];
            cacheName = cacheName.ToUpper();
            cacheName += allStrs[i].Substring(1);
            formatName += cacheName;
        }
        return formatName;
    }

    /// <summary>
    /// 是否是IPV4地址
    /// </summary>
    /// <param name="str"></param>
    /// <returns></returns>
    public static bool IsIPV4Address(this string str)
    {
        var blnTest = false;
        var _Result = true;

        var regex = new Regex("^[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}$");
        blnTest = regex.IsMatch(str);
        if (blnTest == true)
        {
            string[] strTemp = str.Split(new char[] { '.' }); // textBox1.Text.Split(new char[] { ‘.’ });
            int nDotCount = strTemp.Length - 1; //字符串中.的数量，若.的数量小于3，则是非法的ip地址
            if (3 == nDotCount)//判断字符串中.的数量
            {
                for (int i = 0; i < strTemp.Length; i++)
                {
                    if (Convert.ToInt32(strTemp[i]) > 255)
                    {
                        //大于255则提示，不符合IP格式
                        _Result = false;
                    }
                }
            }
            else
            {
                _Result = false;
            }
        }
        else
        {
            //输入非数字则提示，不符合IP格式
            _Result = false;
            // txtbox_ServerIP.Text = "";
        }
        return _Result;

    }

    /// <summary>
    /// unicode转中文
    /// </summary>
    /// <param name="text"></param>
    /// <returns></returns>
    public static string UnicodeToCH(this string text)
    {
        System.Text.RegularExpressions.MatchCollection mc = System.Text.RegularExpressions.Regex.Matches(text, "\\\\u([\\w]{4})");
        if (mc != null && mc.Count > 0)
        {
            foreach (System.Text.RegularExpressions.Match m2 in mc)
            {
                string v = m2.Value;
                string word = v.Substring(2);
                byte[] codes = new byte[2];
                int code = Convert.ToInt32(word.Substring(0, 2), 16);
                int code2 = Convert.ToInt32(word.Substring(2), 16);
                codes[0] = (byte)code2;
                codes[1] = (byte)code;
                text = text.Replace(v, Encoding.Unicode.GetString(codes));
            }
        }
        else
        {

        }
        return text;
    }

    public static string ReplaceAll(this string str, string oldStr, string newStr)
    {
        if (!str.Contains(oldStr))
        {
            return str;
        }
        return str.Replace(oldStr, newStr).ReplaceAll(oldStr, newStr);
    }

    public static string[] Split(this string str, string splitStr)
    {
        if (splitStr.Length == 1)
        {
            return str.Split(splitStr.ToCharArray());
        }
        var result = new List<string>();
        var firstIndex = str.IndexOf(splitStr);
        while (firstIndex >= 0)
        {
            result.Add(str.Substring(0, firstIndex));
            // 剩下的
            str = str.Substring(firstIndex + splitStr.Length);
            firstIndex = str.IndexOf(splitStr);
        }
        if (!string.IsNullOrEmpty(str))
        {
            result.Add(str);
        }
        return result.ToArray();
    }

    public static int[] SplitToInt(this string str, string splitStr, int defaultValue = 0)
    {
        var numStr = str.Split(splitStr);
        var result = new int[numStr.Length];
        for (int i = 0; i < result.Length; ++i)
        {
            if (!int.TryParse(numStr[i], out result[i]))
            {
                Debug.LogErrorFormat("错误的格式,期望数字,得到:{0}", numStr[i]);
            }
        }
        return result;
    }

    public static float[] SplitToFloat(this string str, string splitStr, float defaultValue = 0)
    {
        var numStr = str.Split(splitStr);
        var result = new float[numStr.Length];
        for (int i = 0; i < result.Length; ++i)
        {
            if (!float.TryParse(numStr[i], out result[i]))
            {
                Debug.LogErrorFormat("错误的格式,期望数字,得到:{0}", numStr[i]);
            }
        }
        return result;
    }

    public static string FormatEx(this string str, params object[] objs)
    {
        return string.Format(str, objs);
    }


}
