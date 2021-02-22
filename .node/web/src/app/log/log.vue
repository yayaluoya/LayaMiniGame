<template>
    <div class="log">
        <div>
            <span>标题: </span>
            <span>{{ data.data.title }}</span>
        </div>
        <div>
            <span>作者: </span>
            <span>{{ data.data.writer }}</span>
        </div>
        <div>
            <span>时间: </span>
            <span>{{ data.data.time }}</span>
        </div>
        <div class="button">
            <el-button type="primary" size="mini" @click="edit()"
                >编辑</el-button
            >
            <el-button type="primary" size="mini" @click="show()"
                >查看</el-button
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            default: -1,
        },
        data: {
            type: Object,
            default: null,
        },
    },
    methods: {
        /** 编辑 */
        edit() {
            this.$emit("edit");
        },
        /** 查看 */
        show() {
            this.$emit("show");
        },
    },
};
</script>

<style lang="scss" scoped>
.log {
    margin-bottom: 10px;
    background-color: #eeeeee;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-radius: 3px;
    padding: 5px;
    color: #393e46;

    > div {
        padding: 0 10px;
        color: #444461;
        font-weight: 550;
    }
    > .button {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }
}
</style>