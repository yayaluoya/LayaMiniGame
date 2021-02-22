<template>
    <div class="json">
        <div class="nav">
            <span class="name">{{ name }}</span>
            <span class="path">{{ path }}</span>
            <div class="switch">
                <span>是否压缩</span>
                <el-switch :disabled="ifLoad" v-model="ifZip"> </el-switch>
            </div>
        </div>
        <div class="content">
            <div class="nav">
                <span>{{ ifShowJson ? "隐藏" : "显示" }}json内容</span>
                <el-switch v-model="ifShowJson"></el-switch>
            </div>
            <json-viewer
                v-if="ifShowJson"
                :value="content"
                copyable
                sort
            ></json-viewer>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            /** 是否在加载中 */
            ifLoad: false,
            /** 名字 */
            name: "",
            /** 地址 */
            path: "",
            /** 内容 */
            content: {},
            /** 是否压缩 */
            ifZip: false,
            /** 是否显示json数据 */
            ifShowJson: false,
        };
    },
    watch: {
        //监听是否压缩属性
        ifZip: function (_ifZip) {
            this.ifLoad = true;
            let _url = "";
            if (_ifZip) {
                _url = this.$api.config.zipJsonFile;
            } else {
                _url = this.$api.config.unZipJsonFile;
            }
            //发送请求
            this.$axios
                .post(_url, {
                    url: this.path,
                })
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    //
                    this.ifZip = data.data.zip;
                    this.content = data.data.data;
                })
                .catch((E) => {
                    this.$message.error("请求出错！", E);
                })
                .finally(() => {
                    this.ifLoad = false;
                });
        },
    },
    methods: {
        /** 获取json文件内容 */
        getContent() {
            this.ifLoad = true;
            this.$axios
                .get(this.$api.config.getJsonData, {
                    params: { url: this.path },
                })
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    //
                    this.ifZip = data.data.zip;
                    this.content = data.data.data;
                })
                .catch((E) => {
                    this.$message.error("请求出错！", E);
                })
                .finally(() => {
                    this.ifLoad = false;
                });
        },
    },
    mounted() {
        //初始化值
        this.name = this.data.name;
        this.path = this.data.path;
        //
        this.getContent();
    },
};
</script>

<style lang="scss" scoped>
.json {
    padding: 5px;
    margin: 5px 0;
    background-color: #ebebeb;
    border-radius: 5px;

    > .nav {
        margin-bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #8d93ab;

        > span.name {
            color: #3a3a59;
            font-weight: 600;
        }
        > span.path {
            color: #9ba4b4;
        }
        > .switch {
            display: flex;
            align-items: center;
            > span {
                color: #555574;
                margin-right: 5px;
            }
        }
    }

    > .content {
        > .nav {
            margin-bottom: 5px;
            display: flex;
            align-items: center;

            > span {
                color: #9ba4b4;
                margin-right: 5px;
            }
        }
    }
}
</style>