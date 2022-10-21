<!-- eslint-disable prettier/prettier -->
<!--
 * @Author: lee
 * @Date: 2022-10-19 18:15:21
 * @LastEditTime: 2022-10-21 14:12:06
-->
<template>
  <div>
    vue3
    <WujieVue
      width="100%"
      height="500px"
      url="//localhost:7300/"
      name="test_nest_vue2"
      
      id="test_nest"
      :sync="true"
      :fetch="fetch"
      :beforeLoad="beforeLoad"
      :beforeMount="beforeMount"
      :loadError="loadError"
      :afterMount="afterMount"
      :props="propsO"
    ></WujieVue>
  </div>
</template>

<script>
import lifecycles from "../lifecycle";
export default {
  components: {},
  props: {},
  data() {
    return {
      propsO: {
        jump: (name) => {
          this.$router.push({ name });
        },
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...lifecycles,
    fetch(url, options) {
      return window.fetch(url, { ...options, credentials: "omit" });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped></style>
