<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>

  </div>
</template>
<script>
import Cookies from 'js-cookie';

export default {
  name: 'App',
  mounted() {
    // 打开时判断是手机端页面还是pc端页面
    console.log(`isPhone:${this.isPhone()}`);
    if (this.isPhone()) {
      /* window.location.href="你的手机版地址"; */
      this.$router.push({ name: 'phoneblog' });
    } else if (!Cookies.get('FIRST_OPEN')) {
      this.$router.push({ name: 'navigation' });
    }
  },
  methods: {
    isPhone() {
      let isPhone = true;
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
        )
      ) {
        isPhone = true;
      } else {
        isPhone = false;
      }
      return isPhone;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /*作为rem的基准 */
  font-size: 62.5%;
}
</style>
