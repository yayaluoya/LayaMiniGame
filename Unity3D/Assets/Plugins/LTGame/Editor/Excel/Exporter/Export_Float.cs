using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LitJson;
using NPOI.SS.UserModel;

namespace LTGame
{
    class Export_Float : BaseExcelFiledExporter
    {
        public override string[] typeStrs
        {
            get
            {
                return new string[] { "float" };
            }
        }

        public override void DoExport(JsonData jsonData, CSFiled filed, ICell cell)
        {
            if(cell == null)
            {
                jsonData[filed.name] = 0;
            }
            else if (cell.CellType == CellType.Numeric)
            {
                var fValue = cell.NumericCellValue;
                jsonData[filed.name] = fValue;
            }
            else
            {
                LTDebug.LogError("配置类型错误,期望为浮点数,得到类型为:" + cell.CellType);
            }
        }
    }
}
