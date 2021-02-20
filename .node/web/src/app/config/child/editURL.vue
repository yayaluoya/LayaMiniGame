<template>
    <div id="editURL">
        <span class="alert">{{ explain }}</span>
        <span class="url" :class="{ noExist: !ifExist }">{{ onUrl }}</span>
        <el-input :placeholder="explain" v-model="url" clearable> </el-input>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            /** 名字 */
            key: "",
            /** 当前地址 */
            onUrl: "",
            /** 地址 */
            url: "",
            /** 是否存在 */
            ifExist: "",
            /** 描述 */
            explain: "",
        };
    },
    watch: {
        url: function (url) {
            this.alterURL(url);
        },
    },
    methods: {
        /** 修改路径 */
        alterURL(url) {
            this.$axios
                .post(this.$api.config.alterURL, {
                    key: this.key,
                    url: url,
                })
                .then((data) => {
                    data = data.data;
                    //判断状态码
                    if (data.code == this.$http.ResponseCode.lose) {
                        this.$message.error("请求出错！", data.mes);
                        return;
                    }
                    //
                    data = data.data;
                    this.onUrl = data.url;
                    this.ifExist = data.ifExist;
                })
                .catch(() => {
                    this.$message.error("请求出错！");
                });
        },
    },
    mounted() {
        //初始化值
        this.key = this.data.key;
        this.onUrl = this.data.onUrl;
        this.url = this.data.url;
        this.ifExist = this.data.ifExist;
        this.explain = this.data.explain;
    },
};
</script>

<style lang="scss" scoped>
#editURL {
    > span.url {
        &.noExist {
            color: red;
        }
    }
}
</style>