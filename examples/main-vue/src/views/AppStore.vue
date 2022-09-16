<!--
 * @Author: lee
 * @Date: 2022-09-13 16:53:31
 * @LastEditTime: 2022-09-16 17:29:38
-->
<template>
  <div>
    <div class="box" v-for="(item, index) in arr" :key="index" @click="handleFn(item.url)">
      <p>{{item.title}}</p>
      <p>{{item.desc}}</p>
    </div>
    <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
    <WujieVue width="100%" height="100vh" name="vue2" :url="vue2Url"></WujieVue>
  </div>

</template>

<script>
import hostMap from "../hostMap";
import wujieVue from "wujie-vue2";
export default {
  data() {
    return {
      arr: [
      { title: '杭州市委', desc: 'asdsad', id: 1, url: 'http://www.hangzhou.gov.cn/' },
        { title: 'model', desc: 'asdsad', id: 3, url: 'http://localhost:8082/#/index?theme=dark&language=en' },
        { title: 'ui', desc: 'asdsad', id: 4, url: 'http://localhost:8081/#/index?username=demo_2tp&token=eyJraWQiOiJKTFZyYUlHWGhYZHJUVEpuU3pKSXBmbVwvck9sVXFHN3FOOWU4R0Zub0M3UT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxOWRmZjc5My1kZWY2LTQ2MzMtYjJjMS0yNmM2ODEyN2ZiOGUiLCJjb2duaXRvOmdyb3VwcyI6WyJIYW5nTHVuZ19TQ0JCIiwiTmFuRnVuZ19BaXJzaWRlIiwiU3dpcmVfT25lVGFpa29vUGxhY2UiLCJBcnVwIiwiU3dpcmVfVHdvVGFpa29vUGxhY2UiXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX0UxaU54MW5IbyIsImNsaWVudF9pZCI6InJkaHZuY2N1anRpNmhhM2xzOXBoM2NhN3MiLCJvcmlnaW5fanRpIjoiMGM5NjVjZTQtYjc1NC00YmJkLWJhMWMtYzU0MTZlNTYwMTM3IiwiZXZlbnRfaWQiOiIwYTQ3MThlNC1kZGU1LTRkNjYtYjllZS1kMTEzNzBhNjRlOTQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjYzMTM0NTU0LCJleHAiOjE2NjMyMTg1NTQsImlhdCI6MTY2MzEzNDU1NCwianRpIjoiMzI0ZjYyZTctMWNkMC00Yjg4LTk2MGQtMmViNTEyNmQ1NDM2IiwidXNlcm5hbWUiOiJkZW1vXzJ0cCJ9.Uhcjex0h31TiSk7IcsFPHHQEifd6rP0xBOl3PxuIvOuC4Vx29f_Y64QqGjP1j7IUWD9HwyePsAsDzaqe9n6dwsdE5_z1lq3jPhe7LcifyjAYEap2XyHs39X2Xyg044qkHroFYSLEBmXsMZxNbPvOWeA9unOq4xogElBh2DcfHRm9g9MOruIAHX2jWK7dSNCneo0547mJ_PxsYu2ubQfSrNHESL-Uq_BvwrB16wm39mRlM_RwOu4hw6IoR6Q3e8XsrqrMYHTWjOPgON7P-ASjv6iaEaFO9opmFoCiF0c0sUu0M77_xZJoKBScamLQe_Xxte81xpuBly5RA6ukJ1PU9A&userInfo=%7B%22sub%22%3A%2219dff793-def6-4633-b2c1-26c68127fb8e%22,%22email_verified%22%3A%22true%22,%22picture%22%3A%2219dff793-def6-4633-b2c1-26c68127fb8e%2F20220823_143817_5172_5%22,%22custom%3Acompany%22%3A%22NR%22,%22custom%3Acity%22%3A%22HK%20Maecenas%20elementum%20semper%20dignissim.%20Vestibulum%20vehicula%20diam%20in%20ante%20blandit,%20eu%20bibendum%20orci%20varius.%20Curabitur%20tincidunt%20tellus%20at%20congue%20euismod.%20Nunc%20accumsan%20ipsu%22,%22custom%3Aindustry%22%3A%22Life%20service%22,%22custom%3AworkPosition%22%3A%22EG%22,%22custom%3Aphone%22%3A%2218665236523%22,%22nickname%22%3A%22demo_2tp%22,%22email%22%3A%22820209528%40qq.com%22,%22custom%3AIdentityLabel%22%3A%22Other%22,%22username%22%3A%22demo_2tp%22%7D&refreshToken=&expirationTime=&projectId=085d4bd5-b69f-4cb2-3708-08da8afd0919&FolderAction=3&backUrl=projectIndex' },
      ]
    }
  },
  computed: {
    vue2Url() {
      return hostMap("//localhost:7200/") + `#/${this.$route.params.path}`;
    },
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    },
    handleFn(url) {
      this.$router.push({
        path: '/iframe',
        query: {
          url
        }
      })
    }
  },
  watch: {
    $route() {
      wujieVue.bus.$emit("vue2-router-change", `/${this.$route.params.path}`);
    },
  },
  mounted() {
    let tttt = window.parent.testGlobalMsg
    console.log('---------------------:', tttt)
  }
};
</script>

<style  scoped>
.box {
  background: #ccc;
  color: #fff;
  cursor: pointer;
}
</style>
