
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
          @on-select="updateActiveName"
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
        style="height:100%"
      >
        <Split v-model="split2">
          <div
            slot="left"
            class="demo-split-pane"
          >
            <router-view style="height:100%" />
          </div>
          <div
            slot="right"
            class="demo-split-pane"
            style="padding:2%"
          >
            <Card style="margin-left:2%">
              <p slot="title">The standard card</p>
              <p>Content of card</p>
              <p>Content of card</p>
              <p>Content of card</p>
            </Card>
          </div>
        </Split>
      </div>
    </Split>
    <BackTop />
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      split1: 0.2,
      split2: 0.72,

    };
  },
  computed: {
    ...mapState({
      name: state => state.blog.name,

    }),
  },
  mounted() {
  },
  methods: {
    updateActiveName(args) {
      this.$store.commit('setBlogValue', { name: `${args}` });
    },
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
