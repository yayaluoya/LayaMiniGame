import PlatformManagerProxy from "./PlatformManagerProxy";
import { ShareInfo } from "./T/ShareInfo";
/**
 * 分享管理器
 */
export default class ShareManagerAKhgfawgsda {

    private static _instance;
    public static get instance(): ShareManagerAKhgfawgsda {
        if (this._instance == null) {
            this._instance = new ShareManagerAKhgfawgsda();
        }
        return this._instance;
    }

    private _shareInfoList: ShareInfo[];

    constructor() {
        this._shareInfoList = [];
    }

    public AddShareInfo(shareInfo: ShareInfo) {
        for (let getInfo of this._shareInfoList) {
            if (getInfo.shareId == shareInfo.shareId) return;
        }
        this._shareInfoList.push(shareInfo);
    }

    public GetShareInfo(id: number = null): ShareInfo {
        if (this._shareInfoList.length == 0) {
            let fakeShareInfo = new ShareInfo();
            return fakeShareInfo;
        }
        if (id != null) {
            for (let shareInfo of this._shareInfoList) {
                if (shareInfo.shareId == id) return shareInfo;
            }
        }
        let randomShare = this._shareInfoList[Math.floor(this._shareInfoList.length * Math.random())];
        return randomShare;
    }

    public ShareAppMessage(shareInfo: ShareInfo) {
        PlatformManagerProxy.instance.PlatformInstance.ShareAppMessage(shareInfo, Laya.Handler.create(this, () => {
            console.log("分享成功");
        }), null);
    }

}