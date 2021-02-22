<template>
    <div class="editMD">
        <el-dialog
            custom-class="my_dialog"
            title="新建日志"
            :visible.sync="show"
            width="90vw"
        >
            <div>
                <el-form
                    ref="form"
                    :model="log"
                    label-width="50px"
                    label-position="top"
                >
                    <el-form-item
                        label="日志标题"
                        prop="title"
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
                            v-model="log.title"
                            :clearable="true"
                        ></el-input>
                    </el-form-item>
                    <el-form-item
                        label="日志内容"
                        prop="content"
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
                        <EditMarkdown v-model="log.content" :disabled="loading">
                        </EditMarkdown>
                    </el-form-item>
                    <el-form-item
                        label="日志作者"
                        prop="writer"
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
                            v-model="log.writer"
                            :clearable="true"
                        ></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <i class="el-icon-loading" v-if="loading"></i>
                <el-button @click="show = false" :disabled="loading"
                    >取 消</el-button
                >
                <el-button
                    type="danger"
                    @click="remove_form('form')"
                    :disabled="loading"
                    >清空日志</el-button
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
            loading: false,
            log: {
                //对话框里的数据
                title: "",
                content: "",
                writer: "",
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
        remove_form(form_name) {
            //清空表单
            this.$refs[form_name].resetFields();
        },
        saveLog() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if (this.loading) {
                        return;
                    }
                    this.loading = true;
                    //上传
                    this.$axios
                        .post(this.$api.log.writeLog, {
                            log: JSON.stringify({
                                title: this.log.title,
                                writer: this.log.writer,
                                time: new Date().toLocaleString(),
                            }),
                            log_: this.log.content,
                            key: this.log.title,
                        })
                        .then((data) => {
                            data = data.data;
                            //判断状态码
                            if (data.code == this.$http.ResponseCode.lose) {
                                this.$message.error("请求出错！", data.mes);
                                return;
                            }
                            //
                            console.log(data.data);
                            //清空表单
                            this.remove_form("form");
                            //保存成功
                            this.$message({
                                showClose: true,
                                type: "success",
                                duration: 1000,
                                message: "保存成功",
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
<style lang='scss' scoped>
.editMD {
    width: fit-content;
    /deep/.el-dialog {
        margin-top: 5vw !important;
    }
    /deep/.el-dialog__body {
        padding: 10px 20px;
    }
}
</style>