/**
 * 数值常量，不需要配表
 */
export default class ValueConst {
    /** 零向量，不能修改 */
    public static readonly m_zeroV3: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
    /** 零向量，不能修改 */
    public static readonly m_zeroV2: Laya.Vector2 = new Laya.Vector2(0, 0);

    /** 零v3向量的克隆向量 */
    public static get zeroV3(): Laya.Vector3 {
        return ValueConst.m_zeroV3.clone();
    }

    /** 零v2向量的克隆向量 */
    public static get zeroV2(): Laya.Vector2 {
        return ValueConst.m_zeroV2.clone();
    }
}