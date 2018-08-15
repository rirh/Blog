
<template>
<div class="swiper-container-layout">
      <Icon class="user-layout" style="color:#999" type="md-arrow-round-back" size='46' @click="goBack" />

   <!-- <Avatar class="user-layout" icon="ios-person" size="large"   src="https://i.loli.net/2017/08/21/599a521472424.jpg"/> -->

<div class="swiper-container">

  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }">
      <component  :is="pages.component"></component>
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
      listImg: [
        {url: 'https://raw.githubusercontent.com/Ctleryes/Blog/dev/client/src/assets/img/header-background.jpg'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534224056715&di=b08756b62f56cf623198510e37bcd139&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F07%2F423129bac96daaa0cb7575c4a701158a.jpg'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534224056716&di=7382d3995e9536e991fc35ae3e7cbcb2&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150413%2Ftooopen_sy_118262313836.jpg'},
        {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534224056713&di=f0ff1b0a142e3fc56442f8e7bc1e2b78&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F136%2Fd%2F242.jpg'}
      ],
      pages: {
        component: index
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
    }
  }
}
</script>

<style scoped>
.swiper-container-layout{
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
.swiper-container .swiper-pagination{
  margin-right: 20px
}
.swiper-container .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  display: inline-block;
  background: #ff8344;
}
.user-layout{
  position: absolute;
  top:50px;
  left: 50px;
  z-index: 2;
}
.user-layout:hover{
  color: #fff!important
}

</style>
