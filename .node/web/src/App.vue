<template>
  <div id="app">
    <!-- 主入口 -->
    <Main />
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
