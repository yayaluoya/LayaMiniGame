<template>
    <div id="Body">
        <div class="nav">
            <div class="container com-container com-border-bottom"></div>
        </div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Body {
    width: 100%;
    min-height: calc(100vh - 40px);
    margin-top: 40px;

    > .nav,
    .content {
        width: 100%;
    }

    > .nav {
        height: 40px;
        position: fixed;
        background-color: #fff;
        z-index: 999;

        > .container {
        }
    }
}
</style>