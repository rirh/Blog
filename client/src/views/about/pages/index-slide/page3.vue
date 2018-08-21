<template>
  <div class="content-page3">
    <Row style="height:100%">
      <Col
        span="14"
        offset="3"
        style="height:100%"
      >
      <div
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
      years: [],
    };
  },
  mounted() {
    const myChart = echarts.init(this.$refs.main);
    // const year = new Date().getFullYear();
    // let startY = 2015;
    // const time = setInterval(() => {
    //   if (startY >= year) {
    //     clearInterval(time);
    //   } else {
    //     ++startY;
    //     console.log(startY, year, startY >= year);
    //     this.years.push(startY);
    //   }
    // }, 2000);
    // 绘制图表
    myChart.setOption(
      {
        tooltip: { trigger: 'axis' },
        legend: {
          // orient: 'vertical',
          // right: '0',
          // top: '23%',
          data: ['JS', 'ES6', 'NODE', 'CSS3', 'WEBPACK', 'HTML5', 'JAVA'],
        },
        dataZoom: [
          { type: 'slider', start: 0, end: 100 },
          { type: 'inside', start: 0, end: 100 },
        ],
        xAxis: { data: [2015, 2016, 2017, 2018] },
        yAxis: {},
        series: [
          {
            type: 'bar',
            animation: false,
            name: 'JAVA',
            itemStyle: { normal: { opacity: 0.5 } },
            data: [40, 30, 30, 30],
          },
          {
            type: 'bar',
            animation: false,
            name: 'JS',
            itemStyle: { normal: { opacity: 0.5 } },
            data: [30, 44, 62, 92],
          },
          {
            type: 'bar',
            animation: false,
            name: 'CSS3',
            itemStyle: { normal: { opacity: 0.5 } },
            data: [20, 30, 60, 72],
          },
          {
            type: 'bar',
            animation: false,
            name: 'HTML5',
            itemStyle: { normal: { opacity: 0.5 } },
            data: [40, 60, 70, 89],
          },

          {
            type: 'bar',
            animation: false,
            name: 'WEBPACK',
            itemStyle: { normal: { opacity: 0.5 } },
            data: [0, 20, 30, 60],
          },
          {
            type: 'bar',
            animation: false,
            name: 'ES6',
            itemStyle: { normal: { opacity: 0.5 } },
            data: [0, 10, 40, 82],
          },
          {
            type: 'bar',
            animation: false,
            name: 'NODE',
            itemStyle: { normal: { opacity: 0.5 } },
            data: [0, 0, 30, 50],
          },

        ],
      },
      true,
    );
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
