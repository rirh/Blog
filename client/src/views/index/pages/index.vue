<style scoped>
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
.tips label{
     position: absolute;
    bottom: 20%;
    right: 15%;
     opacity: 1;
    color: #fff;
    font-size: 40px;
    font-weight: 600px;
}
</style>

<template>
<div class="wapper-content">
    <div class="tips">
        <div class="title">
            <h2>{{data.title}}</h2>
            <p>{{data.detail}}</p>
        </div>
        <label >{{data.slogan}}</label>
    </div>
    <video autoplay="autoplay" loop="loop">
    <source src="../../../assets/video/index.mp4" type="video/mp4">
</video>
</div>
</template>

<script>
import {getHome} from '@/actions'
import {assign} from 'lodash'
export default {
  data () {
    return {
      data: {
        title: '',
        detail: '',
        slogan: ''
      }
    }
  },
  mounted () {
    getHome()
      .then(({data}) => {
        assign(this.data, data)
      })
  },
  methods: {

  }
}
</script>
