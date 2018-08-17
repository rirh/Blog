
<template>
<div class="swiper-container-layout">
  <Icon class="user-layout" style="color:#999" type="md-arrow-round-back" size='46' @click="goBack" />
  <Icon class="menu-layout" :type="menu?'md-menu':'md-close'" size='46' @click="openMenu" />
  <div class="audio-layout" @click="switchAudio">
    <img :class="{'play':true,'pause':!play}" src="../../../assets/img/Nevada.jpeg" alt="">
    <Icon class="icon-layout" :type="play?'ios-play':'ios-pause'" size='70'  />
    <audio id="nevada_audio" autoplay="autoplay">
      <source src="https://m10.music.126.net/20180817172520/5b9b859534b68bb364e00daead288c9c/ymusic/d336/66b8/93f6/53a73538fb4a283e3694ca5e48e4f9c8.mp3" type="audio/mpeg" />
    </audio>
  </div>
  <!-- <Avatar class="user-layout" icon="ios-person" size="large"   src="https://i.loli.net/2017/08/21/599a521472424.jpg"/> -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }">
        <component :is="pages.component"></component>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import index from '@/views/about/pages/index-slide'
export default {
  data () {
    return {
      menu: true,
      play: true,
      listImg: [{
        url: ''
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534224056715&di=b08756b62f56cf623198510e37bcd139&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F07%2F423129bac96daaa0cb7575c4a701158a.jpg'
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534224056716&di=7382d3995e9536e991fc35ae3e7cbcb2&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150413%2Ftooopen_sy_118262313836.jpg'
      },
      {
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534224056713&di=f0ff1b0a142e3fc56442f8e7bc1e2b78&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F136%2Fd%2F242.jpg'
      }
      ],
      pages: {
        component: index
      },
      styleObject () {
        return {
          transform: `translate(${this.play ? '-70%' : '56%'}, '-56%')`
        }
      }
    }
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      // parallax: true,
      autoplay: false, // 可选选项，自动滑动
      roundLengths: true,
      effect: 'cube',
      zoom: true,
      mousewheel: {
        releaseOnEdges: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
    console.log(swiper)
  },
  methods: {

    goBack () {
      this.$router.push({
        name: 'index'
      })
    },
    openMenu () {
      this.menu = !this.menu
    },
    switchAudio () {
      var audio = document.querySelector('#nevada_audio')
      if (this.play) {
        audio.pause()
      } else {
        audio.play()
      }
      this.play = !this.play
    }
  }
}
</script>

<style scoped>
.swiper-container-layout {
  width: 100%;
  height: 100%;
  position: relative;
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
   opacity: .8;
}

.audio-layout img {
  border-radius: 50%;
  height: 80%;
  width: 80%;
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
  opacity: .6;
  position: absolute;
  top: 17%;
  left: 14%;
  color: #fff;

}

.audio-layout:hover .icon-layout {
  display: block
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
/* Safari 与 Chrome */

{
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
