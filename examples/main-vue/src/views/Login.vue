<!--
 * @Author: lee
 * @Date: 2022-09-14 16:30:18
 * @LastEditTime: 2022-09-16 11:56:45
-->
<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="vue44" :url="vue2Url" :sync="true" :props="{jump}"></WujieVue>
</template>

<script>
// import hostMap from "../hostMap";
export default {
  data() {
    return {
      vue2Url: 'http://localhost:8080/#/?theme=light&language=en',
    };
  },
  methods: {
    jump(name) {
      this.$router.push({ ...name });
    },
  },
};
</script>

<style lang="scss" scoped></style>
