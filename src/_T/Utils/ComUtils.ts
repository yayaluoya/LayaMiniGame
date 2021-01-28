/**
 * 普通工具类
 */
export class ComUtils {
    /**
     * 克隆一个对象
     * @param _O 该对象
     */
    public static cloneObject<T>(_data: T): T {
        return JSON.parse(JSON.stringify(_data)) as T;
    }
}