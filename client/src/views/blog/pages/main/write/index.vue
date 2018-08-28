<template>
  <div style="height:100%">
    <Card
      class="wapper-list"
    >
      <edit-con
        :value="blog.context"
        @on-change="change"
        @on-change-title="changeTit"
        @save="saveBlog"
      />
      <!-- <Button @click="saveBlog">保存</Button> -->
      <!-- <edit-con
        :value="blog.context"
        @on-change="change"
        @input="change"
      /> -->

    </Card>
  </div>
</template>

<script>
import editCon from '@/components/edit';
import { postBlog } from '@/actions';
import Cookies from 'js-cookie';


export default {
  name: 'Name',
  components: {
    editCon,
  },
  data() {
    return {
      blog: {
        title: '',
        context: '',
      },

    };
  },
  methods: {
    change(context) {
      this.blog.context = context;
    },
    changeTit(msg) {
      this.blog.title = msg;
    },
    saveBlog() {
      /* eslint no-underscore-dangle: 0 */
      const params = {
        ...this.blog,
        authId: JSON.parse(Cookies.get('user'))._id,
      };
      postBlog(params)
        .then(({ data: { status, msg } }) => {
          if (status === 200) {
            this.$Notice.info({
              title: '提示',
              desc: msg,
            });
          }
          this.blog.title = '';
          this.blog.context = '';
          localStorage.editorCache = '';
          localStorage.editorTitleCache = '';
          this.$router.push({ name: 'listblog' });
          this.$store.commit('setBlogValue', { name: '1' });
        });
    },
  },
};
</script>

<style scoped>
.wapper-list{
  padding:3%
}
</style>
