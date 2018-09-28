<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>

  </div>
</template>
<script>

export default {
  name: 'App',
  mounted() {
    // 打开时判断是手机端页面还是pc端页面
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      /* window.location.href="你的手机版地址"; */
      this.$router.push({ name: 'navigation' });
    } else {
      /* window.location.href="你的电脑版地址";    */
      this.$router.push({ name: 'navigation' });
    }
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
}

.router-layout {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
