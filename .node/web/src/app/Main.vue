<template>
    <div id="Main">
        <!-- 公共背景 -->
        <Background />
        <!-- 公共头部 -->
        <Head />
        <!-- 公共身体 -->
        <Body />
        <!-- 公共尾部 -->
        <Tail />
    </div>
</template>

<script>
import Background from "./main/Background.vue";
import Head from "./main/Head.vue";
import Body from "./main/Body.vue";
import Tail from "./main/Tail.vue";

export default {
    name: "Main",
    components: {
        Background,
        Head,
        Body,
        Tail,
    },
};
</script>

<style scoped lang="scss">
#Main {
    position: relative;
}
</style>
