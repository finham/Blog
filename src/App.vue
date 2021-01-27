<template>
    <div id="app">
        <!--router-view显示的就是base-view.vue，因为它访问到了index.js里的routes-->
        <router-view></router-view>
    </div>
</template>
<script>
    //以下的HelloWorld定义在上面了，是vue的语法内容
    export default {
        //el:'#app',  这句其实是作用域挂载，不过已经写在了main.js里，用mount挂载了
        name: 'App'
    }
</script>

<style>
    body{
        padding: 0;
        margin: 0;
    }
</style>
