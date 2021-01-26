using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LitJson;
using NPOI.SS.UserModel;

namespace LTGame
{
    class Export_StringArray : BaseExcelFiledExporter
    {
        public override string[] typeStrs
        {
            get
            {
                return new string[] { "string[]" };
            }
        }

        public override void DoExport(JsonData jsonData, CSFiled filed, ICell cell)
        {
            var cellStr = cell.StringCellValue;
            if (cellStr.StartsWith("[") && cellStr.EndsWith("]"))
            {
                if (cellStr.Length == 2)
                {
                    // 不添加任何东西
                }
                else
                {
                    jsonData[filed.name] = new JsonData();
                    var str = cellStr.Substring(2, cellStr.Length - 4);
                    var strArray = str.Split("\",\"");
                    foreach (var singleStr in strArray)
                    {
                        jsonData[filed.name].Add(singleStr);
                    }
                }
            }
            else
            {
                LTDebug.LogError("配置类型错误,数组格式必须为[\"XX\",\"XX\",\"XX\",\"XX\"]");
            }
        }
    }
}
