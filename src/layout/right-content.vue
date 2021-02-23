<!--基础布局文件-->
<!--main.js里挂载app跳到这里后，一步步往下走，你看显示img，然后HelloWorld，继续跳转
            但是只能有一个div-->
<!--这里改为显示我们自己的内容-->
<template>
    <div id="app">
        <div class="content-title-box" v-text="$route.name">
        
        </div>
        <div class="content-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$router
        }
    }
</script>
<style>
    .content-title-box {
        color: black;
        padding: 10px;
        border-bottom: solid 2px white;
    }

    .content-box {
        padding-left: 10px;
        padding-top: 10px;
    }
</style>