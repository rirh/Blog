<template>
  <div class="content-page3">
    <Row style="height:100%">
      <Col
        span="14"
        offset="3"
        style="height:100%"
      >
      <div
        id="main"
        ref="main"
        style="height:60%;width:100%"
      />
     </Col>
      <Col
        span="3"
        style="height:100%;"
      >
      <h1 style="margin-top:70%;">技能掌握成长</h1>
      <p>年限图示</p>
     </Col>
    </h2></Row>
    <div style="display:none"> {{ params }}</div>

  </div>
</template>
<script>
const echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
export default {
  name: 'Name',
  components: {},
  data() {
    return {
      myChart: null,
    };
  },
  computed: {
    params() {
      const { echarts: { data = [], year = [], series = [] } } = this.$store.state.resume.resume;
      if (this.myChart) {
        this.myChart.setOption(
          {
            tooltip: { trigger: 'axis' },
            legend: {
              // orient: 'vertical',
              // right: '0',
              // top: '23%',
              data,
            },
            dataZoom: [
              { type: 'slider', start: 0, end: 100 },
              { type: 'inside', start: 0, end: 100 },
            ],
            xAxis: { data: year },
            yAxis: {},
            series,
          },
          true,
        );
      }
      return this.$store.state.resume.resume;
    },
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.main);
  },

  methods: {},
};
</script>

<style scoped>
.content-page3 {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 22%;
  left: 0;

}
</style>
