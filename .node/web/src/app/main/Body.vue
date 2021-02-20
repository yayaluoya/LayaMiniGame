<template>
    <div id="Body">
        <div class="nav com-border-bottom">
            <div class="container com-container">
                <router-link
                    to="/config"
                    :class="{ on: $route.name == 'config' }"
                >
                    配置表
                </router-link>
                <router-link to="/log" :class="{ on: $route.name == 'log' }">
                    日志
                </router-link>
            </div>
        </div>
        <div class="container com-container">
            <keep-alive>
                <!-- 路由出口 -->
                <!-- 路由匹配到的组件将渲染在这里 -->
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Body {
    width: 100%;
    min-height: calc(100vh - 81px);
    margin-top: 81px;

    > .nav {
        width: 100%;
        height: 40px;
        position: fixed;
        background-color: #fff;
        z-index: 999;
        top: 40px;

        > .container {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            > a {
                color: #304551;
                margin-right: 40px;
                transition: all 0.2s;
                text-decoration: none;
                outline: none;

                &.on {
                    font-weight: 700;
                    background-color: transparent;
                    background-position: 0 100%;
                    background-size: 70% 50%;
                    background-repeat: no-repeat;
                    background-image: -webkit-gradient(
                        linear,
                        left top,
                        left bottom,
                        from(#ffd966),
                        to(#ffd966)
                    );
                    background-image: linear-gradient(#ffd966, #ffd966);
                    letter-spacing: 2px;
                }
            }
        }
    }
}
</style>