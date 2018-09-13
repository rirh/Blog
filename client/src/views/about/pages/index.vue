
<template>
  <div class="swiper-container-layout">
    <Icon
      class="user-layout"
      style="color:#999"
      type="md-arrow-round-back"
      size="46"
      @click="goBack"
    />
    <!-- <Icon
      class="menu-layout"
      :type="menu?'md-menu':'md-close'"
      size="46"
      @click="openMenu"
    /> -->
    <div
      class="audio-layout"
      @click="switchAudio"
    >
      <img
        :class="{'play':true,'pause':!play}"
        :src="`${baseUrl}assets/images/Nevada.jpeg`"
        alt=""
      >
      <Icon
        class="icon-layout"
        :type="play?'ios-play':'ios-pause'"
        size="40"
      />
      <audio
        id="nevada_audio"
        ref="nevadaAudio"
        autoplay="autoplay"
      >
        <source
          :src="`${baseUrl}assets/audio/Nevada.mp3`"
          type="audio/mpeg"
        >
      </audio>
    </div>
    <!-- <Avatar class="user-layout" icon="ios-person" size="large"   src="https://i.loli.net/2017/08/21/599a521472424.jpg"/> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="(swiper,index) in swiperlist"
          :key="index"
          :style="{ backgroundImage:'url(' + swiper.url + ')' }"
          class="swiper-slide"
        >
          <component :is="swiper.component" />
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white" />
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { getResume } from '@/actions';
import 'swiper/dist/css/swiper.min.css';
import page1 from '@/views/about/pages/index-slide/page1';
import page2 from '@/views/about/pages/index-slide/page2';
import page3 from '@/views/about/pages/index-slide/page3';
import page4 from '@/views/about/pages/index-slide/page4';
import page5 from '@/views/about/pages/index-slide/page5';
import page6 from '@/views/about/pages/index-slide/page6';
// import index from '@/views/about/pages/index-slide/page1';
// import index from '@/views/about/pages/index-slide/page1';
// import index from '@/views/about/pages/index-slide/page1';
import { host } from '@/utils/config';

export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      menu: true,
      play: true,
      audio: {
        el: document.querySelector('#nevada_audio'),
        host: `${host}/audio?name=Nevada`,
      },
      swiperlist: [
        { url: '', component: page1 },
        { url: '', component: page2 },
        { url: '', component: page3 },
        { url: '', component: page4 },
        { url: '', component: page5 },
        { url: '', component: page6 },

      ],
    };
  },
  async mounted() {
    const data = await getResume();
    console.log(data);
    /* eslint no-new :0 */
    await new Swiper('.swiper-container', {
      direction: 'vertical',
      // parallax: true,
      autoplay: false, // 可选选项，自动滑动
      roundLengths: true,
      // effect: 'cube',
      effect: 'coverflow',
      zoom: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
    this.$refs.nevadaAudio.addEventListener(
      'ended',
      () => {
        this.play = !this.play;
      },
      false,
    );
  },

  methods: {
    goBack() {
      this.$router.push({
        name: 'index',
      });
    },
    openMenu() {
      this.menu = !this.menu;
    },
    switchAudio() {
      if (this.play) {
        this.$refs.nevadaAudio.pause();
      } else {
        this.$refs.nevadaAudio.play();
      }
      this.play = !this.play;
    },
  },
};
</script>

<style scoped>
.swiper-container-layout {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f4f4f4;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-container .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
}

.swiper-container .swiper-pagination {
  margin-right: 20px;
}

.swiper-container .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  display: inline-block;
  background: #ff8344;
}

.user-layout {
  position: absolute;
  top: 4%;
  left: 3%;
  z-index: 2;
}

.menu-layout {
  position: absolute;
  top: 4%;
  right: 3%;
  z-index: 2;
}

.user-layout:hover {
  color: #333 !important;
}

.audio-layout {
  position: absolute;
  top: 70%;
  right: 2%;
  z-index: 2;
  opacity: 0.8;
}

.audio-layout img {
  border-radius: 50%;
  height: 80%;
  width: 80%;
  margin: 10%;
}

.play {
  -webkit-animation: rotate 10s linear 10s 5 alternate;
  animation: rotate 10s linear infinite;
}

.pause {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.icon-layout {
  display: none;
  opacity: 0.6;
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
}

.audio-layout:hover .icon-layout {
  display: block;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate
/* Safari 与 Chrome */ {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
