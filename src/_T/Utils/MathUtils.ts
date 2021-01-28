import ArrayUtils from "./ArrayUtils";
/**
 * 数学函数扩展
 */
export default class MathUtils {

    public static Deg2Rad = 0.0175;
    public static Rad2Deg = 57.2958;

    public static ToHex(num: number): string {
        return num.toString(16);
    }

    public static RandomFromArrayUtilscept<T>(numArr: T[], except: T): T {
        let fakeRandomList = [];
        for (let i = 0; i < numArr.length; ++i) {
            if (except == numArr[i]) continue;
            fakeRandomList.push(numArr[i]);
        }
        return this.RandomFromArray(fakeRandomList);
    }

    public static RandomFromArray<T>(numArr: T[]): T {
        let randomIndex = MathUtils.RandomInt(0, numArr.length);
        return numArr[randomIndex];
    }

    public static RandomArrayFromArray<T>(arr: T[], count: number): T[] {
        let result = [];
        let indexList = [];
        for (let i = 0; i < arr.length; ++i) {
            indexList.push(i);
        }
        for (let i = 0; i < count; ++i) {
            let randomIndex = MathUtils.RandomInt(0, indexList.length);
            let getIndex = indexList[randomIndex];
            ArrayUtils.RemoveAt(indexList, randomIndex);
            result.push(arr[getIndex]);
        }
        return result;
    }

    public static RandomFromWithWeight<T>(numArr: T[], weightArr: number[]) {
        if (numArr == null || numArr.length == 0) {
            return null;
        }
        var totalWeight = 0;
        for (var weight of weightArr) {
            totalWeight += weight;
        }
        var randomWeight = MathUtils.Random(0, totalWeight);
        var currentWeight = 0;
        for (var i = 0; i < numArr.length; ++i) {
            currentWeight += weightArr[i];
            if (randomWeight < currentWeight) {
                return numArr[i];
            }
        }
        return numArr[numArr.length - 1];
    }

    // max  = max + 1
    public static RandomInt(min: number, maxAddOne: number): number {
        return Math.floor(this.Random(min, maxAddOne));
    }

    // max  = max + 1
    public static Random(min: number, maxAddOne: number): number {
        return (maxAddOne - min) * Math.random() + min;
    }

    /**
     * 获取一个范围内随机整数
     * @param min 最小值
     * @param max 最大值
     */
    public static randomRangeInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * 判定概率命中
     * @param ratio 概率，百分数
     */
    public static RandomRatio(ratio: number): boolean {
        let v = MathUtils.RandomInt(0, 10000) * 0.01;
        if (ratio > v) {
            return true;
        }
        return false;
    }

    public static Clamp(value: number, min: number, max: number): number {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }

    public static Clamp01(value: number): number {
        return this.Clamp(value, 0, 1);
    }

    public static Sign(value: number): number {
        if (value == 0) return 1;
        return value > 0 ? 1 : -1;
    }

    public static GetNumCount(num: number): number {
        var numberCount = 0;
        var newNumber = num;
        while (newNumber / 10 > 0) {
            newNumber = Math.floor(newNumber / 10);
            numberCount++;
        }
        return numberCount;
    }

    public static Lerp(from: number, to: number, progress: number): number {
        return from + (to - from) * MathUtils.Clamp01(progress);
    }

    public static MoveTowardsAngle(current: number, target: number, maxDelta: number) {
        var num = MathUtils.DeltaAngle(current, target);
        if (0 - maxDelta < num && num < maxDelta) {
            return target;
        }
        target = current + num;
        return MathUtils.MoveTowards(current, target, maxDelta);
    }

    public static MoveTowards(current: number, target: number, maxDelta: number): number {
        if (Math.abs(target - current) <= maxDelta) {
            return target;
        }
        return current + Math.sign(target - current) * maxDelta;
    }

    public static DeltaAngle(current: number, target: number): number {
        var num = MathUtils.Repeat(target - current, 360);
        if (num > 180) {
            num -= 360;
        }
        return num;
    }

    public static Repeat(t: number, length: number): number {
        return MathUtils.Clamp(t - Math.floor(t / length) * length, 0, length);
    }

    public static IsSimilar(n1: number, n2: number) {
        return n1 == n2;
    }

}