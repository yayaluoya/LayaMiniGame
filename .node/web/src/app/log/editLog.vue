<template>
    <div id="editLog">
        <el-dialog
            custom-class="my_dialog"
            title="编辑日志"
            :visible.sync="show"
            width="90vw"
        >
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
    computed: {
        show: {
            get() {
                return this.value;
            },
            set() {
                this.$emit("input", false);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
#editLog {
}
</style>