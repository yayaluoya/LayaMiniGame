import MathUtils from "./MathUtils";
/**
 * V3向量扩展
 */
export default class Vector3Ex {

    /**
     * 
     * 增加方向常量，可用于赋值给transform信息，
     * 只能用于当作临时变量使用，不可持有
     * 
     */
    protected static __temp__: Laya.Vector3;
    protected static __up__: Laya.Vector3;
    protected static __down__: Laya.Vector3;
    protected static __forward__: Laya.Vector3;
    protected static __zero__: Laya.Vector3;
    protected static __one__: Laya.Vector3;

    public static get temp(): Laya.Vector3 {
        if (!Vector3Ex.__temp__) {
            Vector3Ex.__temp__ = Vector3Ex.zero;
        }
        Vector3Ex.__temp__.setValue(0, 0, 0);
        return Vector3Ex.__temp__
    }

    public static get s_up(): Laya.Vector3 {
        if (!Vector3Ex.__up__) {
            Vector3Ex.__up__ = Vector3Ex.up;
        }
        Vector3Ex.__up__.setValue(0, 1, 0);
        return Vector3Ex.__up__
    }

    public static get s_down(): Laya.Vector3 {
        if (!Vector3Ex.__down__) {
            Vector3Ex.__down__ = Vector3Ex.down;
        }
        Vector3Ex.__down__.setValue(0, -1, 0);
        return Vector3Ex.__down__
    }

    public static get s_forward(): Laya.Vector3 {
        if (!Vector3Ex.__forward__) {
            Vector3Ex.__forward__ = Vector3Ex.forward;
        }
        Vector3Ex.__forward__.setValue(0, 0, 1);
        return Vector3Ex.__forward__
    }

    public static get s_zero(): Laya.Vector3 {
        if (!Vector3Ex.__zero__) {
            Vector3Ex.__zero__ = Vector3Ex.zero;
        }
        Vector3Ex.__zero__.setValue(0, 0, 0);
        return Vector3Ex.__zero__
    }

    public static get s_one(): Laya.Vector3 {
        if (!Vector3Ex.__one__) {
            Vector3Ex.__one__ = Vector3Ex.one;
        }
        Vector3Ex.__one__.setValue(1, 1, 1);
        return Vector3Ex.__one__
    }

    public static get up(): Laya.Vector3 {
        return new Laya.Vector3(0, 1, 0);
    }

    public static get down(): Laya.Vector3 {
        return new Laya.Vector3(0, -1, 0);
    }

    public static get forward(): Laya.Vector3 {
        return new Laya.Vector3(0, 0, 1);
    }

    public static get zero(): Laya.Vector3 {
        return new Laya.Vector3(0, 0, 0);
    }

    public static get one(): Laya.Vector3 {
        return new Laya.Vector3(1, 1, 1);
    }

    public static get back(): Laya.Vector3 {
        return new Laya.Vector3(0, 0, -1);
    }

    public static get left(): Laya.Vector3 {
        return new Laya.Vector3(-1, 0, 0);
    }

    public static get right(): Laya.Vector3 {
        return new Laya.Vector3(1, 0, 0);
    }

    public static Cross(right: Laya.Vector3, left: Laya.Vector3): Laya.Vector3 {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.cross(right, left, result);
        return result;
    }

    public static Subtract(right: Laya.Vector3, left: Laya.Vector3): Laya.Vector3 {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.subtract(right, left, result);
        return result;
    }

    public static ClampMagnitude(vector: Laya.Vector3, maxLength: number) {
        var result = new Laya.Vector3(0, 0, 0);
        var sqrMagnitude = 0;
        if (Laya.Vector3.distanceSquared(vector, result) > maxLength * maxLength) {
            result = Vector3Ex.Scale(Vector3Ex.Normalize(vector), maxLength);
        }
        else {
            result = vector;
        }
        return result;
    }

    public static Normalize(vec: Laya.Vector3): Laya.Vector3 {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.normalize(vec, result);
        return result;
    }

    public static Add(...vecs: Laya.Vector3[]): Laya.Vector3 {
        var result = new Laya.Vector3(0, 0, 0);
        for (var i = 0; i < vecs.length; ++i) {
            var vec = vecs[i];
            result.x += vec.x;
            result.y += vec.y;
            result.z += vec.z;
        }
        return result;
    }

    public static Scale(vec: Laya.Vector3, scale: number): Laya.Vector3 {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.scale(vec, scale, result);
        return result;
    }

    public static ScaleV3(vec: Laya.Vector3, scale: Laya.Vector3): Laya.Vector3 {
        var result = new Laya.Vector3(vec.x * scale.x, vec.y * scale.y, vec.z * scale.z);
        return result;
    }

    public static Dot(left: Laya.Vector3, right: Laya.Vector3): number {
        return Laya.Vector3.dot(left, right);
    }

    public static Lerp(from: Laya.Vector3, to: Laya.Vector3, v: number): Laya.Vector3 {
        var result = new Laya.Vector3(0, 0, 0);
        Laya.Vector3.lerp(from, to, v, result);
        return result;
    }

    public static MagnitudeSqrt(v3: Laya.Vector3) {
        return v3.x * v3.x + v3.y * v3.y + v3.z * v3.z;
    }

    public static Magnitude(v3: Laya.Vector3) {
        return Math.sqrt(this.MagnitudeSqrt(v3));
    }

    public static Magnitude2D(v3: Laya.Vector3) {
        return Math.sqrt(v3.x * v3.x + v3.z * v3.z);
    }

    public static Distance(from: Laya.Vector3, to: Laya.Vector3): number {
        var offset = Vector3Ex.Subtract(from, to);
        return Vector3Ex.Magnitude(offset);
    }

    public static Distance2D(from: Laya.Vector3, to: Laya.Vector3): number {
        let xOffset = from.x - to.x;
        let zOffset = from.z - to.z;
        return Math.sqrt(xOffset * xOffset + zOffset * zOffset);
    }

    public static DistanceSqrt(from: Laya.Vector3, to: Laya.Vector3): number {
        let offset = Vector3Ex.Subtract(from, to);
        return offset.x * offset.x + offset.y * offset.y + offset.z * offset.z;
    }

    public static DistanceSqrt2D(from: Laya.Vector3, to: Laya.Vector3): number {
        let offset = Vector3Ex.Subtract(from, to);
        return offset.x * offset.x + offset.z * offset.z;
    }

    /**
     * 计算在指定轴上的旋转,带符号
     * @param from 
     * @param to 
     * @param asix 
     */
    public static SignAngleAsix(from: Laya.Vector3, to: Laya.Vector3, asix: Laya.Vector3): number {
        let normalAsix = Vector3Ex.Normalize(asix);
        let dotFrom = Vector3Ex.Dot(from, normalAsix);
        let wrapFrom = Vector3Ex.Subtract(from, Vector3Ex.Scale(normalAsix, dotFrom));

        let dotTo = Vector3Ex.Dot(to, normalAsix);
        let wrapTo = Vector3Ex.Subtract(to, Vector3Ex.Scale(normalAsix, dotTo));

        let normalized = Vector3Ex.Normalize(wrapFrom);
        let normalized2 = Vector3Ex.Normalize(wrapTo);
        let num = Math.acos(MathUtils.Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        let cross = Vector3Ex.Cross(normalized, normalized2);
        let num2 = MathUtils.Sign(Laya.Vector3.dot(asix, cross));
        return num * num2;
    }

    public static SignedAngle(from: Laya.Vector3, to: Laya.Vector3, asix: Laya.Vector3): number {
        var normalized = Vector3Ex.Normalize(from);
        var normalized2 = Vector3Ex.Normalize(to);
        var num = Math.acos(MathUtils.Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        var cross = Vector3Ex.Cross(normalized, normalized2);
        var num2 = MathUtils.Sign(Laya.Vector3.dot(asix, cross));
        return num * num2;
    }

    public static Angle(from: Laya.Vector3, to: Laya.Vector3, asix: Laya.Vector3): number {
        var normalized = Vector3Ex.Normalize(from);
        var normalized2 = Vector3Ex.Normalize(to);
        var num = Math.acos(MathUtils.Clamp(Laya.Vector3.dot(normalized, normalized2), -1, 1)) * 57.29578;
        return num;
    }

    public static SmoothDamp(current: Laya.Vector3, target: Laya.Vector3, currentVelocity: Laya.Vector3,
        smoothTime: number, maxSpeed: number, deltaTime: number): Laya.Vector3 {
        var num = 2 / smoothTime;
        var num2 = num * deltaTime;
        var d = 1 / (1 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
        var vector = Vector3Ex.Subtract(current, target);
        var vector2 = target.clone();
        var maxLength = maxSpeed * smoothTime;
        vector = Vector3Ex.ClampMagnitude(vector, maxLength);
        var target2 = Vector3Ex.Subtract(current, vector);
        var vector3 = Vector3Ex.Scale(Vector3Ex.Add(currentVelocity, Vector3Ex.Scale(vector, num)), deltaTime);
        var cacheV = Vector3Ex.Scale(Vector3Ex.Subtract(currentVelocity, Vector3Ex.Scale(vector3, num)), d);
        currentVelocity.x = cacheV.x;
        currentVelocity.y = cacheV.y;
        currentVelocity.z = cacheV.z;
        var vector4 = Vector3Ex.Add(target2, Vector3Ex.Scale(Vector3Ex.Add(vector, vector3), d));
        if (Vector3Ex.Dot(Vector3Ex.Subtract(vector2, current), Vector3Ex.Subtract(vector4, vector2)) > 0) {
            vector4 = vector2;
            currentVelocity.x = 0;
            currentVelocity.y = 0;
            currentVelocity.z = 0;
        }
        return vector4;
    }

    public static Fix(vec: Laya.Vector3, limit: number) {
        if (Math.abs(vec.x) < limit) {
            vec.x = 0;
        }

        if (Math.abs(vec.y) < limit) {
            vec.y = 0;
        }

        if (Math.abs(vec.z) < limit) {
            vec.z = 0;
        }
    }

    public static IsSame(v1: Laya.Vector3, v2: Laya.Vector3) {
        return v1.x == v2.x && v1.y == v2.y && v1.z == v2.z;
    }

    public static WrapFromUnity(x: number, y: number, z: number) {
        return new Laya.Vector3(-x, y, z);
    }

    /**
     * 计算带加速度的移动位置
     * @param time 
     * @param startVelocity 
     * @param aSpeed 
     * @param startPos 
     */
    public static CalcPosWithASpeed(time: number, startVelocity: Laya.Vector3, aSpeed: Laya.Vector3, startPos: Laya.Vector3): Laya.Vector3 {
        let xt = Vector3Ex.Scale(startVelocity, time);
        let at2 = Vector3Ex.Scale(aSpeed, time * time / 2);
        return Vector3Ex.Add(xt, at2, startPos);
    }

    /**
     * 重置空间信息
     * @param trs 
     */
    public static InitialTransform(trs: Laya.Transform3D) {
        trs.localPosition = Vector3Ex.s_zero;
        trs.localScale = Vector3Ex.s_one;
        trs.rotationEuler = Vector3Ex.s_zero;
    }

    /**
     * 判定目标点，是否在以中心点为扇心，指定扇形内
     * @param center 扇形中心点
     * @param target 目标点
     * @param range 扇形半径
     * @param halfAngle 扇形半角
     * @param forward 扇形正向
     * @param axis 垂直于扇面的轴向
     */
    public static InSector(center: Laya.Vector3, target: Laya.Vector3, range: number, halfAngle: number, forward: Laya.Vector3, axis: Laya.Vector3): boolean {
        let dir: Laya.Vector3 = Vector3Ex.temp;
        dir.setValue((target.x - center.x) * (1 - axis.x), (target.y - center.y) * (1 - axis.y), (target.z - center.z) * (1 - axis.z));
        if (Vector3Ex.MagnitudeSqrt(dir) <= range * range) {
            let angle: number = Vector3Ex.Angle(forward, dir, axis);
            if (angle <= halfAngle) {
                return true;
            }
        }
        return false;
    }
}

/**
 * 三维向量数据类
 */
export class Vector3Data {
    /** X轴 */
    public x: number;

    /** Y轴 */
    public y: number;

    /** Z轴 */
    public z: number;

    //
    public constructor(_x: number = 0, _y: number = 0, _z: number = 0) {
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }

    /**
     * 三维向量转数据
     * @param _V3 三维向量
     */
    public static V3ToData(_V3: Laya.Vector3): Vector3Data {
        //
        return new Vector3Data(_V3.x, _V3.y, _V3.z);
    }

    public static DataToV3(_data: Vector3Data): Laya.Vector3 {
        return new Laya.Vector3(_data.x, _data.y, _data.z);
    }
}