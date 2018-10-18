<style scoped >
.wapper-content {
  height: 100%;
  width: 100%;
}

video {
  position: fixed;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  /*加滤镜*/
  /*-webkit-filter: grayscale(100%);*/
  /*filter:grayscale(100%);*/
  z-index: -11;
}

source {
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}

.tips {
  height: 100%;
  width: 100%;
  position: relative;
}

.tips .title {
  position: absolute;
  top: 12rem;
  left: 8rem;
  cursor: pointer
}

.tips .title h2 {
  opacity: 1;
  color:var(--font);
  font-size: 9rem;
  font-weight: 60rem;
}

.tips .title p {
  opacity: 1;
  color:var(--font);
  font-size: 2.1rem;
  font-weight: 60rem;
}
.tips strong {
  position: absolute;
  bottom: 20%;
  right: 3%;
  opacity: 1;
  color:var(--font);
  font-size: 9rem;
  font-weight: bold;
   cursor: pointer
}
.gov {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 8rem;
  width: 100%;
  text-align: center;
  cursor: pointer
}
.gov a,
span {
  color:var(--font);
  font-size: 1.2rem;
}
</style>

<template>
  <div class="wapper-content">
    <div class="tips">
      <div class="title">
        <h2>{{ data.title }}</h2>
        <p>{{ data.detail }}</p>
      </div>
      <strong>{{ data.slogan }}</strong>

      <div class="gov">
        <span> Copyright © 2018温城说个人网站 </span>
        <a
          href="http://www.miitbeian.gov.cn/"
          target="_blank"
        >京ICP备18048665号</a>
      </div>
    </div>
    <video
      autoplay="autoplay"
      loop="loop"
    >
      <source
        :src="`${baseUrl}assets/video/index.mp4`"
        type="video/mp4"
      >
    </video>
  </div>
</template>

<script>
import { getHome } from '@/actions';
import { assign } from 'lodash';
// import { host } from '@/utils/config';

export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      videohost: '@/views/assets/video/index.mp4',
      data: {
        title: '',
        detail: '',
        slogan: '',
      },
    };
  },
  async mounted() {
    const { data } = await getHome();
    assign(this.data, data);
  },
  methods: {},
};
</script>
