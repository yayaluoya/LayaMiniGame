import BaseData from "./BaseData";

/**
 * 数据处理工具
 */
export default class DataT {
    /**
     * 数据模板装饰器
     * @param _data 数据模板
     */
    public static DecorateDataTemplate(_data: { new(): BaseData }) {
        return function (target: any) {
            //设置数据模板
            target.prototype.dataTemplate = _data;
        }
    }
}