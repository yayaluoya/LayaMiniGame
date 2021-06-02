import BaseData from "src/_T/Data/BaseData";

/**
 * 测试数据
 */
export default class TestData extends BaseData {
    number: number = 0;
    string: string = 'string 中文 特殊符号！@#￥%……&*（）——+！@#￥123!@#$%^&*()_+,/.\"';
    boolean: boolean = true;
    array: string[] = [];
    object: {
        a: number,
        b: string,
        c: boolean
    } = {
            a: 1,
            b: 'b',
            c: true,
        };
    test: string = '';
}