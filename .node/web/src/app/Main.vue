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
import Background from "./com/Background.vue";
import Head from "./com/Head.vue";
import Body from "./com/Body.vue";
import Tail from "./com/Tail.vue";

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
