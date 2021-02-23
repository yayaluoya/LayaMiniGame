<template>
    <div id="Tail" class="com-border-top">
        <div class="container com-container">
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
    $color_hover: #fff;

    width: 100%;
    color: $color;
    background-color: #00102af2;

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