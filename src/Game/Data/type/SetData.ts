import BaseData from "src/_T/Data/BaseData";

/**
 * 设置数据
 */
export default class SetData extends BaseData {
    /** 是否打开音效 */
    ifOpenSound: boolean = true;
    /** 是否打开背景音乐 */
    ifOpenMusic: boolean = true;
    /** 是否开启震动 */
    ifOpenVibration: boolean = true;
}