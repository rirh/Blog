<template>
<Scroll :height='height' :on-reach-top="handleReachTop">
  <div id="about-layout">
    <Row>
      <Col span="2" offset="1">
      <Icon style="margin-top:40px;color:#666" type="md-arrow-round-back" size='36' @click="goBack" />
      </Col>
    </Row>
    <h1 class="text-detail">我是详情</h1>
  </div>
</Scroll>
</template>

<script>
export default {
  name: 'name',
  data: function () {
    return {}
  },
  computed: {
    height () {
      return window.innerHeight
    }
  },
  methods: {
    handleReachTop () {
      return new Promise(resolve => {
        setTimeout(() => {
          this.$router.push({
            name: 'about'
          })
          resolve()
        }, 2000)
      })
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
