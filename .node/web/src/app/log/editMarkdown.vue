<template>
    <div class="edit_markdown_cp">
        <div class="top">
            <div
                class="item"
                v-for="(item, index) in bt_list"
                :key="index"
                @click="on_item(item)"
            >
                {{ item }}
            </div>
        </div>
        <div class="container">
            <div class="left">
                <el-input
                    ref="textarea"
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    :autosize="{ minRows: 10 }"
                    v-model="content_md"
                >
                </el-input>
            </div>
            <div class="right">
                <div v-html="compiledMarkdown" ref="compiledMarkdown"></div>
            </div>
        </div>
        <el-dialog
            custom-class="my_dialog"
            title="图片上传"
            :visible.sync="show"
            width="600px"
            append-to-body
        >
            <div
                v-if="show"
                style="
                    margin-bottom: 15px;
                    font-size: 17px;
                    padding: 10px 0;
                    color: rgb(38, 75, 70);
                "
            >
                <ImgSelectCp
                    :size="3"
                    @change_file="img_file = $event"
                ></ImgSelectCp>
            </div>
            <span slot="footer" class="dialog-footer">
                <i class="el-icon-loading" v-if="loading"></i>
                <el-button @click="show = false">取 消</el-button>
                <el-button
                    type="primary"
                    @click="on_upload"
                    :disabled="!img_file || loading"
                    >确 定</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
//markdown编辑器
//textarea元素光标操作
import ImgSelectCp from "./imgSelect.vue"; //导入图片选择器
class CursorPosition {
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
export default {
    name: "edit_markdown_cp",
    components: { ImgSelectCp },
    mounted() {
        this.textarea = this.$refs.textarea.$refs.textarea;
        this.a_onclick();
    },
    props: {
        value: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            content_md: "",
            textarea: null, //输入框元素对象
            bt_list: [
                "缩进",
                "H1",
                "H2",
                "H3",
                "H4",
                "H5",
                "H6",
                "加粗",
                "斜体",
                "删除线",
                "代码",
                "代码块",
                "链接",
                "引用",
                "图片",
                "横线",
                "清空",
                "图片上传",
            ],
            show: false,
            img_file: null,
            loading: false,
        };
    },
    watch: {
        value: {
            handler() {
                this.content_md = this.value;
            },
            immediate: true,
        },
        content_md() {
            this.$emit("input", this.content_md);
        },
    },
    //当dom更新时给a标签写入新的属性
    updated() {
        this.a_onclick();
    },
    computed: {
        compiledMarkdown() {
            //将markdown文本转化为html
            return this.$marked(this.content_md);
        },
    },
    methods: {
        on_item(item) {
            let cursorPosition = new CursorPosition(this.textarea);
            switch (item) {
                case "缩进":
                    cursorPosition.add(cursorPosition.get(), "&emsp;");
                    break;
                case "H1":
                    cursorPosition.add(cursorPosition.get(), "# ");
                    break;
                case "H2":
                    cursorPosition.add(cursorPosition.get(), "## ");
                    break;
                case "H3":
                    cursorPosition.add(cursorPosition.get(), "### ");
                    break;
                case "H4":
                    cursorPosition.add(cursorPosition.get(), "#### ");
                    break;
                case "H5":
                    cursorPosition.add(cursorPosition.get(), "##### ");
                    break;
                case "H6":
                    cursorPosition.add(cursorPosition.get(), "###### ");
                    break;
                case "加粗": {
                    let rangeData = cursorPosition.get();
                    cursorPosition.replace(
                        rangeData,
                        "**" + rangeData.text + "**"
                    );
                    rangeData.start = rangeData.end + 2;
                    rangeData.end = rangeData.end + 2;
                    cursorPosition.set(rangeData);
                    break;
                }
                case "斜体": {
                    let rangeData = cursorPosition.get();
                    cursorPosition.replace(
                        rangeData,
                        "*" + rangeData.text + "*"
                    );
                    rangeData.start = rangeData.end + 1;
                    rangeData.end = rangeData.end + 1;
                    cursorPosition.set(rangeData);
                    break;
                }
                case "删除线": {
                    let rangeData = cursorPosition.get();
                    cursorPosition.replace(
                        rangeData,
                        "~~" + rangeData.text + "~~"
                    );
                    rangeData.start = rangeData.end + 2;
                    rangeData.end = rangeData.end + 2;
                    cursorPosition.set(rangeData);
                    break;
                }
                case "代码": {
                    let rangeData = cursorPosition.get();
                    cursorPosition.replace(
                        rangeData,
                        "`" + rangeData.text + "`"
                    );
                    rangeData.start = rangeData.end + 1;
                    rangeData.end = rangeData.end + 1;
                    cursorPosition.set(rangeData);
                    break;
                }
                case "代码块": {
                    cursorPosition.add(cursorPosition.get(), "```\n\n```");
                    let rangeData = cursorPosition.get();
                    rangeData.start = rangeData.start - 4;
                    rangeData.end = rangeData.end - 4;
                    cursorPosition.set(rangeData);
                    break;
                }
                case "链接": {
                    cursorPosition.add(cursorPosition.get(), "[](https://)");
                    let rangeData = cursorPosition.get();
                    rangeData.start = rangeData.start - 11;
                    rangeData.end = rangeData.end - 11;
                    cursorPosition.set(rangeData);
                    break;
                }
                case "引用":
                    cursorPosition.add(cursorPosition.get(), "> ");
                    break;
                case "图片": {
                    cursorPosition.add(cursorPosition.get(), "![](https://)");
                    let rangeData = cursorPosition.get();
                    rangeData.start = rangeData.start - 11;
                    rangeData.end = rangeData.end - 11;
                    cursorPosition.set(rangeData);
                    break;
                }
                case "横线":
                    cursorPosition.add(cursorPosition.get(), "******\n");
                    break;
                case "清空":
                    this.textarea.value = "";
                    break;
                case "图片上传":
                    this.show = true;
                    break;
            }
            this.content_md = this.textarea.value;
        },
        //图片上传
        on_upload() {
            this.loading = true;
            this.$axios
                .$adminPostFile("add_blog_img", {
                    img_file: this.img_file,
                })
                .then((data) => {
                    let cursorPosition = new CursorPosition(this.textarea);
                    cursorPosition.add(
                        cursorPosition.get(),
                        "![](" + data + ")\n"
                    );
                    let rangeData = cursorPosition.get();
                    cursorPosition.set(rangeData);
                    this.content_md = this.textarea.value;
                    this.img_file = null;
                    this.show = false;
                })
                .catch((msg) => {
                    this.$message.error(msg);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        a_onclick() {
            if (this.$refs.compiledMarkdown) {
                let a_list = this.$refs.compiledMarkdown.getElementsByTagName(
                    "a"
                );
                for (let a of a_list) {
                    a.target = "_blank"; //设置a标签跳转时打开新的页面
                }
            }
        },
    },
};
</script>

<style lang="scss">
.edit_markdown_cp {
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    line-height: 1.7;
    > .top {
        display: flex;
        align-items: center;
        padding: 15px 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #ebebeb;
        > div {
            padding: 5px;
            border: 1px solid rgb(236, 236, 237);
            line-height: 1;
            margin-right: 5px;
            border-radius: 2px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
                background-color: rgb(236, 236, 237);
            }
        }
    }
    > .container {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100%;
        > .left {
            border-right: 1px solid #ebebeb;
            height: 100%;
            overflow: hidden;
            > .el-textarea {
                height: 100% !important;
                textarea {
                    border: none !important;
                    height: 100% !important;
                    background-color: #f6f6f67c;
                    font-size: 17px;
                    color: #000000;
                }
            }
        }
        > .right {
            overflow: hidden;
            padding: 0px 20px;
        }
    }
    img {
        max-width: 100%;
        border-radius: 2px;
    }
    .codehilite {
        border-radius: 3px;
    }
    pre {
        padding: 15px;
        box-sizing: border-box;
        overflow: auto;
        border-radius: 2px;
        margin: 0;
        background: #f8f8f8;
        code {
            margin: 0;
            padding: 0;
            background-color: #ffffff00;
            line-height: 1.7;
        }
    }
    a {
        color: #48a3d7;
    }
}
</style>