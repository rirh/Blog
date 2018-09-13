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
  top: 20%;
  left: 8%;
}

.tips .title h2 {
  opacity: 1;
  color: #fff;
  font-size: 90px;
  font-weight: 600px;
}

.tips .title p {
  opacity: 1;
  color: #fff;
  font-size: 21px;
  font-weight: 600px;
}
.tips strong {
  position: absolute;
  bottom: 20%;
  right: 3%;
  opacity: 1;
  color: #fff;
  font-size: 90px;
  font-weight:bold;

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
      // videohost: `${host}/video?name=index`,
      videohost: '@/views/assets/video/index.mp4',
      data: {
        title: '',
        detail: '',
        slogan: '',
      },
    };
  },
  mounted() {
    getHome().then(({ data }) => {
      assign(this.data, data);
    });
  },
  methods: {},
};
</script>
