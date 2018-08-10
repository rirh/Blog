<template>
  <div id="app">
    <Affix class="affix-header">
        <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1">
        <Icon type="ios-home-outline" />
           首页
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
    </Affix>

  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'index',
  data: function () {
    return {
      tabs: [
        {name: '首页', lable: '首页'}
      ]
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

.affix-header{

  background-color: rgba(0,0,0,0.5);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
}

</style>
