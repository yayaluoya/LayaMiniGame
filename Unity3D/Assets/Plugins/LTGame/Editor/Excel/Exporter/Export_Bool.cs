using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LitJson;
using NPOI.SS.UserModel;

namespace LTGame
{
    class Export_Bool : BaseExcelFiledExporter
    {
        public override string[] typeStrs
        {
            get
            {
                return new string[] { "bool", "boolean" };
            }
        }

        public override void DoExport(JsonData jsonData, CSFiled filed, ICell cell)
        {
            var isTure = false;
            switch(cell.CellType)
            {
                case CellType.Numeric:
                    isTure = cell.NumericCellValue == 1;
                    break;
                case CellType.String:
                    if (cell.StringCellValue.Equals("true", System.StringComparison.CurrentCultureIgnoreCase))
                    {
                        isTure = true;
                    }
                    break;
                case CellType.Boolean:
                    isTure = cell.BooleanCellValue;
                    break;
                default:
                    LTDebug.LogError("配置类型错误,期望为0/1/true/false");
                    break;
            }
            jsonData[filed.name] = isTure;
        }
    }
}
