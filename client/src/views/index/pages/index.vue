<template>
<div>
    <Card >
    <Carousel autoplay :height='getWidth' width loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
    </Carousel>
    </Card>
</div>

</template>

<script>
// import Swiper from 'swiper'

export default {
  name: 'name',
  data: function () {
    return {}
  },
  mounted () {
    // var mySwiper = new Swiper('.swiper-container', { /* ... */ })
  },
  computed: {
    getWidth () {
      return window.innerWidth * 0.2
    }
  },
  methods: {}
}
</script>

<style scoped>
.demo-carousel{
    background: #333;
    color: #fff;
    width: 60%;
    margin: 0 auto;
    height: 100%;
}
</style>
