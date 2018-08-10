<template>
  <div id="app">
   <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    this.$fetch('/')
      .then((response) => {
        console.log(response)
      })
  }

}
</script>

<style>
*{
  margin: 0;
  padding:0;
}

</style>
