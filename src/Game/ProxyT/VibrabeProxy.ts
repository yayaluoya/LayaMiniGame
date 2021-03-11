import InstanceT from "src/_T/Ts/InstanceT";
import { SetDataProxy } from "../Data/SetDataProxy";

/**
 * 振动代理
 */
@InstanceT.DecorateInstance()
export default class VibrabeProxy {
    /** 单例 */
    public static readonly instance: VibrabeProxy;
    //
    private constructor() { }

    /**
     * 振动
     * @param _modle 振动模式
     */
    public vibrate(isLong: boolean) {
        if (!SetDataProxy.instance.data.ifOpenVibration) return;
    }

    /**
     * 调用平台原震动
     * @param pattern 震动时间
     */
    public originalVibration(pattern: number | number[]) {
        if (!SetDataProxy.instance.data.ifOpenVibration) return;
        //
    }
}