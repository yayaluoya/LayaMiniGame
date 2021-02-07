export default class ResURL {
    static get rootURL(): string;
    static get serveRootURL(): string;
    static get localDataURL(): string;
    static get binURL(): string;
    static get resURL(): string;
    static get srcURL(): string;
    static get gameSrcURL(): string;
    static get logFileURL(): string;
    static join(..._URLs: string[]): string;
}
