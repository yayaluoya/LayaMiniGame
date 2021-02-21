<template>
    <div id="log">
        <edit-MD v-model="showEditMD" />
        <show-MD v-model="showMD" />
        <div class="nav">
            <el-button type="primary" size="mini" @click="showEditMD = true"
                >新建日志</el-button
            >
        </div>
        <div class="logs">日志列表</div>
    </div>
</template>

<script>
import editMD from "./editMD";
import showMD from "./showMD";
export default {
    components: {
        "edit-MD": editMD,
        "show-MD": showMD,
    },
    data() {
        return {
            /** 是否显示新建md */
            showEditMD: false,
            /** 是否显示md查看 */
            showMD: false,
        };
    },
    methods: {
        //
    },
};
</script>

<style lang="scss" scoped>
#log {
    padding-top: 10px;

    > .nav {
        padding-bottom: 5px;
        margin-bottom: 5px;
        display: flex;
        justify-content: flex-end;
        border-bottom: 1px solid #8d93ab;
    }
}
</style>