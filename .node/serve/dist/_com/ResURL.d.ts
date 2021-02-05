export default class ResURL {
    static get rootURL(): string;
    static get serveRootURL(): string;
    static get cacheURL(): string;
    static get binURL(): string;
    static get resURL(): string;
    static get excelURL(): string;
    static get configJsonURL(): string;
    static get sceneJsonURL(): string;
    static get logFileURL(): string;
    static join(..._URLs: string[]): string;
}
