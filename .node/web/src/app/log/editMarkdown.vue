<template>
    <div class="edit_markdown_cp">
        <div class="top">
            <div class="button">
                <div
                    class="item"
                    v-for="(item, index) in bt_list"
                    :key="index"
                    @click="on_item(item)"
                >
                    {{ item }}
                </div>
            </div>
            <div class="comparison">
                <span>对比 </span>
                <el-switch v-model="ifComparison"> </el-switch>
            </div>
        </div>
        <div class="container" :class="{ ifComparison: ifComparison }">
            <div class="left">
                <el-input
                    :disabled="disabled"
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
                <div
                    class="markdown"
                    v-html="compiledMarkdown"
                    ref="compiledMarkdown"
                ></div>
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
//textarea元素光标操作
import ImgSelectCp from "./imgSelect.vue"; //导入图片选择器
import CursorPosition from "../_T/CursorPosition.js"; //获取光标位置插件

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
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            /** 是否打开对比 */
            ifComparison: false,
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
            let params = new FormData();
            params.append("file", this.img_file); //统一带上时分的反爬虫字符
            this.$axios
                .post(this.$api.file.uploadFile, params)
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    let _url = data.data.url;
                    let cursorPosition = new CursorPosition(this.textarea);
                    cursorPosition.add(
                        cursorPosition.get(),
                        "![](" + _url + ")\n"
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
        justify-content: space-between;

        > .button {
            display: flex;
            align-items: center;
            padding: 15px 15px;
            box-sizing: border-box;
            border-bottom: 1px solid #ebebeb;
            flex-wrap: wrap;
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
        > .comparison {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            align-content: center;
            padding: 15px 15px;

            > span {
                margin-right: 5px;
            }
        }
    }
    > .container {
        box-sizing: border-box;
        display: grid;
        height: 100%;
        $height: 300px;
        > .left {
            border-right: 1px solid #ebebeb;
            height: 100%;
            overflow: hidden;
            > .el-textarea {
                height: 100% !important;
                textarea {
                    border: none !important;
                    height: 500px !important;
                    background-color: #222231;
                    font-size: 17px;
                    color: #abb2bf;
                }
            }
        }
        > .right {
            height: $height;
            overflow: auto;
            padding: 0px 20px;
            display: none;
        }
        &.ifComparison {
            grid-template-columns: 1fr 1fr;
            > .right {
                display: inline;
            }
        }
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