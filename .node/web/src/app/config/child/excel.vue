<template>
    <div class="excel com-box-shadow">
        <span class="name">{{ name }}</span>
        <span class="path">{{ path }}</span>
        <el-button
            type="primary"
            size="mini"
            :plain="!ifAlter"
            :disabled="ifExport"
            @click="exportJson()"
            >导出</el-button
        >
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            /** 是否在导出 */
            ifExport: false,
            /** 名字 */
            name: "",
            /** 地址 */
            path: "",
            /** 是否修改 */
            ifAlter: true,
        };
    },
    methods: {
        /** 导出配置表 */
        exportJson() {
            if (this.ifExport) {
                return;
            }
            this.ifExport = true;
            this.$axios
                .post(this.$api.config.exportExcelToJson, {
                    excel: this.path,
                })
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    //
                    this.ifAlter = false;
                    //导出成功
                    this.$message({
                        showClose: true,
                        type: "success",
                        duration: 1000,
                        message: "导出成功->" + this.name,
                    });
                })
                .catch((E) => {
                    this.$message.error("请求出错！", E);
                })
                .finally(() => {
                    this.ifExport = false;
                });
        },
    },
    mounted() {
        //初始化值
        this.name = this.data.name;
        this.path = this.data.path;
        this.ifAlter = this.data.ifAlter;
    },
};
</script>

<style lang="scss" scoped>
.excel {
    padding: 5px;
    margin: 5px 0;
    background-color: #ebebeb;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e4e3e3;
    }

    > span.name {
        color: #3a3a59;
        font-weight: 600;
    }
    > span.path {
        color: #9ba4b4;
    }
}
</style>