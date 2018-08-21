<template>
  <div style="margin-top:10%">
    <Row>
      <Col
        v-for="(item,index) in prolist"
        :key="index"
        :span="24/prolist.length"
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
      prolist: [{
        icon: `${host}/images?name=sinogo4Student.png`,
        name: '名校云学生端',
      },
      {
        icon: `${host}/images?name=sinogo4Teacher.png`,
        name: '名校云学生端',
      }, {
        icon: `${host}/images?name=sinogoMatch.png`,
        name: '围棋赛事',
      }, {
        icon: `${host}/images?name=sinogoMatch.png`,
        name: '名校云家长端',
      }],
    };
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
