<template>
    <div id="log">
        <edit-MD v-model="showEditMD" />
        <show-MD ref="showMD" v-model="showMD" />
        <edit-Log v-model="editLog" />
        <div class="nav">
            <span>项目日志</span>
            <el-button type="primary" size="mini" @click="showEditMD = true"
                >新建日志</el-button
            >
        </div>
        <div class="logs" v-loading="ifLoad">
            <log
                v-for="(item, index) in allLog"
                :key="index"
                :index="index"
                :data="item"
                @edit="edit(index)"
                @show="show(index)"
            />
        </div>
    </div>
</template>

<script>
import editMD from "./editMD";
import showMD from "./showMD";
import editLog from "./editLog";
import log from "./log";
export default {
    components: {
        "edit-MD": editMD,
        "show-MD": showMD,
        log: log,
        "edit-Log": editLog,
    },
    data() {
        return {
            /** 是否在加载 */
            ifLoad: false,
            /** 是否显示新建md */
            showEditMD: false,
            /** 是否显示md查看 */
            showMD: false,
            /** 是否显示log编辑器 */
            editLog: false,
            //
            allLog: [],
        };
    },
    methods: {
        /** 获取所有日志 */
        getAllLog() {
            if (this.ifLoad) {
                return;
            }
            this.ifLoad = true;
            //发送请求
            this.$axios
                .get(this.$api.log.getAllLog)
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    //
                    this.allLog = data.data.map((item) => {
                        return {
                            name: item.name,
                            data: JSON.parse(item.data),
                            data_: item.data_,
                        };
                    });
                })
                .catch((E) => {
                    this.$message.error("请求出错！", E);
                })
                .finally(() => {
                    this.ifLoad = false;
                });
        },
        /** 编辑 */
        edit(index) {
            console.log("edit", index);
        },
        /** 查看 */
        show(index) {
            if (index < 0) {
                return;
            }
            //获取数据
            let _data = this.allLog[index];
            //发送请求
            this.$axios
                .get(this.$api.log.getLog, {
                    params: {
                        name: _data.name,
                    },
                })
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    //
                    _data.data_ = data.data.data_;
                    this.$refs.showMD.setData(_data);
                    this.showMD = true;
                });
        },
    },
    mounted() {
        this.getAllLog();
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
        justify-content: space-between;
        border-bottom: 1px solid #8d93ab;

        > span {
            font-weight: 600;
            color: #444461;
        }
    }
}
</style>