// Type definitions for pako 1.0
// Project: https://github.com/nodeca/pako
// Definitions by: Denis Cappellin <https://github.com/cappellin>
//                 Caleb Eggensperger <https://github.com/calebegg>
//                 Muhammet Öztürk <https://github.com/hlthi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/**
 * Pako压缩
 */
declare namespace pako {
    /**
     * 解压
     * @param _data 数据
     * @param _par 参数
     */
    export function inflate(_data: any, _par?: object);

    /**
     * 压缩数据
     * @param _string 字符串
     */
    export function deflate(_data: string);
}