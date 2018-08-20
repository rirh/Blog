<template>
  <div>
    <Card
      :bordered="false"
      dis-hover
      class="content-page2"
    >
      <Row>
        <Col
          span="24"
          style="text-align:center"
        >
        <Avatar
          :src="avatar"
          icon="ios-person"
          size="large"
          class="avatar-view"
        />

        </Col>
      </Row>
      <br>
      <Row>
        <Col>
        <h3>{{ detail }}</h3>
        </Col>
      </Row>
      <br>
      <Row>
        <Col>
        <h3>{{ ps }}</h3>
        </Col>
      </Row>


    </h4></Card>

  </div>
</template>
<script>
import { host } from '@/utils/config';

export default {
  name: 'Name',
  components: {},
  data() {
    return {
      avatar: `${host}/image?name=icon`,
      detail: `您好，我叫xxx，22岁，
      坐标北京。 我并不是计算机专业,但对前端很感兴趣，所以自学前端，今后的职业规划是朝着全栈发展，目前在学Thinkphp、AnjularJs。 在实习的五个月来,本人在公司主要负责整个页面的前端开发，配合后台人员实现产品前端界面效果与功能。写过响应式页面，移动端页面，pc端页面。小的来说，商城，企业网站，视频，音频，评论，地图等都有涉及。 在此很感谢苏州亿柏嘉软件有限公司 对我的培养，让我学到了很多东西。目前就职于上海军果信息技术有限公司。不浮躁，喜欢前端，执行力，
      学习能力都棒棒哒！目前，能做点粗糙设计（比如本网站）。`,
      ps: '不浮躁，喜欢前端，执行力，学习能力都棒棒哒！目前，能做点粗糙设计（比如本网站）。',

    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.content-page2 {

  /* width: 30%;
  height: 20%; */
  position: fixed;
  top: 45%;
  left: 50%;
  background-color: rgba(255, 255, 255, 0);
  transform: translate(-50%, -50%);
  text-align: center

}
.content-page1:hover{
    background-color: rgba(255, 255, 255, 0.6);
}
.avatar-view{
  height: 120px;
  width: 120px;
  border-radius: 50%
}


</style>
