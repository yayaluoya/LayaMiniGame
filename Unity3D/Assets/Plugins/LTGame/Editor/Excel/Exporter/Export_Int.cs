using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LitJson;
using NPOI.SS.UserModel;

namespace LTGame
{
    class Export_Int : BaseExcelFiledExporter
    {
        public override string[] typeStrs
        {
            get
            {
                return new string[] { "int" };
            }
        }

        public override void DoExport(JsonData jsonData, CSFiled filed, ICell cell)
        {
            if (cell == null)
            {
                jsonData[filed.name] = 0;
            }
            else if (cell.CellType == CellType.String)
            {
                int.TryParse(cell.StringCellValue, out int parseInt);
                jsonData[filed.name] = parseInt;
                LTDebug.LogWarning("int格式,获取到配置表为string:" + cell.StringCellValue + "已自动转为int:" + parseInt);
            }
            else if (cell.CellType == CellType.Numeric)
            {
                jsonData[filed.name] = (int)cell.NumericCellValue;
            }
            else
            {
                LTDebug.LogError("int格式期望类型不匹配,当前为:" + cell.CellType);
                jsonData[filed.name] = 0;
            }
        }
    }
}
