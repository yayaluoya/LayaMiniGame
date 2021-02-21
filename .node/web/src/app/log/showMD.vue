<template>
    <div class="showMD">
        <el-dialog
            custom-class="my_dialog"
            title="日志查看"
            :visible.sync="show"
            width="90vw"
        >
            <div v-html="compiledMarkdown"></div>
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
        content: {
            //日志数据
            type: String,
            default: "",
        },
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
            //将markdown文本转化为html
            return this.$marked(this.content);
        },
    },
};
</script>
<style lang='scss' scoped>
.editMD {
    width: fit-content;
    /deep/.el-dialog {
        margin-top: 5vw !important;
    }
}
</style>