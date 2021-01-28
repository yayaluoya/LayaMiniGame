import MathUtils from "./MathUtils";
/**
 * V2向量扩展
 */
export default class Vector2Ex {

    public static get up(): Laya.Vector2 { return new Laya.Vector2(0, 1); }

    public static Dot(left: Laya.Vector2, right: Laya.Vector2): number {
        return left.x * right.x + left.y * right.y;
    }

    public static Angle(from: Laya.Vector2, to: Laya.Vector2): number {
        let num = Math.sqrt((this.MagnitudeSqrt(from) * this.MagnitudeSqrt(to)));
        let flag = num < 1E-15;
        if (flag) {
            return 0;
        }
        else {
            let num2 = MathUtils.Clamp(this.Dot(from, to) / num, -1, 1);
            return Math.acos(num2) * MathUtils.Rad2Deg;
        }
    }

    public static SignedAngle(from: Laya.Vector2, to: Laya.Vector2): number {
        let num = this.Angle(from, to);
        let num2 = MathUtils.Sign(from.x * to.y - from.y * to.x);
        return num * num2;
    }

    public static MagnitudeSqrt(vec: Laya.Vector2): number {
        return vec.x * vec.x + vec.y * vec.y;
    }

}

/**
 * 二维向量数据类
 */
export class Vector2Data {
    /** X轴 */
    public x: number;

    /** Y轴 */
    public y: number;

    //
    public constructor(_x: number = 0, _y: number = 0) {
        this.x = _x;
        this.y = _y;
    }

    /**
     * 三维向量转数据
     * @param _V2 三维向量
     */
    public static V2ToData(_V2: Laya.Vector2): Vector2Data {
        //
        return new Vector2Data(_V2.x, _V2.y);
    }

    public static DataToV2(_data: Vector2Data): Laya.Vector2 {
        return new Laya.Vector2(_data.x, _data.y);
    }
}