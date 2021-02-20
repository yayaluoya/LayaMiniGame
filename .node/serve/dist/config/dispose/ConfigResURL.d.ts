export default class ConfigResURL {
    static getURL(_key: ELocalURLKey): string;
    private static get configExcelURL();
    private static get configJsonURL();
    private static get sceneJsonURL();
    private static get configTSURL();
}
export declare enum ELocalURLKey {
    configExcelURL = "configExcelURL",
    sceneJsonURL = "sceneJsonURL",
    configJsonURL = "configJsonURL",
    configTSURL = "configTSURL"
}
export declare enum ELocalURLKeyDescription {
    configExcelURL = "\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84",
    sceneJsonURL = "\u573A\u666Fjson\u6587\u4EF6\u8DEF\u5F84",
    configJsonURL = "configJson\u6587\u4EF6\u8DEF\u5F84",
    configTSURL = "\u914D\u7F6Ets\u6587\u4EF6\u4FDD\u5B58\u8DEF\u5F84"
}
