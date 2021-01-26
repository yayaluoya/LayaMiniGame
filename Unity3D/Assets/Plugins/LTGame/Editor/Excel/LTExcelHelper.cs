using UnityEngine;
using UnityEditor;
using LitJson;
using System.Collections.Generic;
using NPOI.SS.UserModel;
using System.IO;
using NPOI.HSSF.UserModel;
using NPOI.XSSF.UserModel;
using System.Reflection;
using System;
using System.Collections.Specialized;
using System.Collections;
using System.Text;

namespace LTGame
{
    public class LTExcelHelper
    {

        private static Dictionary<string, BaseExcelFiledExporter> _handleActions;

        private static void _CheckHandle()
        {
            if (_handleActions != null) return;
            _handleActions = new Dictionary<string, BaseExcelFiledExporter>();
            var baseExport = typeof(BaseExcelFiledExporter);
            foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                foreach (Type type in assembly.GetTypes())
                {
                    if (type.BaseType == baseExport)
                    {
                        var instance = type.Assembly.CreateInstance(type.FullName) as BaseExcelFiledExporter;
                        foreach (var typeStr in instance.typeStrs)
                        {
                            if (_handleActions.ContainsKey(typeStr))
                            {
                                LTDebug.LogError("存在重复注册的Excel Filed解析函数:{0}", instance.typeStrs);
                            }
                            else
                            {
                                _handleActions.Add(typeStr, instance);
                            }
                        }

                    }
                }
            }
        }

        private static string _GenJson(CSStruct code, List<IRow> rows, bool isTs)
        {
            _CheckHandle();
            var filedCount = code.fileds.Count;
            var totalData = new JsonData();
            if (code.isConst)
            {
                for (var i = 0; i < code.fileds.Count; ++i)
                {
                    var filed = code.fileds[i];
                    var row = rows[i];
                    if (row == null) continue;
                    var rowName = row.GetCell(0).StringCellValue;
                    var cell = row.GetCell(2);

                    BaseExcelFiledExporter exporter = null;
                    if (_handleActions.TryGetValue(filed.mtype, out exporter))
                    {
                        exporter.DoExport(totalData, filed, cell);
                    }
                    else
                    {
                        LTDebug.LogError("未处理的配表类型:{0}", filed.mtype);
                    }
                }
            }
            else
            {
                var isAdded = false;
                foreach (var row in rows)
                {
                    if (row == null) continue;
                    var jsonData = new JsonData();
                    var isId = true;
                    var id = 0;
                    var isGen = false;
                    foreach (var filed in code.fileds)
                    {
                        if (isId)
                        {
                            isId = false;
                            // 检查是否是ID
                            if (filed.name != "id")
                            {
                                LTDebug.LogError("excel配置表首行必须为id");
                                break;
                            }
                            // 检查是否是ID
                            if (filed.mtype != "int")
                            {
                                LTDebug.LogError("id配表类型必须为int");
                                break;
                            }
                            // 检查内容是否为空
                            var idCell = row.GetCell(filed.index);
                            if (idCell == null)
                            {
                                break;
                            }
                            if (idCell.CellType != CellType.Numeric)
                            {
                                break;
                            }
                            id = Mathf.CeilToInt((float)row.GetCell(filed.index).NumericCellValue);
                            isGen = true;
                        }
                        if (filed.mtype == "" || filed.mtype == "skip") continue;
                        var cell = row.GetCell(filed.index);
                        BaseExcelFiledExporter exporter = null;
                        if (_handleActions.TryGetValue(filed.mtype, out exporter))
                        {
                            exporter.DoExport(jsonData, filed, cell);
                        }
                        else
                        {
                            LTDebug.LogError("未处理的配表类型:{0}", filed.mtype);
                        }
                    }
                    if (isGen)
                    {
                        if (isTs)
                        {
                            (totalData as IDictionary)[id.ToString()] = jsonData;
                        }
                        else
                        {
                            totalData.Add(jsonData);
                        }
                        isAdded = true;
                    }
                }
                if (!isAdded)
                {
                    return string.Empty;
                }
            }

            if (isTs)
            {
                return totalData.ToJson();
            }
            else
            {
                var finalData = new JsonData();
                finalData["dataList"] = totalData;
                return finalData.ToJson();
            }

        }

        public static void WriteStrToFile(string str, string filePath)
        {
            LTUtils.MakeDirExist(filePath);
            FileStream fs = new FileStream(filePath, FileMode.Create, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs);

            sw.WriteLine(str);

            sw.Close();
            fs.Close();
        }

        private static void _ReadPorps(IRow row, List<string> list)
        {
            int index = 0;
            while (true)
            {
                var cell = row.GetCell(index);
                if (cell == null) return;
                var value = cell.StringCellValue;
                if (string.IsNullOrEmpty(value)) return;
                list.Add(value);
                index++;
            }
        }

        public static IWorkbook ReadExcel(string excelPath)
        {
            var isXlsx = excelPath.EndsWith(".xlsx", System.StringComparison.CurrentCultureIgnoreCase);

            Debug.Log("处理文件:" + excelPath);
            FileStream fs = null;
            try
            {
                fs = new FileStream(excelPath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
            }
            catch { }

            if (fs == null)
            {
                LTDebug.LogError("无法打开文件{0},跳过处理", excelPath);
                return null;
            }

            IWorkbook workbook = null;
            if (isXlsx)
            {
                workbook = new XSSFWorkbook(fs);
            }
            else
            {
                workbook = new HSSFWorkbook(fs);
            }

            return workbook;
        }

        public static void GenCodeWithFile(string excelPath, bool isTs)
        {
            var fileName = LTUtils.GetFileName(excelPath);

            if (fileName.StartsWith("~"))
            {
                // excel临时文件自动跳过
                return;
            }

            if (fileName.EndsWith("const"))
            {
                _DoExportConstConfig(excelPath, isTs);
            }
            else
            {
                _DoExportNormalConfig(excelPath, isTs);
            }

        }

        private static void _DoExportConstConfig(string excelPath, bool isTs)
        {
            var fileName = LTUtils.GetFileName(excelPath);

            var workbook = ReadExcel(excelPath);
            var sheet1 = workbook.GetSheetAt(0);
            var code = new CSStruct();
            code.nameSpace = isTs ? "NoName" : LTEditorData.instance.excelNameSpace;
            code.className = LTUtils.ConvertNameToFormat(fileName);
            code.fileds = new List<CSFiled>();
            code.isConst = true;

            var startIndex = 1;
            var rows = new List<IRow>();
            var row = sheet1.GetRow(startIndex);
            while (row != null)
            {
                code.fileds.Add(new CSFiled()
                {
                    index = startIndex,
                    mtype = row.GetCell(1).StringCellValue,
                    region = row.GetCell(3).StringCellValue,
                    name = row.GetCell(0).StringCellValue
                });
                rows.Add(row);
                startIndex++;
                row = sheet1.GetRow(startIndex);
            }

            if (isTs)
            {
                var codeSb = new StringBuilder();
                // 写入命名空间
                codeSb.AppendLine("export namespace {0} {".ReplaceAll("{0}", code.className));

                // 写入结构体
                codeSb.AppendLine(code.GetTSClass());

                var tsSavePath = LTEditorData.instance.ts_configCodeSavePath;
                if (tsSavePath.StartsWith("/"))
                {
                    tsSavePath = Application.dataPath + tsSavePath;
                }
                tsSavePath = tsSavePath + "/" + code.className + ".ts";
                WriteStrToFile(codeSb.ToString(), tsSavePath);

                // 写入数据
                var minJson = _GenJson(code, rows, isTs);
                var jsonSavePath = LTEditorData.instance.ts_configJsonSavePath;
                if (jsonSavePath.StartsWith("/"))
                {
                    jsonSavePath = Application.dataPath + jsonSavePath;
                }
                jsonSavePath = jsonSavePath + "/" + code.className + ".json";
                WriteStrToFile(minJson, jsonSavePath);

                Debug.Log("[TS模式]配置生成完成");
                Debug.LogFormat("ts:{0},json:{1}", tsSavePath, jsonSavePath);

            }
            else
            {
                Debug.LogError("暂未支持");
            }

        }

        private static void _DoExportNormalConfig(string excelPath, bool isTs)
        {
            var fileName = LTUtils.GetFileName(excelPath);

            var workbook = ReadExcel(excelPath);
            var sheet1 = workbook.GetSheetAt(0);
            var code = new CSStruct();
            code.nameSpace = isTs ? "NoName" : LTEditorData.instance.excelNameSpace;
            code.className = LTUtils.ConvertNameToFormat(fileName);
            code.fileds = new List<CSFiled>();
            code.isConst = false;

            var comments = new List<string>();
            var types = new List<string>();
            var names = new List<string>();

            const int commentIndex = 0;
            const int typeIndex = 1;
            const int nameIndex = 2;

            _ReadPorps(sheet1.GetRow(commentIndex), comments);
            _ReadPorps(sheet1.GetRow(typeIndex), types);
            _ReadPorps(sheet1.GetRow(nameIndex), names);

            if (comments.Count != types.Count
                || types.Count != names.Count)
            {
                Debug.LogError("格式不正确");
                return;
            }

            for (int i = 0; i < comments.Count; ++i)
            {
                var comment = comments[i];
                var type = types[i];
                var name = names[i];
                code.fileds.Add(new CSFiled() { name = name, mtype = type, region = comment, index = i });
            }

            var rows = new List<IRow>();
            var index = 3;
            IRow row = null;
            while ((row = sheet1.GetRow(index++)) != null)
            {
                rows.Add(row);
            }

            if (isTs)
            {
                _GenTs(isTs, code, rows);
            }
            else
            {
                _GenCSharp(isTs, code, rows);
            }
        }

        private static void _GenTs(bool isTs, CSStruct code, List<IRow> rows)
        {
            var codeSb = new StringBuilder();
            // 写入命名空间
            codeSb.AppendLine("export namespace {0} {".ReplaceAll("{0}", code.className));

            // 写入结构体
            codeSb.AppendLine(code.GetTSClass());

            var tsSavePath = LTEditorData.instance.ts_configCodeSavePath;
            if (tsSavePath.StartsWith("/"))
            {
                tsSavePath = Application.dataPath + tsSavePath;
            }
            tsSavePath = tsSavePath + "/" + code.className + ".ts";
            WriteStrToFile(codeSb.ToString(), tsSavePath);

            // 写入数据
            var minJson = _GenJson(code, rows, isTs);
            var jsonSavePath = LTEditorData.instance.ts_configJsonSavePath;
            if (jsonSavePath.StartsWith("/"))
            {
                jsonSavePath = Application.dataPath + jsonSavePath;
            }
            jsonSavePath = jsonSavePath + "/" + code.className + ".json";
            WriteStrToFile(minJson, jsonSavePath);

            Debug.Log("[TS模式]配置生成完成");
            Debug.LogFormat("ts:{0},json:{1}", tsSavePath, jsonSavePath);
        }

        private static void _GenCSharp(bool isTs, CSStruct code, List<IRow> rows)
        {
            var minJson = _GenJson(code, rows, isTs);
            var formatJson = JsonFormatterPlus.JsonFormatter.Format(minJson);
            var jsonSavePath = LTEditorData.instance.configDataSavePath;
            if (jsonSavePath.StartsWith("/"))
            {
                jsonSavePath = Application.dataPath + jsonSavePath;
            }
            var jsonPath = jsonSavePath + "/" + code.className + ".json";
            WriteStrToFile(formatJson, jsonPath);

            var codeSavePath = LTEditorData.instance.configCodeSavePath;
            if (codeSavePath.StartsWith("/"))
            {
                codeSavePath = Application.dataPath + codeSavePath;
            }
            var codePath = codeSavePath + "/" + code.className + ".cs";

            var cachePath = jsonPath.Replace(Application.dataPath, "Assets");
            WriteStrToFile(code.GetString(cachePath), codePath);

            Debug.Log("[C#模式]配置生成完成");
            Debug.LogFormat("code:{0}", codePath);
            Debug.LogFormat("json:{0}", jsonPath);
        }

        public static void GenCodeWithDir(string dirPath, bool isTs)
        {
            Debug.Log("处理路径:" + dirPath);
            var getFiles = Directory.GetFileSystemEntries(dirPath);
            foreach (var file in getFiles)
            {
                if (file.EndsWith(".xls") || file.EndsWith(".xlsx"))
                {
                    GenCodeWithFile(file, isTs);
                }
            }
            AssetDatabase.Refresh();
        }

    }
}


