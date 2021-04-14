import { EPlatformType } from "./T/EPlatformType";
import IPlatform from "./T/IPlatform";
/**
 * 平台代理类
 */
export default class PlatformManagerProxy {
    /** 单例 */
    private static _instance: PlatformManagerProxy;
    public static get instance(): PlatformManagerProxy {
        if (this._instance == null) {
            this._instance = new PlatformManagerProxy();
        }
        return this._instance;
    }

    /** 平台实例 */
    private m_platformInstance: IPlatform;

    /** 获取平台实例 */
    public get PlatformInstance(): IPlatform {
        if (!this.m_platformInstance) {
            console.log('还没有设置过平台实例代理！');
        }
        return this.m_platformInstance;
    }

    /** 设置平台实例 */
    public set PlatformInstance(_instance: IPlatform) {
        this.m_platformInstance = _instance;
    }

    /**
     * 获取当前平台名字
     */
    public static get platformStr(): string {
        return PlatformManagerProxy.GetPlatformStr(this._instance.m_platformInstance.platform);
    }

    /**
     * 获取平台名字
     * @param platformEnum 平台类型
     */
    public static GetPlatformStr(platformEnum: EPlatformType): string {
        switch (platformEnum) {
            case EPlatformType.None:
                return "未识别";
            case EPlatformType.Web:
                return "网页";
            case EPlatformType.BD:
                return "百度";
            case EPlatformType.OPPO:
                return "Oppo";
            case EPlatformType.QQ:
                return "QQ";
            case EPlatformType.TT:
                return "头条";
            case EPlatformType.VIVO:
                return "Vivo";
            case EPlatformType.WX:
                return "微信";
            case EPlatformType.QTT:
                return "趣头条";
            default:
                return "未定义" + platformEnum;
        }
    }
}