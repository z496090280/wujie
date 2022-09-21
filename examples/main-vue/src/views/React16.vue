<!--
 * @Author: lee
 * @Date: 2022-09-13 16:53:31
 * @LastEditTime: 2022-09-14 17:14:49
-->
<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="react16" :url="react16Url" :sync="true"></WujieVue>
</template>

<script>
import hostMap from "../hostMap";

export default {
  data() {
    return {
      react16Url: hostMap("//localhost:7600/"),
    };
  },
  mounted() {
    // window.$wujie?.bus.$on("update_loginInfo", function (res) {
    //   console.log(res, '-----------------16')
    // });
  },
};
</script>

<style lang="scss" scoped></style>
