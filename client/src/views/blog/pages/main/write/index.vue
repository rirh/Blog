<template>
  <div>
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
      console.log(this.blog);
      // delete JSON.parse(Cookies.get('user')).date;
      // console.log(JSON.parse(Cookies.get('user')));
      // const params = {
      //   ...JSON.parse(Cookies.get('user')),
      //   ...this.blog,
      // };
      // postBlog(params)
      //   .then((res) => {
      //     console.log(res);
      //     this.blog.title = '';
      //     this.blog.context = '';
      //     localStorage.editorCache = '';
      //     this.$router.push({ name: 'listblog' });
      //   });
    },
  },
};
</script>

<style scoped>
.wapper-list{
  padding:3%
}
</style>
