import ConsoleEx from "src/_T/Console/ConsoleEx";
import InstanceT from "src/_T/Ts/InstanceT";

/**
 * 类库测试
 */
@InstanceT.DecorateInstance()
export default class LibraryTest {
    /** 单例 */
    public static readonly instance: LibraryTest;
    //
    private constructor() { }

    /**
     * 开始
     */
    public start() {
        //
        // console.log('时间工具', dayjs('2020/2/20'));
        // //这里只有本地访问才行，线上访问会跨域
        // axios.get<string>('http://baidu.com').then((data) => {
        //     console.log('请求工具请求百度网页', {
        //         string: data.data,
        //     });
        // });
        // //
        // let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        // console.log('_随机打乱数组', _.shuffle(a));
        // console.log('_随机取值数组', _.sample(a, 2));
        console.log(...ConsoleEx.packLog('pako工具', typeof pako));
        // console.log(...ConsoleEx.packLog('axios工具', typeof axios));
    }
}