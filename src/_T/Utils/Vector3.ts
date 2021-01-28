import { IVector3 } from "./IVector3";

export class Vector3 implements IVector3 {
    public x: number;
    public y: number;
    public z: number;

    constructor(x?: number, y?: number, z?: number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
    }
    fromArray() {
        throw "Not Implement";
    }

    /**向量的长度的平方，不进行开方运算 */
    public get SqrMagnitude(): number {
        return Laya.Vector3.scalarLengthSquared(this);
    }

    /**向量的长度 */
    public get magnitude(): number {
        return Laya.Vector3.scalarLength(this);
    }

    /**自身向量的单位向量，返回一个新的实例化对象 */
    public get normalized(): Vector3 {
        let norVec = new Vector3();
        Laya.Vector3.normalize(this, norVec);
        return norVec;
        // let sqrLength = this.x * this.x + this.y * this.y + this.z * this.z;
        // let length = Math.sqrt(sqrLength);
        // if (length == 0) {
        //     return Vector3.zero;
        // }
        // else {
        //     let normalizedVector3 = new Vector3(this.x / length, this.y / length, this.z / length);
        //     return normalizedVector3;
        // }
    }

    /**自身乘以某个数值 */
    public Multiply(value: number): Vector3 {
        this.x *= value;
        this.y *= value;
        this.z *= value;
        return this;
    }

    /**自身除以某个数值 */
    public Divide(value: number): Vector3 {
        this.x /= value;
        this.y /= value;
        this.z /= value;
        return this;
    }

    /**自身加上某个数值 */
    public Add(vec: IVector3): Vector3 {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    }

    /**自身减去某个数值 */
    public Subtract(vec: IVector3): Vector3 {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    }

    public ToString(): string {
        return "Vector3:(".concat(this.x.toString(), ",", this.y.toString(), ",", this.z.toString(), ")");
    }

    /**如果两个矢量大致相等，则返回true，否则false */
    public Equal(vector: IVector3): boolean {
        if (vector != null) {
            return Vector3.SqrDistance(this, vector) < 0.1;
        }
        else {
            return false;
        }
    }

    /**
     * 设置xyz值。
     * @param x X值。
     * @param y Y值。
     * @param z Z值。
     */
    setValue(x: number, y: number, z: number): Vector3 {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    /**从目标向量中复制值到自身 */
    public Copy(target: IVector3): void {
        this.x = target.x;
        this.y = target.y;
        this.z = target.z;
    }

    /**
     * 把对象自生的值克隆到其他对象。
     * @param destObject 克隆源。
     */
    cloneTo(destObject: IVector3): void {
        (<IVector3>destObject).x = this.x;
        (<IVector3>destObject).y = this.y;
        (<IVector3>destObject).z = this.z;
    }

    /**
     * 克隆。
     * @return 克隆副本。
     */
    clone(): any {
        let newV3 = new Vector3(this.x, this.y, this.z);
        return newV3;
    }

    /**把所有值归零 */
    toDefault(): void {
        this.x = 0;
        this.z = 0;
        this.y = 0;
    }

    /**Error:方法未实现，不要调用此方法 */
    forNativeElement(nativeElements?: Float32Array): void {
        throw 'forNativeElement方法未实现!';
    }

    /**Vector3(1, 1, 1) */
    public static get one(): Vector3 {
        return new Vector3(1, 1, 1);
    }

    /**Vector3(0, 0, 0) */
    public static get zero(): Vector3 {
        return new Vector3(0, 0, 0);
    }

    /**Vector3(0, 1, 0) */
    public static get up(): Vector3 {
        return new Vector3(0, 1, 0);
    }

    /**Vector3(0, -1, 0) */
    public static get down(): Vector3 {
        return new Vector3(0, -1, 0);
    }

    /**Vector3(-1, 0, 0) */
    public static get left(): Vector3 {
        return new Vector3(-1, 0, 0);
    }

    /**Vector3(1, 0, 0) */
    public static get right(): Vector3 {
        return new Vector3(1, 0, 0);
    }


    /**Vector3(0, 0, -1) */
    public static get forward(): Vector3 {
        return new Vector3(0, 0, -1);
    }

    /**Vector3(0, 0, 1) */
    public static get back(): Vector3 {
        return new Vector3(0, 0, 1);
    }

    /**加上目标值，返回一份新的实例 */
    public static Add(a: IVector3, b: IVector3): Vector3 {
        let c = new Vector3(0, 0, 0);
        c.x = a.x + b.x;
        c.y = a.y + b.y;
        c.z = a.z + b.z;
        return c;
    }

    /**a减去b，返回一份新的实例 */
    public static Subtract(a: IVector3, b: IVector3) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    /**乘以目标值，返回一份新的实例 */
    public static Multiply(a: IVector3, b: number) {
        return new Vector3(a.x * b, a.y * b, a.z * b);
    }

    /**a除以b，返回一份新的实例 */
    public static Divide(a: IVector3, b: number) {
        return new Vector3(a.x / b, a.y / b, a.z / b);
    }

    /**复制目标值，返回一份新的实例 */
    public static Copy(target: IVector3): Vector3 {
        let newVec = Vector3.zero;
        newVec.x = target.x;
        newVec.y = target.y;
        newVec.z = target.z;
        return newVec;
    }

    /**求向量的点积 */
    public static Dot(a: IVector3, b: IVector3): number {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    /**求向量的叉积，返回一份新的实例 */
    public static Cross(a: IVector3, b: IVector3): Vector3 {
        let x = a.y * b.z - b.y * a.z;
        let y = a.z * b.x - a.x * b.z;
        let z = a.x * b.y - b.x * a.y;
        return new Vector3(x, y, z);
    }

    /**将向量投影到另一个向量上。 */
    public static Project(vector: IVector3, onNormal: IVector3) {
        let man = (<Vector3>onNormal).magnitude;
        man = Vector3.Dot(vector, onNormal) / man / man;
        return Vector3.Multiply(onNormal, man);
    }

    /**将向量投影到由法线定义的平面上（法线与该平面正交）。*/
    public static ProjectOnPlane(vector: IVector3, normal: IVector3) {
        let aixs = Vector3.Cross(normal, vector);
        let onNormal = Vector3.Cross(aixs, normal);
        return Vector3.Project(vector, onNormal);
    }

    /**返回 from 与 to 之间的角度（以度为单位）。 */
    public static Angle(from: IVector3, to: IVector3): number {
        let a = Math.sqrt(from.x * from.x + from.y * from.y + from.z * from.z);
        let b = Math.sqrt(to.x * to.x + to.y * to.y + to.z * to.z);
        if (a == 0 || b == 0) {
            throw "无法求零向量的夹角!";
        }
        let res = from.x * to.x + from.z * to.z + from.y * to.y;
        res = Math.acos(res / a / b) / Math.PI * 180;
        return res;
    }

    /**返回 from 与 to 之间的有符号角度（以度为单位）。返回两个向量之间的两个可能角度中的较小者，因此结果永远不会大于 180 度或小于 -180 度。
     *  如果将 from 和 to 向量想象成一张纸上的线条，两者都源自同一点，则 axis 向量将指向纸外方向。 两个向量之间测量的角度在顺时针方向上为正，在逆时针方向上为负。 */
    public static SignedAngle(from: IVector3, to: IVector3, axis: IVector3): number {
        let a = Vector3.ProjectOnPlane(from, axis);
        let b = Vector3.ProjectOnPlane(to, axis);
        let c = Vector3.Cross(a, b);
        let angle = Vector3.Angle(a, b);
        if (Vector3.Dot(c, axis) > 0) {
            angle = -angle;
        }
        return angle;
    }

    /**返回 vector 的副本，其大小被限制在（0，maxLength）。 */
    public static ClampMagnitude(vector: IVector3, maxLength: number) {
        let man = (<Vector3>vector).magnitude;
        if (man <= maxLength) {
            return Vector3.Copy(vector);
        }
        else {
            let scale = maxLength / (<Vector3>vector).magnitude;
            return Vector3.Multiply(vector, scale);
        }
    }

    /**返回 a 与 b 之间的距离。 */
    public static Distance(a: IVector3, b: IVector3): number {
        let dist = Laya.Vector3.distance(a as Laya.Vector3, b as Laya.Vector3);
        return dist;
    }

    public static SqrDistance(a: IVector3, b: IVector3): number {
        let dist = Laya.Vector3.distanceSquared(a as Laya.Vector3, b as Laya.Vector3);
        return dist;
    }

    /**在两个向量之间进行线性插值。
    *使用插值 t 在向量 a 和 b 之间进行插值。参数 t 限制在 [0, 1] 范围内。这最常用于查找占两个端点之间距离特定百分比的点（例如，以便在这些点之间逐步移动对象）。 */
    public static Lerp(a: IVector3, b: IVector3, t: number): Vector3 {
        if (t <= 0) {
            return Vector3.Copy(a);
        }
        else if (t >= 1) {
            return Vector3.Copy(b);
        }
        else {
            return Vector3.LerpUnclamped(a, b, t);
        }
    }

    /**在两个向量之间进行线性插值。
     * 注意：此静态方法可以在 a 和 b 矢量之外进行线形插值。这意味着 t 可以小于 0 或大于 1。
     */
    public static LerpUnclamped(a: IVector3, b: IVector3, t: number): Vector3 {
        let x = (b.x - a.x) * t + a.x;
        let y = (b.y - a.y) * t + a.y;
        let z = (b.z - a.z) * t + a.z;
        return new Vector3(x, y, z);
    }

    /**返回由两个向量的最大分量组成的向量。 */
    public static Max(a: IVector3, b: IVector3): Vector3 {
        let x = a.x > b.x ? a.x : b.x;
        let y = a.y > b.y ? a.y : b.y;
        let z = a.z > b.z ? a.z : b.z;
        return new Vector3(x, y, z);
    }

    /**返回由两个向量的最小分量组成的向量。 */
    public static Min(a: IVector3, b: IVector3) {
        let x = a.x < b.x ? a.x : b.x;
        let y = a.y < b.y ? a.y : b.y;
        let z = a.z < b.z ? a.z : b.z;
        return new Vector3(x, y, z);
    }


    /**使该向量的 magnitude 为 1。 */
    public static Normalize(vector: IVector3): void {
        let sqrLength = vector.x * vector.x + vector.y * vector.y + vector.z * vector.z;
        let length = Math.sqrt(sqrLength);
        if (length != 0) {
            vector.x /= length;
            vector.y /= length;
            vector.z /= length;
        }
    }

    /**计算 current 指定的点与 target 指定的点之间的位置，移动距离不超过 maxDistanceDelta 指定的距离，并不会过冲。返回新实例 */
    public MoveTowards(current: IVector3, target: IVector3, maxDistanceDelta: number): Vector3 {
        let dir = Vector3.Subtract(target, current);
        if (dir.magnitude > maxDistanceDelta) {
            Vector3.Normalize(dir);
            dir.Multiply(maxDistanceDelta);
            dir.Add(current);
            return dir;
        }
        else {
            return Vector3.Copy(target);
        }
    }

    /**从法线定义的平面反射一个向量。
     * inNormal 向量定义一个平面 （平面的法线是垂直于其表面的向量）。inDirection 向量被视为进入该平面的定向箭头，箭头指向进入平面的方向。 
     * 返回值是与 inDirection 大小相等、方向为其反射方向的向量。
     */
    public static Reflect(inDirection: IVector3, inNormal: IVector3): Vector3 {
        let val1 = Vector3.Dot(inDirection, inNormal) * 2;
        let reflectDir = Vector3.Multiply(inNormal, val1);
        reflectDir = Vector3.Subtract(inDirection, reflectDir)
        return reflectDir;
    }


    /**将两个向量的分量相乘。
    *结果中的每个分量都是 a 的一个分量乘以 b 的相同分量。 */
    public static Scale(a: IVector3, b: IVector3): Vector3 {
        return new Vector3(a.x * b.x, a.y * b.y, a.z * b.z);
    }
}