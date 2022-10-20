<!-- eslint-disable prettier/prettier -->
<!--
 * @Author: lee
 * @Date: 2022-10-19 18:15:21
 * @LastEditTime: 2022-10-20 16:14:50
-->
<template>
  <div>
    vue3
    <WujieVue
      width="100%"
      height="500px"
      url="http://192.168.9.118:9000/"
      name="test_nest"
      :exec="true"
      :alive="true"
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
