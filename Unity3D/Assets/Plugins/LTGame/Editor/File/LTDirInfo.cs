using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LTGame
{

    using System.IO;
    using UnityEngine;

    public class LTDirInfo
    {

        public const string split_char = "/";

        /// <summary>
        /// 上一级
        /// </summary>
        public LTDirInfo upDir { get; private set; }

        /// <summary>
        /// 当前目录名字
        /// </summary>
        public string currentName { get; private set; }

        public static LTDirInfo CreateDirInfo(string fullPath)
        {
            return _Init(fullPath);
        }

        public LTDirInfo(string currentDirName)
        {
            currentName = currentDirName;
        }

        private static LTDirInfo _Init(string fullDirPath)
        {
            var dirPath = LTUtils.GetDirPath(fullDirPath);
            var splitDirs = dirPath.Split("/");
            var dirList = new LTDirInfo[splitDirs.Length];
            for (var i = 0; i < dirList.Length; ++i)
            {
                var splitDir = splitDirs[i];
                var dir = new LTDirInfo(splitDir);
                dirList[i] = dir;
            }
            for (var i = 1; i < dirList.Length; ++i)
            {
                dirList[i - 1].Connect(dirList[i]);
            }
            return dirList[splitDirs.Length - 1];
        }

        public void Connect(LTDirInfo nextDir)
        {
            nextDir.upDir = this;
        }

        public LTDirInfo[] GetFull()
        {
            var dirs = new Stack<LTDirInfo>();

            var work = this;
            while (work != null)
            {
                dirs.Push(work);
                work = work.upDir;
            }

            var finalList = new List<LTDirInfo>();
            while (dirs.Count > 0)
            {
                finalList.Add(dirs.Pop());
            }

            return finalList.ToArray();
        }

        public string Match(LTDirInfo source)
        {
            var selfFull = GetFull();
            var sourceFull = source.GetFull();

            var matchIndex = 0;
            var sourceFullIndex = sourceFull.Length;
            for (; matchIndex < selfFull.Length && matchIndex < sourceFull.Length; ++matchIndex)
            {
                if (selfFull[matchIndex].currentName != sourceFull[matchIndex].currentName)
                {
                    break;
                }
            }


            // 返回子路径
            var finalStr = "";

            if (matchIndex == 1)
            {
                // 返回全路径
                finalStr = selfFull[0].currentName + "/";
            }
            else
            {
                finalStr = "/";
            }

            // 拼接返回符
            for (var i = matchIndex; i < sourceFullIndex; ++i)
            {
                finalStr += "../";
            }

            // 拼接后路劲
            for (var i = matchIndex; i < selfFull.Length; ++i)
            {
                finalStr += selfFull[i].currentName + "/";
            }

            return finalStr;
        }

    }
}
