<template>
    <div id="excel">{{ data }}</div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            /** 名字 */
            name: "",
            /** 地址 */
            path: "",
        };
    },
    mounted() {
        //初始化值
        this.name = this.data.name;
        this.path = this.data.path;
    },
};
</script>

<style lang="scss" scoped>
#excel {
}
</style>