import { readFileSync, writeFileSync } from "fs";
import ResURL from "./ResURL";

/**
 * 日志工具
 */
export default class LogT {
    /**
     * 写入日志
     * @param _log 日志内容
     */
    public static writeLog(_log: string): Promise<any> {
        return new Promise<any>((r) => {
            try {
                let _date: Date = new Date();
                //先读取文件内容
                let _content: string = readFileSync(ResURL.logFileURL).toString();
                let _logTemplate: string = readFileSync(ResURL.join(ResURL.serveRootURL, '/public/logTemplate.md')).toString();
                _logTemplate = _logTemplate.replace(/\${time}/, _date.toLocaleDateString() + '    -    ' + _date.toLocaleTimeString() + '');
                _logTemplate = _logTemplate.replace(/\${log}/, _log);
                _content += _logTemplate;
                writeFileSync(ResURL.logFileURL, _content);
                //
                r('');
            } catch (e) {
                //
            }
        });
    }
}