import FileBuild from "./FileBuild";

/**
 * 文件模块
 */
export default class FileModule {
    /** 路径 */
    private m_url: string;

    /** 期约 */
    private m_promise: Promise<FileModule>;

    /** 内容 */
    private m_content: string;

    /** 获取 模块期约 */
    public get promise(): Promise<FileModule> {
        return this.m_promise;
    }

    /** 获取 模块内容 */
    public get content(): string {
        return this.m_content;
    }

    /**
     * 初始化
     * @param _url 模块路径
     */
    public constructor(_url: string) {
        this.m_url = _url;
        //
        this.getContent();
    }

    /**
     * 更新内容
     */
    public update() {
        this.getContent();
    }

    /** 获取内容 */
    private getContent() {
        //先判断地址是否存在
        if (this.m_url) {
            //初始化期约
            this.m_promise = new Promise<FileModule>((r, e) => {
                //打包文件
                FileBuild.build(this.m_url).then((_content) => {
                    //赋值内容
                    this.m_content = _content;
                    //
                    r(this);
                }).catch((E) => {
                    //空内容
                    this.m_content = '';
                    //
                    r(this);
                });
            });
        } else {
            this.m_promise = new Promise<FileModule>((r, e) => {
                this.m_content = '';
                r(this);
            });
        }
    }
}