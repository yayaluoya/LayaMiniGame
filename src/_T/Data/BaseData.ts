/**
 * 基类数据
 * ! 只能出现数据层面的东西，而且必须定义一个值。
 * 数组，对象，值 (数字，字符串，布尔值)
 */
export default abstract class BaseData {
    constructor() {
        //阻断原型链。
        return Object.create(null);
    }
}