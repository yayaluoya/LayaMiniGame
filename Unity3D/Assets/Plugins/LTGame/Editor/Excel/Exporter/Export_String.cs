using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LitJson;
using NPOI.SS.UserModel;

namespace LTGame
{
    class Export_String : BaseExcelFiledExporter
    {
        public override string[] typeStrs
        {
            get
            {
                return new string[] { "string" };
            }
        }

        public override void DoExport(JsonData jsonData, CSFiled filed, ICell cell)
        {
            if (cell != null && cell.CellType == CellType.Numeric)
            {
                jsonData[filed.name] = cell.NumericCellValue + "";
            }
            else if (cell == null || cell.StringCellValue == null)
            {
                jsonData[filed.name] = "";
            }
            else
            {
                jsonData[filed.name] = cell.StringCellValue;
            }
        }
    }
}
