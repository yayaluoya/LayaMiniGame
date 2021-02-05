export default class Pako {
    static deflate(_data: string): Uint8Array;
    static inflate(_data: Uint8Array): string;
}
