/**
 * 类库测试
 */
export default class LibraryTest {
    /** 单例 */
    private static _instance: LibraryTest;
    public static get instance(): LibraryTest {
        if (this._instance == null) {
            this._instance = new LibraryTest();
        }
        return this._instance;
    }
    //
    private constructor() { }

    /**
     * 开始
     */
    public start() {
        console.log(dayjs('2018-08-08'));
    }
}