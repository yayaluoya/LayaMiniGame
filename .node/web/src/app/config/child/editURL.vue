<template>
    <div id="editURL">
        <span class="alert">{{ explain }}：</span>
        <span class="url" :class="{ yesExist: ifExist, noExist: !ifExist }">{{
            onUrl
        }}</span>
        <el-input
            ref="input"
            :placeholder="explain"
            v-model="url"
            clearable
            @focus="onFocus = true"
            @blur="onFocus = false"
        >
        </el-input>
        <div class="more" v-show="moreUrl.length > 0">
            <el-tag
                type="info"
                effect="dark"
                size="mini"
                v-for="(item, index) in moreUrl"
                :key="index"
                @click="moreUrlClick(item)"
            >
                {{ item }}
            </el-tag>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            /** 是否获取焦点 */
            onFocus: false,
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
            /** 更多内容 */
            moreUrl: [],
        };
    },
    watch: {
        url: function (url) {
            //过滤
            this.url = url.replace(/([/\\]+)/g, "/").replace(/ +/g, "");
            //修改
            this.alterURL(this.url);
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
                    this.moreUrl = data.moreUrl;
                })
                .catch(() => {
                    this.$message.error("请求出错！");
                });
        },
        /** 更多url点击 */
        moreUrlClick(_urlName) {
            this.url = `${this.url}/${_urlName}/`;
            //重新获取焦点
            this.$refs.input.focus();
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
    padding-bottom: 20px;

    > .el-input {
        margin-top: 3px;
    }
    > span.alert {
        color: #555574;
    }
    > span.url {
        font-weight: 600;
        font-size: 0.9rem;

        &.yesExist {
            color: #79d70f;
        }
        &.noExist {
            color: red;
        }
    }
    > .more {
        margin-top: 2px;
        > .el-tag {
            margin-right: 2px;
        }
    }
}
</style>