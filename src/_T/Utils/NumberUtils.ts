/**
 * 字符串处理工具
 */
export default class NumberUtils {
    /**
     * 获取指定尾数位数字符串
     * @param num 源字符串
     * @param decimal 尾数位置 
     */
    public static toFixed(num: number, decimal: number = 0) {
        let _num: string = num.toString();
        let index = _num.indexOf('.');
        if (index !== -1) {
            _num = _num.substring(0, decimal + index + 1);
        } else {
            _num = _num.substring(0);
        }
        return parseFloat(_num);
    }

    /**
     * 获取一个数的符号
     * @param _n 
     */
    public static getNumberSymbol(_n: number): 1 | -1 | 0 {
        if (_n > 0) {
            return 1;
        } else if (_n < 0) {
            return -1;
        } else {
            return 0;
        }
    }

    /**
     * 根据一个范围获取数值
     * @param _number 该数值
     * @param _min 最小值
     * @param _max 最大值
     */
    public static getNumberAtScope(_number: number, _min?: number, _max?: number): number {
        //
        let _n: number = _number;
        if (typeof _min != "undefined") {
            _n = Math.max(_min, _n);
        }
        if (typeof _max != "undefined") {
            _n = Math.min(_max, _n);
        }
        //
        return _n;
    }
}