using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System;
using System.Diagnostics;
using System.IO;

namespace LTGame
{

    class LTProtoGenHelper
    {

        public static void HandleDir(string progressDir)
        {

        }

        public static void CopySavePath1ToPath2()
        {
            var savePath = LTEditorUtils.GetRealPath(LTEditorData.instance.protoGenPath);
            if (!Directory.Exists(savePath))
            {
                UnityEngine.Debug.LogErrorFormat("不存在原始路径:{0}", savePath);
                return;
            }
            var files = Directory.GetFileSystemEntries(savePath);
            if (string.IsNullOrEmpty(LTEditorData.instance.protoGenPath2))
            {
                UnityEngine.Debug.LogError("目标路径不能为空");
                return;
            }
            var savePath2 = LTEditorData.instance.protoGenPath2;
            var path = LTUtils.MakeDirExist(savePath2);
            foreach (var filePath in files)
            {
                if (filePath.EndsWith(".cs"))
                {
                    var file = new FileInfo(filePath);
                    var destPath = path + "/" + file.Name;
                    File.Copy(filePath, destPath, true);
                    UnityEngine.Debug.LogFormat("复制成功:{0}-->{1}", filePath, destPath);
                }
            }

        }

        public static void HandleProto(string protoFile)
        {
            var p = new Process();
            var startInfo = p.StartInfo;
            startInfo.FileName = Application.dataPath + "/Plugins/LTGame/Editor/Utils/ProtoGen/protoc.exe";
            var savePath = LTEditorUtils.GetRealPath(LTEditorData.instance.protoGenPath);
            LTUtils.MakeDirExist(savePath);
            var protoDirPath = LTUtils.GetDirPath(protoFile);
            var arguments = string.Format(" --csharp_out={0} --proto_path {1} {2}", savePath, protoDirPath, protoFile);
            // arguments = arguments.ReplaceAll("/", "\\\\");
            UnityEngine.Debug.LogFormat("arguments:{0}", arguments);
            startInfo.Arguments = arguments;
            startInfo.RedirectStandardError = true;
            startInfo.UseShellExecute = false;
            p.Start();
            var errorStr = p.StandardError.ReadToEnd();
            p.WaitForExit();

            if (string.IsNullOrEmpty(errorStr))
            {
                UnityEngine.Debug.LogFormat("生成{0}到{1}", protoFile, savePath);
            }
            else
            {
                UnityEngine.Debug.LogErrorFormat("errorOutput:{0}", errorStr);
                UnityEngine.Debug.LogErrorFormat("生成{0}到{1}失败", protoFile, savePath);
            }
        }
    }
}
