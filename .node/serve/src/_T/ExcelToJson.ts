var xlsx = require('node-xlsx').default;

/**
 * excel表导出到json
 */
export default class ExcelToJson {
    /**
     * 导出配置文件到json
     * @param _excel excel文件路径
     * @param _json json文件保存路径
     * @param _ts ts文件保存路径
     */
    public static excelToJson(_excel: string, _json: string, _ts: string): Promise<any> {
        return new Promise<any>((r, e) => {
            if (!/[a-zA-Z0-9_-]+\.xlsx/.test(_excel)) {
                e('不是配置表' + _excel);
                return;
            }
            let _excelData: IExcelData[];
            try {
                _excelData = xlsx.parse(_excel) as IExcelData[];
            } catch (_e) {
                e(_e);
                return;
            }
            //判断是关系表还是非关系表
            if (/config\.xlsx/i.test(_excel.match(/[^\/\\]+\.xlsx$/)[0])) {
                //关系表
                for (let _o of _excelData) {
                    //
                }
            }
            else if (/const\.xlsx/i.test(_excel.match(/[^\/\\]+\.xlsx$/)[0])) {
                //非关系表
                for (let _o of _excelData) { }
            }
            else {
                e('表后缀不是，config | const');
                return;
            }
            r(_excelData);
        });
    }
}

/**
 * 工作表数据接口
 */
interface IExcelData {
    /** 工作表名字 */
    name: string,
    /** 工作表数据 */
    data: any[][];
}