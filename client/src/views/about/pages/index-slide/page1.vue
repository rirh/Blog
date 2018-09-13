<template>
  <div>
    <Card
      :bordered="false"
      class="content-page1"
    >
      <h1>{{ data.title }} </h1>
      <h3> {{ data.dusc }}</h3>
      <h3>{{ data.email }}</h3>
    </Card>

  </div>
</template>
<script>
export default {
  name: 'Name',
  components: {},
  data() {
    return {

    };
  },
  computed: {
    data() {
      const { title = '', dusc = '', email = '' } = this.$store.state.resume.resume;
      return { title, dusc, email };
    },

  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.content-page1 {

  /* width: 30%;
  height: 20%; */
  position: fixed;
  top: 45%;
  left: 50%;
  background-color: rgba(255, 255, 255, 0);
  transform: translate(-50%, -50%);
  padding: 2%
}
.content-page1:hover{
    background-color: rgba(255, 255, 255, 0.6);
}

</style>
