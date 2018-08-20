<template>
  <div>
    <crystal-ball @gettingStart="start" />
  </div>
</template>

<script>
import Cookies from 'js-cookie';

import crystalBall from '../components/CrystalBall';

export default {
  name: 'Navigation',
  components: {
    crystalBall,
  },
  data() {
    return {
    };
  },

  mounted() {
    if (Cookies.get('firstNavigation')) {
      this.$router.push({ name: 'index' });
    }
  },
  methods: {
    start() {
      Cookies.set('firstNavigation', true);
      this.$router.push({ name: 'index' });
    },
  },
};
</script>

<style>
.affix-header{
  background-color: rgba(0,0,0,0.5);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
}

</style>
