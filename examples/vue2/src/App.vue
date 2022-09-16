<!--
 * @Author: lee
 * @Date: 2022-09-13 16:53:31
 * @LastEditTime: 2022-09-15 16:12:55
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> | <router-link to="/dialog">弹窗</router-link> |
      <router-link to="/location">路由</router-link> | <router-link to="/communication">通信</router-link>
      <!-- | <router-link to="/nest">嵌套iframe</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    // 在 vue2-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
    $route() {
      console.log('this.$route.path', this.$route.path)
      window.$wujie?.bus.$emit("sub-route-change", "vue2", this.$route.path);
    },
  },
  mounted() {
    window.$wujie?.bus.$on("vue2-router-change", (path) => this.$router.push(path));
    window.$wujie?.bus.$on("update_loginInfo", function (res) {
      console.log(res, '-----------------vue2');
    });
  }
};
</script>
