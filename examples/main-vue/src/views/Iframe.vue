<!--
 * @Author: lee
 * @Date: 2022-09-13 16:53:31
 * @LastEditTime: 2022-09-19 12:02:28
-->
<template>
  <div>
    <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
    <WujieVue width="100%" height="100%" :fetch="fetch" :name="iframe_name" :url="vue2Url"></WujieVue>
  </div>
</template>

<script>
// import hostMap from "../hostMap";
// import wujieVue from "wujie-vue2";
// import fetch from "../fetch";
export default {
  data() {
    return {
      url: "",
    };
  },
  computed: {
    vue2Url() {
      // return hostMap("//localhost:7200/") + `#/${this.$route.params.path}`;
      return this.$route.query.url;
    },
    iframe_name() {
      let uuid = this.$route.query.name;
      return `iframe_name_${uuid}`;
    },
  },
  methods: {
    getUuid() {
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";

      var uuid = s.join("");
      uuid = uuid.split("-").join("");
      return uuid;
    },
    jump(name) {
      this.$router.push({ name });
    },
    handleFn(id) {
      console.log(id);
    },
    fetch(url, options) {
      return window.fetch(url, { ...options, credentials: "omit" });
    },
  },
  // watch: {
  //   $route() {
  //     wujieVue.bus.$emit("vue2-router-change", `/${this.$route.params.path}`);
  //   },
  // },
  mounted() {
    let tttt = window.parent.testGlobalMsg;
    let query = this.$route.query.url;
    this.url = this.$route.query.url;
    console.log("---------------------:", tttt, query);
  },
};
</script>

<style scoped>
.box {
  background: #ccc;
  color: #fff;
  cursor: pointer;
}
</style>
