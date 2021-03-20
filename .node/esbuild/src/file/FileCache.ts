import FileModule from "./FileModule";

/**
 * 文件缓存
 */
export default class FileCache {
    /** 文件模块缓存列表 */
    private static m_moduleCache: {
        [index: string]: FileModule
    } = {};

    /**
     * 根据模块路径获取模块
     * @param _url 模块路径
     */
    public static getModule(_url: string): FileModule {
        let _module: FileModule = this.m_moduleCache[_url];
        if (!_module) {
            _module = new FileModule(_url);
            this.m_moduleCache[_url] = _module;
        }
        return _module;
    }
}