<template>
  <div style="margin-top:8%">
    <Row>
      <Col
        v-for="(item,index) in prolist"
        :key="index"
        :span="6"
        style="text-align:center"
      >
      <a
        :href="item.adder"
        target="_blank"
      >
        <img
          :src="item.icon"
          alt=""
        >
      </a>
      <p style="">
        {{ item.name }}
      </p>
      </Col>
    </Row>
    <br>
    <br>
    <Row>
      <Col
        v-for="(item,index) in prolist2"
        :key="index"
        :span="6"
        style="text-align:center"
      >
      <div>
        <img
          :src="item.icon"
          alt=""
        >
      </div>

      <p style="">
        {{ item.name }}
      </p>
      </Col>
    </Row>
  </div>
</template>
<script>
import { host } from '@/utils/config';

export default {
  name: 'Name',
  components: {},
  data() {
    return {

      prolist2: [{
        icon: `${host}/images?name=sinogoMatch.png`,
        name: '围棋赛事',
      }, {
        icon: `${host}/images?name=sinogoMatch.png`,
        name: '围棋赛事',
      }],
    };
  },
  computed: {
    prolist() {
      const { works } = this.$store.state.resume.resume;
      return works;
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.content-page5 {

  /* width: 30%;
  height: 20%; */
margin-top: 10%;
height: 100%;
width: 100%;
}
.content-page1:hover{
    background-color: rgba(255, 255, 255, 0.6);
}

</style>
