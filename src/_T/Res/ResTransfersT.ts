/**
 * 资源中转工具
 */
export default class ResTransfersT {
    /**
     * 开始拦截
     */
    public static start() {
        /** 用新xhr覆盖原xhr */
        window['XMLHttpRequest'] = XMLHttpRequest_;
    }
}

/**
 * xhr重写
 */
class XMLHttpRequest_ extends XMLHttpRequest {
    //
    constructor() {
        super();
        //
        this.addEventListener('load', function onLoad(e) {
            //清理掉这个监听
            this.removeEventListener('load', onload);
            //中间处理
            XMLHttpRequest_.processingData(e.currentTarget as XMLHttpRequest);
        });
    }

    //处理数据
    private static processingData(_xhr: XMLHttpRequest) {
        let response: any = _xhr.response;
        let url: string = decodeURI(_xhr.responseURL).replace(location.href, '');
        let _suffixRegExpMatchArray: RegExpMatchArray = url.match(/\.([a-z]+)$/);
        let suffix: string = _suffixRegExpMatchArray && _suffixRegExpMatchArray[1] || '';
        // console.log(url, suffix);
        switch (true) {
            case typeof response == 'string':
                break;
            case response instanceof ArrayBuffer:
                break;
        }
    }
}