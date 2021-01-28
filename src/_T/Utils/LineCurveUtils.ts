import Vector3Ex from "./Vector3Ex";
import ArrayUtils from "./ArrayUtils";
import QuaternionEx from './QuaternionEx';

/**
 * 路径动画曲线,必须是平滑曲线才能使用
 */
export default class LineCurveUtils {

    private _keys: number[];
    private _posList: Laya.Vector3[];
    private _rotList: Laya.Quaternion[];
    private _unitProgress: number;
    public totalLength: number;

    constructor(keys: number[], posList: Laya.Vector3[], rotList: Laya.Quaternion[]) {
        this._keys = ArrayUtils.Copy(keys);
        this._posList = ArrayUtils.Copy(posList);
        this._rotList = ArrayUtils.Copy(rotList);
        this._unitProgress = 1 / this._keys.length;
    }

    public EvaluatePos(progress: number): Laya.Vector3 {
        let indexProgress = progress * this._keys.length;
        let preIndex = Math.floor(indexProgress);
        let behindIndex = preIndex + 1;
        let lerpProgress = (progress - (preIndex * this._unitProgress)) / this._unitProgress;
        let prePos = this._GetPos(preIndex);
        let behindPos = this._GetPos(behindIndex);
        return Vector3Ex.Lerp(prePos, behindPos, lerpProgress);
    }

    private _GetPos(index: number): Laya.Vector3 {
        if (index < 0) return this._posList[0];
        if (index > this._posList.length - 1) return this._posList[this._posList.length - 1];
        return this._posList[index];
    }

    private _GetRot(index: number): Laya.Quaternion {
        if (index < 0) return this._rotList[0];
        if (index > this._rotList.length - 1) return this._rotList[this._rotList.length - 1];
        return this._rotList[index];
    }

    public EvaluateRot(progress: number): Laya.Quaternion {
        let indexProgress = progress * this._keys.length;
        let preIndex = Math.floor(indexProgress);
        let behindIndex = preIndex + 1;
        let lerpProgress = (progress - (preIndex * this._unitProgress)) / this._unitProgress;
        let preRot = this._GetRot(preIndex);
        let behindRot = this._GetRot(behindIndex);
        return QuaternionEx.Lerp(preRot, behindRot, lerpProgress);
    }

    /**
     * 创建贝塞尔曲线点
     * @param anchorpoints 点坐标集合
     * @param pointsAmount 移动点密度
     */
    public static CreateBezierPoints(anchorpoints: { x: number, y: number }[], pointsAmount: number): Array<any> {
        var points = [];
        for (var i = 0; i < pointsAmount; i++) {
            var point = this.MultiPointBezier(anchorpoints, i / pointsAmount);
            points.push(point);
        }
        return points;
    }

    private static MultiPointBezier(points: { x: number, y: number }[], t: number): any {
        let len: number = points.length;
        let x: number = 0, y: number = 0;
        for (let i: number = 0; i < len; i++) {
            let point: { x: number, y: number } = points[i];
            x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
            y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (this.erxiangshi(len - 1, i));
        }
        return { x: x, y: y };
    }

    private static erxiangshi(start: number, end: number): number {
        let cs: number = 1, bcs: number = 1;
        while (end > 0) {
            cs *= start;
            bcs *= end;
            start--;
            end--;
        }
        return (cs / bcs);
    }
}
