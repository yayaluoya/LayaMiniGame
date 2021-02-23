<template>
    <div id="log">
        <edit-MD v-model="showEditMD" @addMd="addMd" />
        <show-MD ref="showMD" v-model="showMD" />
        <edit-Log ref="editLog" v-model="editLog" />
        <div class="nav">
            <span>
                项目日志
                <i class="el-icon-loading" v-show="ifLoad"></i>
            </span>
            <el-button type="primary" size="mini" @click="showEditMD = true"
                >新建日志</el-button
            >
        </div>
        <div class="logs">
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
            /** 全部日志列表 */
            allLog: [],
            /** 日志是否获取了全部数据 */
            logIfGetData_: Symbol(),
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
                    //提取并排序
                    this.allLog = data.data
                        .map((item) => {
                            return {
                                name: item.name,
                                data: JSON.parse(item.data),
                                data_: item.data_,
                            };
                        })
                        .sort((a, b) => {
                            // console.log(a.data.time, b.data.time);
                            return b.data.time - a.data.time;
                        });
                })
                .catch((E) => {
                    this.$message.error("请求出错！", E);
                })
                .finally(() => {
                    this.ifLoad = false;
                });
        },
        /** 添加一个日志 */
        addMd(_data) {
            //添加到数组头部
            this.allLog.unshift(_data);
            _data[this.logIfGetData_] = true;
        },
        /** 编辑 */
        edit(index) {
            this.getLogData_(index, (data) => {
                this.$refs.editLog.setData(data);
                this.editLog = true;
            });
        },
        /** 查看 */
        show(index) {
            this.getLogData_(index, (data) => {
                this.$refs.showMD.setData(data);
                this.showMD = true;
            });
        },
        /** 填充全部数据 */
        getLogData_(index, _back) {
            if (index < 0) {
                return;
            }
            //获取数据
            let _data = this.allLog[index];
            //判断是否已经获取了数据
            if (_data[this.logIfGetData_]) {
                _back(_data);
                return;
            }
            this.ifLoad = true;
            //如果没有就从远端获取
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
                    _data[this.logIfGetData_] = true;
                    _back(_data);
                })
                .finally(() => {
                    this.ifLoad = false;
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