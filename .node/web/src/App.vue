<template>
    <div id="app">
        <!-- 主入口 -->
        <Main />
    </div>
</template>

<script>
import Vue from "vue";
//引入elementUI库
import ElementUI from "element-ui";
import "./css/theme/index.css"; //引入自定义主题
Vue.use(ElementUI);
//引入自定义样式
import "./css/index.scss";
//引入像素风格库
import "nes.css/css/nes.min.css";
//引入全局状态管理器
import store from "./vuex/index.js";
//引入路径实例
import router from "./router/index.js";
//引入axios实例
import axios from "./http/axios.js";
Vue.prototype.$axios = axios;
//引入请求相关信息
import ResponseCode from "./http/ResponseCode";
Vue.prototype.$http = {
    ResponseCode: ResponseCode,
};
//引入api实例
import api from "./api/index.js";
Vue.prototype.$api = api;
//引入json数据查看器
import JsonViewer from "vue-json-viewer";
Vue.use(JsonViewer);
//引入markdown解析库
import marked from "marked";
import hljs from "highlight.js"; // 引入 highlight.js
// import "highlight.js/styles/github.css"; // 引入高亮样式
import "highlight.js/styles/atom-one-dark.css"; // 引入高亮样式
var rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
});
Vue.prototype.$marked = marked;
//
import Main from "./app/Main.vue";

export default {
    name: "App",
    store, //状态管理器
    router, //路由
    components: {
        Main,
    },
    mounted() {
        // console.log("route\n", this.$route);
        // console.log("vuex\n", this.$store);
        // console.log("axiox\n", this.$Axios);
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
