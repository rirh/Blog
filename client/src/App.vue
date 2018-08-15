<template>
  <div id="app">
   <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {},
  methods: {
    testHttp () {
      this.$fetch('/').then(response => {
        console.log(response)
      })
    }
  }
}
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
