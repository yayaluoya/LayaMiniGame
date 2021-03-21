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
        //是否从缓存里面拿
        let _ifCache: boolean = true;
        let _module: FileModule = this.m_moduleCache[_url];
        if (!_module) {
            _ifCache = false;
            _module = new FileModule(_url);
            this.m_moduleCache[_url] = _module;
        }
        // console.log('获取模块', _url, _ifCache);
        return _module;
    }

    /**
     * 更新模块
     * @param _url 模块路径
     */
    public static updateModule(_url: string) {
        // console.log('准备更新模块', _url, Object.keys(this.m_moduleCache));
        this.m_moduleCache[_url]?.update();
    }
}