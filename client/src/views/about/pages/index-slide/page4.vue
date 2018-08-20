<template>
  <div>

    <Timeline class="content-page4">
      <TimelineItem
        v-for="(item,index) in timelist"
        :key="index"
      >
        <h2 class="time">{{ item.title }}</h2>
        <p class="content">{{ item.detail }}</p>
      </TimelineItem>
    </Timeline>


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
          title: 'now',
          detail: '北京中期教育科技有限公司',
        }, {
          title: '2018',
          detail: '北京中期教育科技有限公司',
        }, {
          title: '2017',
          detail: '深圳中钰科技有限公司',
        }, {
          title: '2016',
          detail: '北京中期教育科技有限公司',
        }, {
          title: '2015',
          detail: '江西迪创科技有限公司',
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
