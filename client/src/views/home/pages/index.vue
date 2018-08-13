<template>
  <div id="app">
    <Affix class="affix-header">
         <Menu mode="horizontal" theme="light" active-name="1">
        <!-- <Menu mode="horizontal" theme="dark" active-name="1">  -->
        <!-- <Menu mode="horizontal" theme="primary" active-name="1"> -->
        <MenuItem name="1">
          <router-link tag="span" to="/">
          <Icon type="ios-home-outline" />首页</router-link>
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-stats" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type= "ios-people" />
                友情链接
            </template>
            <MenuGroup title="css">
                <MenuItem name="3-1"><a target="_blank" href="http://www.css88.com/">CSS88</a></MenuItem>
            </MenuGroup>
            <MenuGroup title="博客">
                 <MenuItem name="3-2"><a target="_blank" href="https://www.zhangxinxu.com/">张鑫旭博客</a></MenuItem>
                <MenuItem name="3-4"><a target="_blank" href="http://www.ruanyifeng.com">阮一峰博客</a></MenuItem>
                <MenuItem name="3-5"><a target="_blank" href="http://www.w3cplus.com/">大漠博客</a></MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <router-link tag="span" to="/about">
             <Icon type="ios-construct" />
            关于</router-link>
        </MenuItem>
    </Menu>
    </Affix>
    <router-view></router-view>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'index',
  data: function () {
    return {

    }
  },

  mounted () {
    if (Cookies.get('firstNavigation')) {
      this.$router.push({name: 'index'})
    } else {
      this.$router.push({name: 'navigation'})
    }
  }
}
</script>

<style>
@import "./index.less";

.affix-header{
  background-color: rgba(0,0,0,0.5);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
}

</style>
