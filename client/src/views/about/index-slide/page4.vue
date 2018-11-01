<template>
  <div>
    <Row style="height:100%">
      <Col
        offset="3"
        span="3"
        style="height:100%;text-align:right"
      >
      <h1 style="margin-top:90%;">我的经历</h1>
      <h3>点滴成长</h3>
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

    };
  },
  computed: {

    timelist() {
      const { experience } = this.$store.state.resume.resume;
      return experience;
    },
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
