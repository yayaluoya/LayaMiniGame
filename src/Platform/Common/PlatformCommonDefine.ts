/**
 * 平台公共内容
 */
module PlatformCommonDefine {

    /**
    * 安全区域定义,copy from WX
    */
    export class SafeArea {

        left: number;//	安全区域左上角横坐标
        right: number;//	安全区域右下角横坐标
        top: number;//	安全区域左上角纵坐标
        bottom: number;//	安全区域右下角纵坐标
        width: number;//	安全区域的宽度，单位逻辑像素
        height: number;//	安全区域的高度，单位逻辑像素
    }

    /**
     * 来源参数,copy from WX
     */
    export class ReferrerInfo {

        appId: string; // 来源小程序或公众号或App的 appId
        extraData: object; // 来源小程序传过来的数据，scene=1037或1038时支持

    }

    /**
     * 启动参数,copy from WX
     */
    export class LaunchOption {

        scene: string; // 场景值
        query: object; // 查询参数
        shareTicket: string; // shareTicket
        referrerInfo: PlatformCommonDefine.ReferrerInfo; // 当场景为由从另一个小程序或公众号或App打开时，返回此字段

    }

    /**
     * WX登录参数,copy from WX
     */
    export class LoginData {
        timeout: number; // 超时时间，单位ms
        success: Function; // 接口调用成功的回调函数
        fail: Function; // 接口调用失败的回调函数
        complete: Function; // 接口调用结束的回调函数（调用成功、失败都会执行）
    }

    /**
     * WX登录成功回调参数,copy from WX
     */
    export class LoginSuccessRes {
        code: string; // 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid 和 session_key 等信息
    }

    /**
     * 登录状态
     */
    export class LoginState {
        isLogin: boolean; // 是否登录成功
        code: string; // 登录成功之后的用户凭证(失败无值)
    }
}