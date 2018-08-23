
<template>
  <div class="split">
    <Split v-model="split1">
      <div
        slot="left"
        class="split-pane"
      >
        <Menu
          theme="light"
          :active-name="name"
          style="width:100%"
        >
          <MenuGroup title="内容管理">
            <MenuItem
              name="1"
              to="/listblog"
            >
              <Icon type="md-document" />
              博客列表
            </MenuItem>
            <MenuItem
              name="2"
              to="/writeblog"
            >
              <Icon type="md-create" />
              写博客
            </MenuItem>
          </MenuGroup>
        </Menu>
      </div>
      <div
        slot="right"
      >
        <router-view style="height:100%" />
      </div>
    </Split>
    <BackTop />
  </div>
</template>
<script>

export default {
  data() {
    return {
      split1: 0.2,
      name: 1,
    };
  },
  computed: {

  },
  mounted() {
  },
};
</script>
<style>
    .split{
        height: 100%;
        border: 1px solid #666;
        background: #f4f4f4
    }
    .split-pane{
        /* padding: 10px; */
        height: 100%;
        overflow:scroll;
    }
</style>
