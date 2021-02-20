<template>
    <div id="Tail" class="com-border-top">
        <div class="container com-container">
            框架地址：
            <a href="https://github.com/yayaluoya/LayaMiniGame">GitHub</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Tail {
    $color: #b1bace;
    $color_hover: #555574;

    width: 100%;
    color: $color;

    &:hover {
        color: $color_hover;
        > .container a {
            color: $color_hover;
        }
    }

    > .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        transition: all 0.2s;
        padding: 20px 0;

        > a {
            transition: all 0.2s;
            color: $color;
        }
    }
}
</style>