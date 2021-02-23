/**
 * 获取光标位置
 */
export default class CursorPosition {
    constructor(textarea) {
        this.textarea = textarea;
    }
    //获取光标的位置 前，后，以及中间字符
    get() {
        var rangeData = { text: "", start: 0, end: 0 };

        if (this.textarea.setSelectionRange) {
            // W3C
            this.textarea.focus();
            rangeData.start = this.textarea.selectionStart;
            rangeData.end = this.textarea.selectionEnd;
            rangeData.text =
                rangeData.start != rangeData.end
                    ? this.textarea.value.substring(
                        rangeData.start,
                        rangeData.end
                    )
                    : "";
        } else if (document.selection) {
            // IE
            this.textarea.focus();
            var i,
                oS = document.selection.createRange(),
                // Don't: oR = this.textarea.createTextRange()
                oR = document.body.createTextRange();
            oR.moveToElementText(this.textarea);

            rangeData.text = oS.text;
            rangeData.bookmark = oS.getBookmark();

            // object.moveStart(sUnit [, iCount])
            // Return Value: Integer that returns the number of units moved.
            for (
                i = 0;
                oR.compareEndPoints("StartToStart", oS) < 0 &&
                oS.moveStart("character", -1) !== 0;
                i++
            ) {
                // Why? You can alert(this.textarea.value.length)
                if (this.textarea.value.charAt(i) == "\r") {
                    i++;
                }
            }
            rangeData.start = i;
            rangeData.end = rangeData.text.length + rangeData.start;
        }

        return rangeData;
    }
    //写入光标的位置
    set(rangeData) {
        var oR;
        if (!rangeData) {
            alert("You must get cursor position first.");
        }
        this.textarea.focus();
        if (this.textarea.setSelectionRange) {
            // W3C
            this.textarea.setSelectionRange(rangeData.start, rangeData.end);
        } else if (this.textarea.createTextRange) {
            // IE
            oR = this.textarea.createTextRange();

            // Fixbug : ues moveToBookmark()
            // In IE, if cursor position at the end of this.textarea, the set function don't work
            if (this.textarea.value.length === rangeData.start) {
                //alert('hello')
                oR.collapse(false);
                oR.select();
            } else {
                oR.moveToBookmark(rangeData.bookmark);
                oR.select();
            }
        }
    }
    //给指定光标位置处添加字符
    add(rangeData, text) {
        var oValue, nValue, sR, nStart, nEnd, st;
        this.set(rangeData);

        if (this.textarea.setSelectionRange) {
            // W3C
            oValue = this.textarea.value;
            nValue =
                oValue.substring(0, rangeData.end) +
                text +
                oValue.substring(rangeData.end);
            nStart = nEnd = rangeData.end + text.length;
            st = this.textarea.scrollTop;
            this.textarea.value = nValue;
            // Fixbug:
            // After this.textarea.values = nValue, scrollTop value to 0
            if (this.textarea.scrollTop != st) {
                this.textarea.scrollTop = st;
            }
            this.textarea.setSelectionRange(nStart, nEnd);
        } else if (this.textarea.createTextRange) {
            // IE
            sR = document.selection.createRange();
            sR.text = text;
            sR.setEndPoint("StartToEnd", sR);
            sR.select();
        }
    }
    //替换指定光标选中字符
    replace(rangeData, text) {
        var oValue, nValue, sR, nStart, nEnd, st;
        this.set(rangeData);

        if (this.textarea.setSelectionRange) {
            // W3C
            oValue = this.textarea.value;
            nValue =
                oValue.substring(0, rangeData.start) +
                text +
                oValue.substring(rangeData.end);
            nStart = nEnd = rangeData.start + text.length;
            st = this.textarea.scrollTop;
            this.textarea.value = nValue;
            // Fixbug:
            // After this.textarea.values = nValue, scrollTop value to 0
            if (this.textarea.scrollTop != st) {
                this.textarea.scrollTop = st;
            }
            this.textarea.setSelectionRange(nStart, nEnd);
        } else if (this.textarea.createTextRange) {
            // IE
            sR = document.selection.createRange();
            sR.text = text;
            sR.setEndPoint("StartToEnd", sR);
            sR.select();
        }
    }
}