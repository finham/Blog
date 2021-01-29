<!--基础布局文件-->
<!--main.js里挂载app跳到这里后，一步步往下走，你看显示img，然后HelloWorld，继续跳转
            但是只能有一个div-->
<!--这里改为显示我们自己的内容-->
<template>
  <div id="app">
    <!--main.js里挂载app跳到这里后，一步步往下走，你看显示img，然后HelloWorld，继续跳转
        但是只能有一个div-->
    <el-container>
      <el-header id="admin-header">
        <top-header></top-header>
      </el-header>
      <el-container>
        <el-aside id="left-menu" width="200px">
          <left-menu></left-menu>
        </el-aside>
        <el-container>
          <!-- <el-header>副标题</el-header> -->
          <el-main>
            <div class="content">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    mounted() {
      //在mount时动态设置左边菜单的高度
      let leftMenu = document.getElementById('left-menu');
      let adminHeader = document.getElementById('admin-header');
      let dy = window.innerHeight - adminHeader.offsetHeight;
      //console.log('dy' + dy);
      if (leftMenu) {
        leftMenu.style.height = dy + "px";
      }
    }
  }
</script>
<style>
  .el-header,
  .el-footer {
    background-color: deepskyblue;
    line-height: 60px;
  }

  .el-aside {
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
  }

  #left-menu .el-menu{
    border: none;
  }
</style>