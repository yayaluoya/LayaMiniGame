import ConsoleEx from "../Console/ConsoleEx";
import { EKeyResName } from "./EKeyResName";

/**
 * 关键资源点列表管理器
 */
export default class KeyResManager {
    //
    private static _instance: KeyResManager;
    /** 单例 */
    private static get instance(): KeyResManager {
        if (this._instance == null) {
            this._instance = new KeyResManager();
        }
        //
        return this._instance;
    }

    //关键资源列表
    private m_KeyResList: { [index: string]: string } = {};

    //
    private constructor() {
        //注册关键资源目录
        this.m_KeyResList = {
            [EKeyResName.RootRes]: EKeyResName.RootRes + '/',
            [EKeyResName.Config]: EKeyResName.RootRes + '/' + EKeyResName.Config + '/',
            [EKeyResName.FGUI]: EKeyResName.RootRes + '/' + EKeyResName.FGUI + '/',
            [EKeyResName.LvConfig]: EKeyResName.RootRes + '/' + EKeyResName.LvConfig + '/',
            [EKeyResName.Font]: EKeyResName.RootRes + '/' + EKeyResName.Font + '/',
            [EKeyResName.Other]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/',
            //其他路径
            [EKeyResName.icon]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.icon + '/',
            [EKeyResName.img]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.img + '/',
            [EKeyResName.music]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.music + '/',
            [EKeyResName.sound]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.sound + '/',
            [EKeyResName.skin]: EKeyResName.RootRes + '/' + EKeyResName.Other + '/' + EKeyResName.skin + '/',
        };
        // console.log(this.m_KeyResList);
    };

    /**
     * 判断是否存在某个关键点key
     * @param _key 关键点key
     */
    public static ifKeyRes(_key: string): boolean {
        return Object.keys(this.instance.m_KeyResList).findIndex((item) => {
            return item == _key;
        }) != -1;
    }

    /**
     * 获取一个关键点资源的路径
     * @param _key 关键点key
     */
    public static getResURL(_key: string): string {
        return this.instance.m_KeyResList[_key];
    }

    /**
     * 动态添加关键路径
     * @param _key 关键值
     * @param _string 路径
     */
    public static addResUrl(_key: string, _string: string) {
        this.instance.m_KeyResList[_key] = _string;
    }

    /**
     * 修改关键点资源路径
     * @param _key 关键点key
     * @param _str 路径
     */
    public static editKeyResList(_key: string, _str: string) {
        let _replace: string = this.instance.m_KeyResList[_key];
        if (typeof _replace == "undefined") {
            console.warn(...ConsoleEx.packWarn('修改资源路径失败，没有' + _key + '这个关键路径！'));
            return;
        }
        //替换所有资源路径中的关键点路径
        for (let _i in this.instance.m_KeyResList) {
            this.instance.m_KeyResList[_i] = this.instance.m_KeyResList[_i].replace(_replace, _str);
        }
        //
        console.log(...ConsoleEx.packLog('修改关键点资源路径', _replace, '替换成', _str));
    }
}