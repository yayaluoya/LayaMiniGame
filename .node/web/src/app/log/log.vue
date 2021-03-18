<template>
    <div class="log com-box-shadow">
        <div class="nav">
            <div class="title">
                <!-- <span class="head">标题: </span> -->
                <span class="content">{{ data.data.title }}</span>
            </div>
            <div class="writer">
                <!-- <span class="head">作者: </span> -->
                <span class="content">{{ data.data.writer }}</span>
            </div>
            <div class="time">
                <!-- <span class="head">时间: </span> -->
                <span class="content">{{
                    new Date(data.data.time).toLocaleString()
                }}</span>
            </div>
            <div class="button">
                <el-button type="primary" size="mini" @click="edit()" plain
                    >编辑</el-button
                >
                <el-button type="primary" size="mini" @click="show()"
                    >查看</el-button
                >
            </div>
        </div>
        <div class="content" v-if="data.data_">{{ data.data_ }}</div>
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
    border-radius: 0 3px 3px 0;
    border-left: 3px solid #444461;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e8e8e8;
    }

    > .nav {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        color: #393e46;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        align-content: center;

        > div {
            padding: 0 10px;
            color: #444461;
            font-weight: 550;
            width: 200px;
            > .head {
                color: #9ba4b4;
            }
            &.title {
                > .content {
                    color: #a37eba;
                }
            }
            &.writer {
                > .content {
                    color: #9ba4b4;
                }
            }
            &.time {
                > .content {
                    color: #9ba4b4;
                    font-weight: 500;
                }
            }
        }
        > .button {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            justify-content: flex-end;
        }
    }

    > .content {
        max-height: 100px;
        overflow: auto;
        padding: 10px;
        color: #9ba4b4;
        background-color: #4444610a;
    }
}
</style>