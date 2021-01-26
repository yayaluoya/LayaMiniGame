using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LitJson;
using NPOI.SS.UserModel;

namespace LTGame
{
    /// <summary>
    /// 整型2维数组类型,[[1,2],[3,4]]
    /// </summary>
    class Export_Int2Array : BaseExcelFiledExporter
    {
        public override string[] typeStrs
        {
            get
            {
                return new string[] { "int[][]" };
            }
        }

        public override void DoExport(JsonData jsonData, CSFiled filed, ICell cell)
        {
            var cellStr = cell.StringCellValue;
            if (cellStr.StartsWith("[[") && cellStr.EndsWith("]]"))
            {
                if (cellStr.Length == 2)
                    return;
                jsonData[filed.name] = new JsonData();
                var numStr = cellStr.Substring(1, cellStr.Length - 2);
                var str = numStr.Split(";");
                foreach (var s in str)
                {
                    if (s.StartsWith("[") && s.EndsWith("]"))
                    {
                        JsonData json = new JsonData();
                        var arry = s.Substring(1, s.Length - 2);
                        var nums = arry.SplitToInt(",");
                        foreach (var num in nums)
                        {
                            json.Add(num);
                        }
                        jsonData[filed.name].Add(json);
                    }
                }
            }
            else
            {
                // LTDebug.LogError("配置类型错误,数组格式必须为[[XX,XX],[XX,XX]]");
            }
        }
    }
}
