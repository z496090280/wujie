<!--
 * @Author: lee
 * @Date: 2022-09-13 16:53:31
 * @LastEditTime: 2022-09-15 16:07:15
-->
<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="vue2" :url="vue2Url"></WujieVue>
</template>

<script>
import hostMap from "../hostMap";
import wujieVue from "wujie-vue2";
export default {
  computed: {
    vue2Url() {
      return hostMap("//localhost:7200/") + `#/${this.$route.params.path}`;
    },
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    },
  },
  watch: {
    $route() {
      wujieVue.bus.$emit("vue2-router-change", `/${this.$route.params.path}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
