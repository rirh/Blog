<template>
  <div id="app">
    <Affix>

      <Menu
        mode="horizontal"
        theme="dark"
        :active-name="name"
        :style="setStyle"
        @on-select="handleMenu"
      >
        <Row>
          <i-col
            :xs="20"
            :sm="16"
            :md="14"
            :lg="12"
          >
            <Row
              type="flex"
              justify="start"
              align="middle"
            >
              <MenuItem
                name="1"
                to="/index"
              > 首页
              </MenuItem>
              <MenuItem
                name="2"
                to="/blog"
              > 博客
              </MenuItem>
              <MenuItem
                name="3"
                to="/utils"
              > 工具
              </MenuItem>
              <MenuItem
                name="4"
                to="/about"
              > 关于我
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
            </Row>
          </i-col>
          <i-col
            :xs="4"
            :sm="8"
            :md="10"
            :lg="12"
          >
            <Row
              type="flex"
              justify="end"
              align="middle"
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
            </Row>
          </i-col>
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
    setStyle() {
      return {
        background: 'var(--main)!important',
      };
    },
    userInfo() {
      if (Cookies.get('user')) {
        return JSON.parse(Cookies.get('user')).username;
      }
      return false;
    },
  },
  mounted() {
    if (Cookies.get('FIRST_OPEN')) {
      this.$router.push({
        name: 'index',
      });
    } else {
      this.$router.push({
        name: 'navigation',
      });
    }
    if (Cookies.get('user')) {
      this.name = '2';
      this.$router.push({
        name: 'blog',
      });
    }
  },
  methods: {
    handleMenu(name) {
      if (name === '8-1') {
        this.logout();
      }
    },
    logout() {
      Cookies.remove('user');
      this.$router.push({
        name: 'login',
      });
    },
  },
};
</script>

<style>

.ivu-menu .ivu-menu-item{
  font-size: 1.4rem!important
}
</style>
