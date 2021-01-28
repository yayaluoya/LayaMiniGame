/**
 * 时间工具
 */
export default class TimeUtils {
    /**
    * 时间转换
    */
    static ONE_YEAR: number = 60 * 60 * 24 * 365;
    static ONE_DAY: number = 60 * 60 * 24;
    public static makeTimeLeftString(time: number, separator: string = ":", flag: Boolean = false): string {
        var ret: string = "";
        var hour: number;
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        if (time > this.ONE_YEAR) {
            ret = "大于一年";
            return ret;
        }
        if (flag) {
            if (time > this.ONE_DAY) {
                var day: number = Math.floor(time / this.ONE_DAY);
                ret = day + "天";
            } else if (time >= 3600) {
                hour = Math.floor(time / 3600);
                ret = hour + "时";
            } else {
                var minute: number = Math.floor(time / 60);
                if (minute < 10) ret += "0";
                ret += minute.toString() + separator;
                var second: number = time % 60;
                if (second < 10) ret += "0";
                ret += second.toString();
            }
            return ret;
        }
        if (time > this.ONE_DAY) {
            var day: number = Math.floor(time / this.ONE_DAY);
            ret = day + "天";
            time = time - day * this.ONE_DAY;
            if (flag) {
                hour = Math.floor(time / 3600);
                if (hour > 0) {
                    ret += hour + "时";
                }
                return ret;
            }
        }
        if (time <= 0) {
            ret = ret + "00:00";
            return ret;
        }
        ret = '';
        hour = Math.floor(time / 3600);
        if (hour > 0) {
            if (hour < 10) {
                ret += "0" + hour.toString() + separator;
            } else {
                ret += hour.toString() + separator;
            }
        }
        var minute: number = Math.floor((time - hour * 3600) / 60);
        if ((minute > 0) || (hour > 0)) {
            if (minute < 10) ret += "0";
            ret += minute.toString() + separator;
        } else {
            ret += "00" + separator;
        }
        var second: number = time % 60;
        if (second < 10) ret += "0";
        ret += second.toString();
        return ret;
    }

    /**
    * 获取当前天数
    */
    public static GetCurrentDayCount(tick: number) {
        let dayCount = Math.floor(tick / 1000 / 60 / 60 / 24);
        return dayCount;
    }
}