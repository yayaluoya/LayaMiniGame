﻿using LitJson;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LTGame
{
    class Export_FloatArray : BaseExcelFiledExporter
    {

        public override string[] typeStrs
        {
            get
            {
                return new string[] { "float[]", "Float[]", "FLOAT[]" };
            }
        }

        public override void DoExport(JsonData jsonData, CSFiled filed, ICell cell)
        {
            var cellStr = cell.StringCellValue;
            if (cellStr.StartsWith("[") && cellStr.EndsWith("]"))
            {
                if (cellStr.Length == 2)
                {
                    jsonData[filed.name] = new JsonData();
                    jsonData[filed.name].SetJsonType(JsonType.Array);
                }
                else
                {
                    jsonData[filed.name] = new JsonData();
                    var numStr = cellStr.Substring(1, cellStr.Length - 2);
                    var nums = numStr.SplitToFloat(",");
                    foreach (var num in nums)
                    {
                        jsonData[filed.name].Add((double)num);
                    }
                }
            }
            else
            {
                LTDebug.LogError("配置类型错误,数组格式必须为[XX,XX,XX,XX],当前为:{0}", cellStr);
            }
        }

    }
}
