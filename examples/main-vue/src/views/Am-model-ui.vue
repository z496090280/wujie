<!--
 * @Author: lee
 * @Date: 2022-09-14 13:48:47
 * @LastEditTime: 2022-09-19 13:58:09
-->
<template>
  <!--单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由 -->
  <WujieVue width="100%" height="100%" name="vue4" :url="vue2Url" :sync="true"></WujieVue>
</template>

<script>
export default {
  data() {
    return {
      vue2Url:
        "http://localhost:8081/#/Bimam?username=shine183&token=eyJraWQiOiJKTFZyYUlHWGhYZHJUVEpuU3pKSXBmbVwvck9sVXFHN3FOOWU4R0Zub0M3UT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyYTU5ZTRiZC1kYWI5LTRjMDMtYmE5My1hZDc4ODdmMTVkNjkiLCJjb2duaXRvOmdyb3VwcyI6WyJTd2lyZV9PbmVUYWlrb29QbGFjZSIsIkFydXAiLCJTd2lyZV9Ud29UYWlrb29QbGFjZSJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfRTFpTngxbkhvIiwiY2xpZW50X2lkIjoicmRodm5jY3VqdGk2aGEzbHM5cGgzY2E3cyIsIm9yaWdpbl9qdGkiOiJlMzgzMDA3Ni1hOWQ4LTQ3MzktOTFkMi0zZGY3MTFlYWM3NTIiLCJldmVudF9pZCI6ImEyZmVmZDUyLTc2MTctNDkxZi1hYmQxLTlmZjk3OWNkNmVkYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NjM1NTkwMTUsImV4cCI6MTY2MzY0MzAxNSwiaWF0IjoxNjYzNTU5MDE1LCJqdGkiOiJiODU4MmU0ZS0wNGFlLTQxM2YtOTllNS03ZGEwY2EzZDBkMzIiLCJ1c2VybmFtZSI6InNoaW5lMTgzIn0.SWbVBKkLtWXxkk2TYQYZ0MYX_jMfC-g4TClYwKKzucpWzdQf1vzyvo2YXUVhBJ2PnCK_T2hdbuwJUZdano4gdM0mhRkqtUPwFy4RgVL0jkAzXMuMxRHYvCHSAlASb-GEbeghTmbnVrIylZSVb9tBvqv6suoY4V6vbAXfH0WlfwIcd-wWcubwEzfHu-MYPrQQAP_HPnq6UViPHgDnpUkkiHSciPaGFjqsMa_FJPnm-IQumtMyXd-G9Rm2h7uxdnK8RTFHyop-48acaZc_k6XaJg_oCPQ_ADhptQOXdJa-6CHVpdaHZ_7WywW_UWhWL2xYPgBU4hJmlUIbfb-VnktHUA&userInfo=%7B%22custom%3Aindustry%22%3A%22Other%22,%22sub%22%3A%222a59e4bd-dab9-4c03-ba93-ad7887f15d69%22,%22custom%3AworkPosition%22%3A%22scelerisquesodale%20elerisq%22,%22custom%3Aphone%22%3A%22123456789012345678908%22,%22email_verified%22%3A%22true%22,%22nickname%22%3A%22shine183%22,%22email%22%3A%2218370772182%40163.com%22,%22picture%22%3A%222a59e4bd-dab9-4c03-ba93-ad7887f15d69%2F20220715_173305_9986_5%22,%22custom%3Acompany%22%3A%22sceleri%20squeso%20dalessou%22,%22custom%3Acity%22%3A%22%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E6%B5%8B%E8%AF%95%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E8%AF%95%E6%B5%8B%E6%B5%8B%E8%AF%95%E6%B5%8B%E6%B5%8B%E8%AF%95%E6%B5%8B%22,%22username%22%3A%22shine183%22%7D&refreshToken=&expirationTime=&projectId=660ff8f5-f4dd-4af3-1685-08da7ff87890&FolderAction=3&backUrl=%27%27",
    };
  },
  methods: {
    jump(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss" scoped></style>
