<!--基础布局文件-->
<!--main.js里挂载app跳到这里后，一步步往下走，你看显示img，然后HelloWorld，继续跳转
            但是只能有一个div-->
<!--这里改为显示我们自己的内容-->
<template>
    <div id="app">
        <div class="header-part">右边内容</div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

</script>
<style>

</style>