<!-- eslint-disable prettier/prettier -->
<!--
 * @Author: lee
 * @Date: 2022-10-19 18:15:21
 * @LastEditTime: 2022-10-20 14:47:50
-->
<template>
  <div>
    123456
    <WujieVue
      width="100%"
      height="500px"
      url="//localhost:7300/"
      name="test_nest"
      :alive=true
      id="test_nest"
      :beforeLoad="beforeLoad"
      :beforeMount="beforeMount"
      :loadError="loadError"
      :afterMount="afterMount"
    ></WujieVue>
  </div>
</template>

<script>
import lifecycles from "../lifecycle";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    ...lifecycles,
  },
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped></style>
