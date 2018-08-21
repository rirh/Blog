<template>
  <div>
    <Row style="height:100%">
      <Col
        offset="3"
        span="3"
        style="height:100%;text-align:right"
      >
      <h1 style="margin-top:70%;">我的经历</h1>
      <p>点滴成长</p>
     </Col>
      <Col
        span="14"
        style="height:100%"
      >
      <Timeline class="content-page4">
        <TimelineItem
          v-for="(item,index) in timelist"
          :key="index"
        >
          <h2 class="time">{{ item.title }}</h2>
          <h3 class="content">{{ item.detail }}</h3>
          <p>{{ item.describe }}</p>
        </TimelineItem>
      </Timeline>
     </Col>

    </Row>


  </div>
</template>
<script>

export default {
  name: 'Name',
  components: {},
  data() {
    return {
      timelist: [
        {
          title: '2018',
          detail: '北京中期教育科技有限公司',
          describe: '负责PC端移动端页面制作。PSD切图后构建页面框架 利用HTML、JS、CSS3书写前端功能，让页面更充实丰富。 2017年07月初从该公司离职。',

        }, {
          title: '2017',
          detail: '深圳中钰科技有限公司',
          describe: '负责PC端移动端页面制作。PSD切图后构建页面框架 利用HTML、JS、CSS3书写前端功能，让页面更充实丰富。 2017年07月初从该公司离职。',

        }, {
          title: '2015-2016',
          detail: '江西迪创科技有限公司',
          describe: '负责PC端移动端页面制作。PSD切图后构建页面框架 利用HTML、JS、CSS3书写前端功能，让页面更充实丰富。 2017年07月初从该公司离职。',


        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.content-page4 {
width: 40%;


 margin: 10% 40%

}

.avatar-view{
  height: 120px;
  width: 120px;
  border-radius: 50%
}


</style>
