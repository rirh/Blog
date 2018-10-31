<template>
  <div class="main">
    <Row>
      <header-avatar
        :avatar="user.avatar||''"
        :name="user.name"
        :description="user.description" />
      <content-list
      :data="list"
      class="container" />
    </Row>
  </div>
</template>

<script>
import headerAvatar from './components/header'
import contentList from './components/content'
import { getBlog } from '@/actions'

export default {
  name: 'Name',
  components: {
    headerAvatar,
    contentList
  },
  data () {
    return {
      user: {},
      list: []
    }
  },
  async created () {
    const { code, data, msg } = await getBlog()
    if (code === 200) {
      const {user} = data[0]
      this.user = user
      this.list = data[0].data
    } else {
      this.$Notice.error({ title: '错误', desc: msg })
    }
    console.log(this.data)
  },
  methods: {}
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
.container {
  padding: 1rem;
}
</style>
