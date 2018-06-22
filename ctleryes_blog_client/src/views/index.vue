<style >
@import "rest.css";

@import "index.css";
</style>

<template>
<div>
  <header>
     
    <ul class="nav">
      <li><router-link tag="span" :to="{name:'home'}">首页</router-link> </li>
      <li><router-link tag="span" :to="{name:'arcitle'}" >文章</router-link> </li>
      <li><router-link tag="span" :to="{name:'works'}" >作品</router-link> </li>
      <li><router-link tag="span" :to="{name:'about'}">关于</router-link> </li>
    </ul>
  </header>
<div class="contnet-layout">
  <router-view></router-view>
  

</div>

  
</div>
 
</template>

<script>
import * as THREELib from "three";
import * as TWEEN from "tween";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    init() {},
    animate() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
