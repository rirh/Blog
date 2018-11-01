<template>
  <div class="main" ref="main">
    <Row>
      <header-avatar
      :showinner="showbacktop"
        :avatar="user.avatar||''"
        :name="user.name"
        :description="user.description" />
      <content-list
      :data="list"
      class="container" />
    </Row>
    <div v-show="this.showbacktop" class="back-top-show" :style="styles" @click="back">
              <Icon type="ios-arrow-up" />
    </div>
  </div>
</template>

<script>
import headerAvatar from './components/header'
import contentList from './components/content'
import {getBlog} from '@/actions'
import {scrollTop} from '@/utils/helper'

export default {
  name: 'Name',
  components: {
    headerAvatar,
    contentList
  },
  data () {
    return {
      showbacktop: false,
      user: {},
      list: []
    }
  },
  computed: {
    styles () {
      return {
        bottom: `${30}px`,
        right: `${30}px`
      }
    }
  },

  async mounted  () {
    this.$refs.main.addEventListener('scroll', this.handleScroll)
    const {code, data, msg} = await getBlog()
    if (code === 200) {
      const {user} = data[0]
      this.user = user
      this.list = data[0].data
    } else {
      this.$Notice.error({title: '错误', desc: msg})
    }
  },
  methods: {
    handleScroll ({target: {scrollTop}}) {
      this.showbacktop = scrollTop > 200
    },
    back () {
      const sTop = this.$refs.main.scrollTop || this.$refs.main.scrollTop
      scrollTop(this.$refs.main, sTop, 0, this.duration)
    }
  }
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  overflow: scroll;
  position: relative;
}
.container {
  padding: 1rem;
}
.back-top-show{
  position: fixed;
}
</style>
