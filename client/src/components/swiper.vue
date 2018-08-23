<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        v-for="str in listImg"
        :key="str"
        class="swiper-slide"
        :style="{ backgroundImage: 'url(' + str.url + ')' }"
      />
    </div>
    <div class="swiper-pagination swiper-pagination-white" />
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  props: ['listImg'],
  mounted() {
    const swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      speed: 600,
      autoplay: 4000,
      onTouchEnd() {
        swiper.startAutoplay();
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 10rem;
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

.swiper-container .swiper-pagination-bullet {
  width: 0.833rem;
  height: 0.833rem;
  display: inline-block;
  background: #7c5e53;
}
</style>
