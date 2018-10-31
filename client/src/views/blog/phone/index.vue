<template>
  <div class="main">
    <Row>
      <header-avatar />
      <content-list class="container" />
    </Row>
  </div>
</template>

<script>
import headerAvatar from './components/header';
import contentList from './components/content';

export default {
  name: 'Name',
  components: {
    headerAvatar,
    contentList,
  },
  data() {
    return {

    };
  },
  methods: {},
};
</script>

<style scoped>
.main{
    height: 100%;
    width: 100%;
    overflow: scroll;
}
.container{
    padding: 1rem;
}
</style>
