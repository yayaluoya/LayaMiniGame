import BaseData from "./BaseData";
import BaseDataManger from "./BaseDataManger";

/**
 * 临时数据代理基类
 * 泛型为数据类型
 */
export default abstract class BaseShortDataProxy<Data extends BaseData> extends BaseDataManger {
    /**
     * 初始化数据
     */
    public InitData() { }
}