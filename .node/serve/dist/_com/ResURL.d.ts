export default class ResURL {
    static get rootURL(): string;
    static get serveRootURL(): string;
    static get publicURL(): string;
    static get localDataURL(): string;
    static get binURL(): string;
    static get resURL(): string;
    static get srcURL(): string;
    static get gameSrcURL(): string;
    static get logURL(): string;
    static get imgURL(): string;
    static join(..._URLs: string[]): string;
}
