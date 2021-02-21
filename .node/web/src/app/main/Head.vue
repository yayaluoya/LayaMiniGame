<template>
    <div id="Head" class="com-border-bottom">
        <div class="container com-container">
            <div class="left">
                <span>小游戏</span>
                后台
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Head {
    width: 100%;
    height: 40px;
    top: 0px;
    position: fixed;
    background-color: #444461;
    z-index: 999;

    > .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        > .left {
            color: white;
            font-size: 1.1rem;
            font-weight: 700;

            > span {
                color: #444461;
                background-color: white;
                padding: 3px;
                border-radius: 3px;
                margin-right: 3px;
            }
        }
    }
}
</style>