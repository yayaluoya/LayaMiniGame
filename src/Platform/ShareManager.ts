import MathUtils from "src/_T/Utils/MathUtils";
import PlatformManagerProxy from "./PlatformManagerProxy";
import { ShareInfo } from "./T/ShareInfo";
/**
 * 分享管理器
 */
export default class ShareManager {

    private static _instance;
    public static get instance(): ShareManager {
        if (this._instance == null) {
            this._instance = new ShareManager();
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
        let randomShare = MathUtils.RandomFromArray(this._shareInfoList);
        return randomShare;
    }

    public ShareAppMessage(shareInfo: ShareInfo) {
        PlatformManagerProxy.instance.PlatformInstance.ShareAppMessage(shareInfo, Laya.Handler.create(this, () => {
            console.log("分享成功");
        }), null);
    }

}