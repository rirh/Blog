<template>
  <div class="content-page3">


    <div
      ref="main"
      style="height:60%;width:60%"
    />
    <div>
      111
    </div>
  </div>
</template>
<script>
const echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
export default {
  name: 'Name',
  components: {},
  data() {
    return {};
  },
  mounted() {
    console.log(echarts);
    const myChart = echarts.init(this.$refs.main);
    const option = {
      angleAxis: {
      },
      radiusAxis: {
        type: 'category',
        data: ['JAVA', 'JS', 'CSS3', 'HTML5'],
        z: 10,
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: [2015, 2016, 2017, 2018],
        coordinateSystem: 'polar',
        name: 'JAVA',
        stack: 'a',
      }, {
        type: 'bar',
        data: [2015, 2016, 2017, 2018],
        coordinateSystem: 'polar',
        name: 'JS',
        stack: 'a',
      }, {
        type: 'bar',
        data: [2015, 2016, 2017, 2018],
        coordinateSystem: 'polar',
        name: 'CSS3',
        stack: 'a',
      }, {
        type: 'bar',
        data: [2015, 2016, 2017, 2018],
        coordinateSystem: 'polar',
        name: 'HTML5',
        stack: 'a',
      }],
      legend: {
        show: true,
        data: ['JAVASCRIPT', 'CSS3', 'HTML5', 'JAVA'],
      },
    };
    // 绘制图表
    if (option && typeof option === 'object') {
      myChart.setOption(option, true);
    }
  },
  methods: {},
};
</script>

<style scoped>
.content-page3{
    position:absolute;
    height: 100%;
    width: 100%;
    top:10%;
    left: 0;
}
</style>
