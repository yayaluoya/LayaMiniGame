<template>
    <div id="Body">
        <div class="nav com-border-bottom">
            <div class="container com-container">
                <router-link to="/config">配置表</router-link>
                <router-link to="/log">日志</router-link>
            </div>
        </div>
        <div class="content com-container">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Body {
    width: 100%;
    min-height: calc(100vh - 40px);
    margin-top: 81px;

    > .nav {
        width: 100%;
        height: 40px;
        position: fixed;
        background-color: #fff;
        z-index: 999;
        top: 41px;
    }
}
</style>