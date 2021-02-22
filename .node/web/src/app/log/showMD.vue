<template>
    <div class="showMD">
        <el-dialog
            custom-class="my_dialog"
            :title="data.data.title"
            :visible.sync="show"
            width="670px"
        >
            <div class="content" v-html="compiledMarkdown"></div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            //组件是否显示
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            data: {
                name: "",
                data: {
                    title: "",
                    writer: "",
                    time: "",
                },
                data_: "",
            },
        };
    },
    computed: {
        show: {
            get() {
                return this.value;
            },
            set() {
                this.$emit("input", false);
            },
        },
        compiledMarkdown() {
            if (!this.data) {
                return "";
            }
            //将markdown文本转化为html
            return this.$marked(this.data.data_);
        },
    },
    methods: {
        /** 设置数据 */
        setData(data) {
            this.data = data;
        },
    },
};
</script>
<style lang='scss' scoped>
.showMD {
    width: fit-content;
    /deep/.el-dialog {
        margin-top: 5vw !important;
    }

    /deep/img {
        max-width: 100%;
    }

    /deep/.el-dialog__body {
        padding: 20px;
        padding-top: 0px;
    }

    /deep/.content {
        border-top: 1px dashed #44446185;
        padding-top: 20px;
    }
}
</style>