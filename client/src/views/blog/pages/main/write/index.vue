<template>
  <div>
    <Card

      class="wapper-list"
    >
      <div
        style="margin-bottom:10px"
      >
        <Input
          v-model="blog.title"
          placeholder="无标题文本"
          style="width: 80%;margin-right:20px"
        ></Input>
        <Button @click="saveBlog">保存</Button>

      </div>

      <br>
      <edit-con
        :value="blog.context"
        @on-change="change"
      />
      <!-- <edit-con
        :value="blog.context"
        @on-change="change"
        @input="change"
      /> -->
      <br>
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
    saveBlog() {
      // delete JSON.parse(Cookies.get('user')).date;
      // console.log(JSON.parse(Cookies.get('user')));
      const params = {
        ...JSON.parse(Cookies.get('user')),
        ...this.blog,
      };
      postBlog(params)
        .then((res) => {
          console.log(res);
          this.blog.title = '';
          this.blog.context = '';
          localStorage.editorCache = '';
          this.$router.push({ name: 'listblog' });
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
