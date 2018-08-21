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
        <!-- <Avatar
          :src="avatar"
          icon="ios-person"
          size="large"
          class="avatar-view"
        /> -->

        </Col>
      </Row>
      <br>
      <!-- <Row>
        <Col>
        <h3>{{ detail }}</h3>
        </Col>
      </Row>
      <br>
      <Row>
        <Col>
        <h3>{{ ps }}</h3>
        </Col>
      </Row> -->


    </h4></Card>

  </div>
</template>
<script>
// import { host } from '@/utils/config';

export default {
  name: 'Name',
  components: {},
  data() {
    return {
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
