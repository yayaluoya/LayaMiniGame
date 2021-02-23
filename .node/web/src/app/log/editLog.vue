<template>
    <div id="editLog">
        <el-dialog
            custom-class="my_dialog"
            title="编辑日志"
            :visible.sync="show"
            width="90vw"
        >
            <el-form
                ref="form"
                :model="data"
                label-width="50px"
                label-position="top"
            >
                <el-form-item
                    label="日志标题"
                    prop="data.title"
                    :rules="[
                        {
                            required: true,
                            message: '不能为空！',
                            trigger: 'blur',
                        },
                        {
                            min: 1,
                            max: 150,
                            message: '长度自己猜！',
                            trigger: 'blur',
                        },
                    ]"
                >
                    <el-input
                        :disabled="loading"
                        v-model="data.data.title"
                        :clearable="true"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="日志内容"
                    prop="data_"
                    :rules="[
                        {
                            required: true,
                            message: '不能为空！',
                            trigger: 'blur',
                        },
                        {
                            min: 3,
                            max: 13000,
                            message: '长度自己猜！',
                            trigger: 'blur',
                        },
                    ]"
                >
                    <EditMarkdown v-model="data.data_" :disabled="loading">
                    </EditMarkdown>
                </el-form-item>
                <el-form-item label="日志作者" prop="data.writer">
                    <el-input disabled v-model="data.data.writer"></el-input>
                </el-form-item>
                <div class="time">
                    <span>{{ new Date(data.data.time).toLocaleString() }}</span>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <i class="el-icon-loading" v-if="loading"></i>
                <el-button @click="show = false" :disabled="loading"
                    >取 消</el-button
                >
                <el-button type="primary" @click="saveLog" :disabled="loading"
                    >保存日志</el-button
                >
            </span>
        </el-dialog>
    </div>
</template>

<script>
import EditMarkdown from "./editMarkdown.vue";

export default {
    components: { EditMarkdown },
    props: {
        value: {
            //组件是否显示
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            /** 是否在加载 */
            loading: false,
            /** 数据 */
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
    },
    methods: {
        /** 设置数据 */
        setData(data) {
            this.data = data;
        },
        /** 保存日志 */
        saveLog() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if (this.loading) {
                        return;
                    }
                    this.loading = true;
                    //上传
                    this.$axios
                        .post(this.$api.log.editLog, {
                            name: this.data.name,
                            log: JSON.stringify(this.data.data),
                            log_: this.data.data_,
                        })
                        .then((data) => {
                            data = data.data;
                            //判断状态码
                            if (
                                data.code == this.$http.ResponseCode.lose ||
                                !data.data
                            ) {
                                this.$message.error("请求出错！", data.mes);
                                return;
                            }
                            //修改成功
                            this.$message({
                                showClose: true,
                                type: "success",
                                duration: 1000,
                                message: "修改成功",
                            });
                        })
                        .catch((E) => {
                            this.$message.error("请求出错！", E);
                        })
                        .finally(() => {
                            this.loading = false;
                        });
                }
            });
        },
    },
};
</script>

<style lang="scss" scoped>
#editLog {
    width: fit-content;
    /deep/.el-dialog {
        margin-top: 5vw !important;
        max-width: 1080px;
    }
    /deep/.el-dialog__body {
        padding: 10px 20px;
    }
}
</style>