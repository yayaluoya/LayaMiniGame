/**
 * 数组工具
 */
export default class ArrayUtils {
    /**
     * 判断两个数组内容是否相同
     * @param x x数组
     * @param y y数组
     */
    public static ContentIfSame(x: any[], y: any[]): boolean {
        if (!(x) || !(y)) return false;
        if (x.length != y.length) return false;
        //方法： 用一个mop来统计x数组各个元素出现的次数，再用y数组来递减各元素出现的次数，如果最终结果为0则两个数组相同
        let m: Map<any, number> = new Map();
        x.forEach((item) => {
            m.set(item, (m.get(item) || 0) + 1);
        });
        y.forEach((item) => {
            m.set(item, (m.get(item) || 0) - 1);
        });
        let i: number = 0;
        m.forEach((value) => {
            i += value;
        });
        return i == 0;
    }

    /**
     * 数组去重保留靠前的内容
     * @param arr 源数组
     */
    public static Unique<T>(arr: T[]): T[] {
        return Array.from(new Set(arr));
    }

    /**
     * 数组去重保留靠后的内容
     * @param arr 源数组
     */
    public static ReverseReserveUnique<T>(arr: T[]): T[] {
        return Array.from(new Set(arr.reverse())).reverse();
    }

    /**
     * 对象数组去重
     * @param arr 源数组
     * @param _F 获取对比键值函数
     */
    public static ObjUnique<T>(arr: T[], _F: (o: T) => string): T[] {
        for (let i = 0, len = arr.length; i < len; i++) {
            for (let j = i + 1, len = arr.length; j < len; j++) {
                if (_F(arr[i]) === _F(arr[j])) {
                    arr.splice(j, 1);
                    j--;        // 每删除一个数j的值就减1
                    len--;      // j值减小时len也要相应减1（减少循环次数，节省性能）   
                }
            }
        }
        return arr;
    }

    /**
     * 替换数组的某个元素
     * @param arr 源数组
     * @param oldObj 被替换的元素
     * @param newObj 替换元素
     */
    public static Replace<T>(arr: T[], oldObj: T, newObj: T): boolean {
        let index = arr.indexOf(oldObj);
        if (index < 0) return false;
        arr.splice(index, 1, newObj);
        return true;
    }

    /**
     * 删除一个元素并返回结果
     * @param arr 源数组
     * @param obj 删除目标对象
     */
    public static RemoveItem<T>(arr: T[], obj: T): boolean {
        let index = arr.indexOf(obj);
        if (index < 0) return false;
        arr.splice(index, 1);
        return true;
    }

    /**
     * 根据索引删除一个数据
     * @param arr 源数组
     * @param index 索引
     */
    public static RemoveAt<T>(arr: T[], index: number): boolean {
        if (arr.length <= index) return false;
        arr.splice(index, 1);
        return true;
    }

    /**
     * 数组是否包含某个数据
     * @param arr 
     * @param obj 
     */
    public static Contains<T>(arr: T[], obj: T): boolean {
        let index = arr.indexOf(obj);
        return index >= 0;
    }

    /**
     * 复制一个数组
     * @param arr 源数组
     */
    public static Copy<T>(arr: T[]): T[] {
        let result = [];
        for (let i = 0; i < arr.length; ++i) {
            result.push(arr[i]);
        }
        return result;
    }

    /**
     * 随机打乱数组
     * @param _array 目标数组 
     */
    public static upsetArray<T>(_array: T[]): T[] {
        //乱序
        return _array.sort(() => {
            return Math.random() - 0.5;
        });
    }

    /**
     * 随机获取数组中的随机值，可指定长度
     * @param _array 原数组
     * @param _n 随机个数
     * @param _weight 权重列表
     */
    public static RandomGet<T>(_array: T[], _n: number = 1, _weight: number[] = _array.map((item) => { return 1; })): T[] {
        if (_array.length <= 0) { return; }
        let _rootArray: T[] = [];
        let _newArray: T[] = [];
        //权重索引列表
        let _indexArray: number[] = [];
        //找到最小的权重
        let _minWeight: number = _weight[0];
        _weight.forEach((item) => {
            _minWeight = Math.min(_minWeight, item);
        });
        _weight = _weight.map((item) => {
            return Math.floor(item * (1 / _minWeight));
        });
        _array.forEach((item, index) => {
            _rootArray.push(item);
            //
            for (let _i = 0; _i < _weight[index]; _i++) {
                _indexArray.push(index);
            }
        });
        let _index: number;
        for (let _i = 0; _i < _n; _i++) {
            if (_rootArray.length <= 0) { break; }
            _index = Math.floor(Math.random() * _indexArray.length);
            _indexArray = _indexArray.filter((item) => {
                return item != _index;
            });
            _newArray.push(_rootArray.splice(_indexArray[_index], 1)[0]);
        }
        //
        return _newArray;
    }
}