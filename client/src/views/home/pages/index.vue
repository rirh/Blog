<template>
  <div id="app">
    <Affix class="affix-header">
      <!-- <Menu mode="horizontal" theme="light" active-name="1"> -->
      <!-- <Menu mode="horizontal" theme="light" active-name="1"> -->
      <Menu
        mode="horizontal"
        theme="dark"
        :active-name="name"
        style=" background: rgba(0,0,0,0.6);"
        @on-select="logout"
      >
        <Row>

          <Col
            offset="6"
            span="10"
            style="display:flex;align-items: center;justify-content:center;"
          >
          <MenuItem
            name="1"
            to="/index"
          >
            首页
          </MenuItem>
          <MenuItem
            name="2"
            to="/blog"
          >
            博客
          </MenuItem>
          <MenuItem
            name="3"
            to="/utils"
          >
            工具
          </MenuItem>
          <MenuItem
            name="4"
            to="/about"
          >
            关于我
          </MenuItem>
          <Submenu name="5">
            <template slot="title">
              友情链接
            </template>
            <MenuGroup title="css">
              <MenuItem name="3-1"><a
                target="_blank"
                href="http://www.css88.com/"
              >CSS88</a></MenuItem>
            </MenuGroup>
            <MenuGroup title="博客">
              <MenuItem name="3-2"><a
                target="_blank"
                href="https://www.zhangxinxu.com/"
              >张鑫旭博客</a></MenuItem>
              <MenuItem name="3-4"><a
                target="_blank"
                href="http://www.ruanyifeng.com"
              >阮一峰博客</a></MenuItem>
              <MenuItem name="3-5"><a
                target="_blank"
                href="http://www.w3cplus.com/"
              >大漠博客</a></MenuItem>
            </MenuGroup>
          </Submenu>
            </Col>
          <Col
            offset="4"
            span="4"
            style="float:right"
          >

          <MenuItem
            v-show="!islogin"
            name="6"
            to="/login"
          >
            登陆
          </MenuItem>
          <MenuItem
            v-show="!islogin"
            name="7"
            to="/register"
          >
            注册
          </MenuItem>
          <Submenu
            v-show="islogin"
            name="8"
          >
            <template slot="title">
              {{ userInfo }}
            </template>
            <MenuItem
              name="8-1"
            >退出登陆</MenuItem>
          </Submenu>
            </Col>
        </Row>

        <!-- <Menu mode="horizontal" theme="primary" active-name="1"> -->
      </Menu>
    </Affix>
    <router-view />
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  name: 'Index',
  data() {
    return {
      name: '1',
    };
  },
  computed: {
    islogin() {
      return Cookies.get('user');
    },
    userInfo() {
      if (Cookies.get('user')) {
        return JSON.parse(Cookies.get('user')).username;
      }
      return false;
    },
  },
  mounted() {
    if (Cookies.get('firstNavigation')) {
      this.$router.push({ name: 'index' });
    } else {
      this.$router.push({ name: 'navigation' });
    }
    if (Cookies.get('user')) {
      this.name = '2';
      this.$router.push({ name: 'blog' });
    }
  },
  methods: {
    logout(name) {
      if (name === '8-1') {
        Cookies.remove('user');
        this.$router.push({ name: 'login' });
      }
    },
  },
};
</script>

<style>
@import "./index.less";

</style>
