<template>
  <Scroll
    :height="getHeight"
    :on-reach-top="handleReachTop"
  >
    <Card
      v-for="({title,context,image,authId},index) in list"
      :key="index"
      class="wapper-list"
    >
      <Row>
        <Col
          span="18"
          class="col-list"
        >
        <router-view />
        <h1 class="col-title">{{ title }}</h1>
        <br>
        <p
          class="con-col-list"
          style="min-height:60px"
        >{{ context }}</p>
        <Row>
          <Col
            span="3"
            class="con-col-list"
          >
          {{ authId.substring(0,4) }}
          </Col>
          <Col
            span="3"
            class="con-col-list"
          >
          <Icon
            type="md-heart"
            size="16"
          />
          <span>112</span>
          </Col>
          <Col
            span="3"
            class="con-col-list"
          >
          <Icon
            type="ios-chatbubbles"
            size="16"
          />
          <span>342</span>
          </Col>
        </Row>
          </Col>
        <Col
          span="6"
          class="col-list img-col-list"
        >
        <img
          class="img-col-list"
          :src="`${host}/images?name=auth.jpg`"
          style="height:100%;width:100%;"
          alt=""
        >
          </Col>
      </Row>
    </Card>
  </Scroll>

</template>

<script>
import { host } from '@/utils/config';
import { getBlog } from '@/actions';
import { mapState } from 'vuex';


export default {
  name: 'Name',
  data() {
    return {
      host,
      // list: [
      //   {
      //     title: '往后余生，我想以自己喜欢的方式度过',
      //     content: `毕业一个月了，昨天我才从辅导员那拿回我的毕业证书和学位证书，签字的那一刻，感觉自己四年的青春，就
      //     这样悄无声息地变成了两张纸。 说来搞笑，我读了四'...`,
      //     image: `${host}/images?name=auth.jpg`,
      //     auth: '流浪法师',
      //   },
      // ],

    };
  },
  computed: {
    getHeight() {
      return window.innerHeight - 60;
    },
    ...mapState({
      list: state => state.blog.blogList,

    }),
  },
  mounted() {
    getBlog().then((res) => { console.log(res); });
  },
  methods: {


    handleReachTop() {
      return new Promise((resolve) => {
        setTimeout(() => {
          // const first = this.list[0];
          // for (let i = 1; i < 2; i++) {
          //   this.list.push(first);
          // }
          resolve();
        }, 1000);
      });
    },
  },
};
</script>

<style scoped>
.ivu-card-bordered {
    border-bottom: 1px solid #dcdee2!important
    /* border-color: #e8eaec; */
}
.wapper-list{
 min-height: 112px;
 margin: 10px;
 width: 714px;
 min-width: 714px;
}
.col-title{
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
}
.con-col-list{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;

}
.col-list{
  padding: 1%!important
}

.img-col-list{
  border-radius: 5%;

}
</style>
