import BaseLocalData from "src/_com/BaseLocalData";
export default class ConfigLocalData extends BaseLocalData {
    private static _instance;
    static get instance(): ConfigLocalData;
    private constructor();
    protected readonly _cacheName: string;
}
