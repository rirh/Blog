<template>
<vue-swiper indicators @slide-change="slideChange">
    <vue-swiper-slide>Page 1</vue-swiper-slide>
    <vue-swiper-slide>Page 2</vue-swiper-slide>
    <vue-swiper-slide>Page 3</vue-swiper-slide>
</vue-swiper>

</template>

<script>
import VueSwiper from 'vue-light-swiper'
export default {

  name: 'name',
  components: {
    vueSwiper: VueSwiper.vueSwiper,
    vueSwiperSlide: VueSwiper.vueSwiperSlide
  },

  data () {
    return {}
  },
  mounted () {
    console.log(VueSwiper)
  },

  methods: {
    slideChange (index, oldIndex) {
      console.log('showIndexChange:', index, oldIndex)
    },
    goBack () {
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>

<style scoped>
@import "./index.less";
</style>
