/**
 * 关于v2向量的工具
 */
export default class V2Utils {
    /**
     * 通过一个字符串构建v2向量
     * @param str 
     */
    private parseVector2(str: string): Laya.Vector2 {
        var strs = str.split(',');
        return new Laya.Vector2(Number(strs[0]), Number(strs[1]));
    }

    /**
     * 设置V2向量长度
     * @param _v2 目标向量
     * @param _l 目标长度
     */
    public static setV2Length(_v2: Laya.Vector2, _l: number) {
        let _a: number = _l / Laya.Vector2.scalarLength(_v2);
        _v2.x = _v2.x * _a;
        _v2.y = _v2.y * _a;
    }
}