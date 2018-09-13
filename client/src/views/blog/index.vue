<template>
  <Row>
    <i-col span="24">
      <Row>
        <i-col span="6">
          <br>
          <Button
            style="margin-left:10px"
            type="primary"
            icon="ios-brush"
            to="/writeblog"
          >写文章</Button>
        </i-col>
        <i-col
          span="18"
          style="padding:20px"
        >
          <Card>
            <template>
              <el-carousel
                :interval="4000"
                type="card"
                height="200px"
              >
                <el-carousel-item
                  v-for="(item,index) in bannerlist"
                  :key="index"
                  style="border-radius: 10px;"
                >
                  <h3>
                    <img
                      :src="item.url"
                      style="height:100%;width:100%"
                      alt=""
                    >
                  </h3>
                </el-carousel-item>
              </el-carousel>
            </template>
            <Scroll
              :height="getHeight"
              :on-reach-top="handleReachTop"
            >
              <Card
                v-for="({title,context,image,authId},index) in list"
                :key="index"
                class="wapper-list"
                dis-hover
              >
                <Row
                  type="flex"
                  justify="center"
                >
                  <i-col
                    span="18"
                    class="col-list"
                  >
                    <h1 class="col-title">{{ title }}</h1>
                    <br>
                    <p
                      class="con-col-list"
                      style="min-height:60px"
                    >{{ context }}</p>
                    <Row>
                      <i-col
                        span="3"
                        class="con-col-list"
                      >
                        {{ authId.substring(0,4) }}
                      </i-col>
                      <i-col
                        span="3"
                        class="con-col-list"
                      >
                        <Icon
                          type="md-heart"
                          size="16"
                        />
                        <span>112</span>
                      </i-col>
                      <i-col
                        span="3"
                        class="con-col-list"
                      >
                        <Icon
                          type="ios-chatbubbles"
                          size="16"
                        />
                        <span>342</span>
                      </i-col>
                    </Row>
                  </i-col>
                  <i-col
                    span="6"
                    class="col-list img-col-list"
                  >
                    <img
                      class="img-col-list"
                      :src="`${host}/images?name=auth.jpg`"
                      style="height:100%;width:100%;"
                      alt=""
                    >
                  </i-col>
                </Row>
              </Card>
            </Scroll>
          </Card>
        </i-col>
      </Row>
    </i-col>
  </Row>
</template>

<script>
import { host } from '@/utils/config';
import { getBlog } from '@/actions';
import { mapState } from 'vuex';

export default {
  name: 'Name',
  data() {
    return {
      bannerlist: [
        {
          url: 'http://wp.ethan.pub/wp-content/uploads/2018/08/3282647757.jpg',
        },
        {
          url:
            'http://wp.ethan.pub/wp-content/uploads/2018/08/579a7b26175f26bdcbbfe131abacce87.jpg',
        },
        {
          url:
            'http://wp.ethan.pub/wp-content/uploads/2018/08/1745989280636810324.jpg',
        },
        {
          url:
            'http://img.bbs.wisenjoy.com/forum/201507/06/193625qzyiuilxr6hlzrx6.jpg',
        },
      ],
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
    getBlog().then((res) => {
      console.log(res);
    });
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
  border-bottom: 1px solid #dcdee2 !important;
  /* border-color: #e8eaec; */
}

.wapper-list {
  min-height: 112px;
  margin: 0 auto;
  width: 714px;
  min-width: 714px;
}

.col-title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}

.con-col-list {
  margin: 0 auto;
  font-size: 13px;
  line-height: 24px;
  color: #999;
}

.col-list {
  padding: 1% !important;
}

.img-col-list {
  border-radius: 5%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
