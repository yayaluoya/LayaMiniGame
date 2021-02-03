/**
 * 消息工具类
 */
export default class MesT {
    /** 唯一键值 */
    private static m_key: number = 0;
    /** 获取唯一键值 */
    private static get key(): number {
        return this.m_key++;
    }

    /**
     * 包装枚举类，使其内容为唯一的
     * @param _E 枚举
     */
    public static packE(_E: object) {
        let _keys: string[] = Object.keys(_E);
        for (let _key of _keys) {
            if (/^[0-9]+$/.test(_key)) {
                delete _E[_key];
            } else {
                _E[_E[_key] = `${_key},${_E[_key]},${this.key}`] = _key;
            }
        }
    }
}