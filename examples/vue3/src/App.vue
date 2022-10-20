<!--
 * @Author: lee
 * @Date: 2022-09-13 16:53:31
 * @LastEditTime: 2022-10-20 15:11:22
-->
<template>
  <div id="nav">
    <router-link to="/home">首页3</router-link> | <router-link to="/dialog">弹窗</router-link> |
    <router-link to="/location">路由</router-link> | <router-link to="/contact">通信</router-link> |
    <router-link to="/state">状态</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  watch: {
    // 在 vue3-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
    $route() {
      window.$wujie?.bus.$emit("sub-route-change", "vue3", this.$route.path);
    },
  },
  mounted() {
    window.$wujie?.bus.$on("vue3-router-change", (path) => this.$router.push(path));
    // 主应用登录信息更新接受
    window.$wujie?.bus.$on("update_loginInfo", function (res) {
      console.log(res, '-----------------vue3');
    });
    // 内嵌页 通讯
    window.$wujie?.bus.$on("buttonEvent", function (res) {
      console.log(res, '-----------------vue3');
    });
  },
};
</script>
