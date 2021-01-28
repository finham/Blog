<template>
  <div>
    <!--这种做法是固定写死的，后续会改成根据登录状态、账号信息等动态添加侧栏item，那样才是正确的-->

    <!--遍历菜单内容：一种是有子内容的，另一种是没有的-->
    <el-menu default-active="0" class="el-menu-vertical" unique-opened='true' @open="handleOpen" @close="handleClose">
      <template v-for="(item,index) in menuList">
        <router-link :to='item.path' v-if="!item.children && !item.hidden" :key="index">
          <el-menu-item :index="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </router-link>

        <el-submenu v-if='item.children && !item.hidden' :index="index" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <router-link :to='item.path+"/"+subItem.path' v-for="(subItem,subIndex) in item.children" :key="subIndex">
            <el-menu-item :index="index+'-'+subIndex" v-if='!subItem.hidden'>
              <i :class="subItem.icon"></i>
              <span slot="title">{{subItem.name}}</span>
            </el-menu-item>
          </router-link>
        </el-submenu>
      </template>

      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户</span>
        </template>
        <el-menu-item index="1-1">
          <i class="el-icon-star-on"></i>
          <span slot="title">子选项1</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-star-off"></i>
          <span slot="title">子选项2</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <i class="el-icon--left"></i>
          <span slot="title">子选项3</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>运营</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-star-on"></i>
          <span slot="title">子选项1</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-star-off"></i>
          <span slot="title">子选项2</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon--left"></i>
          <span slot="title">子选项3</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>设置</span>
        </template>
        <el-menu-item index="3-1">
          <i class="el-icon-star-on"></i>
          <span slot="title">子选项1</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="el-icon-star-off"></i>
          <span slot="title">子选项2</span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="el-icon--left"></i>
          <span slot="title">子选项3</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>
<script>
  import { routes } from "../router";

  export default {
    name: "left-menu",
    data() {
      return {
        menuList: [],
      };
    },
    mounted() {
      // routes[1]的话就是login
      let menuList = routes[0];
      this.menuList = menuList.children;
      console.log(this.menuList);
    },
  };
</script>
<style>
  /* 拿到class，然后给所有的<a>标签（即超链接）设置 */
  .el-menu-vertical a {
    /* 去掉导航菜单的下划线 */
    text-decoration: none;
  }
</style>