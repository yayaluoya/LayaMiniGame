using LitJson;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LTGame
{
    abstract class BaseExcelFiledExporter
    {

        /// <summary>
        /// 指定解析类型
        /// </summary>
        public abstract string[] typeStrs { get; }

        /// <summary>
        /// 具体导出事件
        /// </summary>
        public abstract void DoExport(JsonData jsonData, CSFiled filed, ICell cell);


    }
}
