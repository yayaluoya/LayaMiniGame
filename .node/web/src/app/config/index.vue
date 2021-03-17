<template>
    <div id="config">
        <el-tabs v-model="navName" v-loading="loading">
            <el-tab-pane label="配置表导出" name="excel">
                <span class="null" v-if="allConfigsNames.length == 0"
                    >空空如也</span
                >
                <el-button type="primary" size="mini" @click="exportJson()"
                    >全部导出</el-button
                >
                <excel-
                    ref="excels"
                    v-for="(item, index) in allConfigsNames"
                    :key="index + 'excel'"
                    :data="item"
                />
            </el-tab-pane>
            <el-tab-pane label="配置文件json文件" name="config-json">
                <span class="null" v-if="allConfigJsonNames.length == 0"
                    >空空如也</span
                >
                <json-
                    v-for="(item, index) in allConfigJsonNames"
                    :key="index + 'json'"
                    :data="item"
                />
            </el-tab-pane>
            <el-tab-pane label="场景json文件" name="scene-json">
                <span class="null" v-if="allSceneJsonNames.length == 0"
                    >空空如也</span
                >
                <json-
                    v-for="(item, index) in allSceneJsonNames"
                    :key="index + 'json2'"
                    :data="item"
                />
            </el-tab-pane>
            <el-tab-pane name="edit-url">
                <span slot="label"
                    ><i class="el-icon-setting"></i> 修改路径</span
                >
                <span class="null" v-if="allURL.length == 0">空空如也</span>
                <edit-URL
                    v-for="(item, index) in allURL"
                    :key="index + 'edit-url'"
                    :data="item"
                />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import editURL from "./child/editURL.vue";
import excel from "./child/excel.vue";
import json from "./child/json.vue";
export default {
    components: {
        "edit-URL": editURL,
        "excel-": excel,
        "json-": json,
    },
    data() {
        return {
            /** 是否在加载 */
            loading: false,
            /** 导航名字 */
            navName: "",
            /** 所有路径关键值 */
            allURL: [],
            /** 所有配置文件列表 */
            allConfigsNames: [],
            /** 所有配置表json名字 */
            allConfigJsonNames: [],
            /** 所有场景json文件名字 */
            allSceneJsonNames: [],
        };
    },
    watch: {
        /** 监听当前导航页变化 */
        navName() {
            switch (this.navName) {
                case "excel":
                    this.getAllConfigsNames();
                    break;
                case "config-json":
                    this.getAllConfigJsonNames();
                    break;
                case "scene-json":
                    this.getAllSceneJsonNames();
                    break;
                case "edit-url":
                    this.getAllURL();
                    break;
            }
        },
    },
    methods: {
        /**
         * 获取所有配置表名字
         */
        getAllConfigsNames() {
            this.allConfigsNames = [];
            this.http(this.$api.config.getAllConfigsNames, (_data) => {
                this.allConfigsNames = _data;
            });
        },

        /**
         * 获取所有配置表json名字
         */
        getAllConfigJsonNames() {
            this.allConfigJsonNames = [];
            this.http(this.$api.config.getAllConfigJsonNames, (_data) => {
                this.allConfigJsonNames = _data;
            });
        },

        /**
         * 获取所有场景json文件名字
         */
        getAllSceneJsonNames() {
            this.allSceneJsonNames = [];
            this.http(this.$api.config.getAllSceneJsonNames, (_data) => {
                this.allSceneJsonNames = _data;
            });
        },

        /**
         * 获取所有路径
         */
        getAllURL() {
            this.allURL = [];
            this.http(this.$api.config.getAllURL, (_data) => {
                this.allURL = _data;
            });
        },

        /**
         * 发送请求并回调数据
         */
        http(_url, _comBack, _loseBack, _back) {
            if (this.loading) {
                return;
            }
            this.loading = true;
            //
            this.$axios
                .get(_url)
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    data = data.data;
                    //
                    _comBack && _comBack.call(this, data);
                })
                .catch(() => {
                    this.$message.error("请求出错！");
                    _loseBack && _loseBack.call(this);
                })
                .finally(() => {
                    _back && _back.call(this);
                    this.loading = false;
                });
        },

        /** 全部导出json */
        exportJson() {
            this.$refs.excels.forEach((item) => {
                item.exportJson();
            });
        },

        /** 导航按钮点击 */
        handleClick(_item) {
            console.log(_item);
        },
    },
    mounted() {
        //默认页面为导出配置表
        this.navName = "excel";
    },
};
</script>

<style lang="scss" scoped>
#config {
    width: 100%;

    .null {
        color: #3a3a59;
    }
}
</style>