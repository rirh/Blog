<template>
  <div class="header">
    <Row class="header-inner">
      <i-col span="4">
        <Icon
          type="ios-menu"
          size="24"
        />
      </i-col>
      <i-col
        v-if="showinner"
        span="16"
        class="header-title"
      >
        <Avatar :src="avatar" />
        <span class="name">{{ name }}</span>
      </i-col>
      <i-col
        :span="showinner?4:20"
        style="text-align:right"
      >
        <Icon
          type="ios-search"
          size="24"
        />
      </i-col>
    </Row>

    <Row class="container">
      <i-col span="24">
        <img
          class="avatar"
          :src="avatar"
          alt=""
        >
        <p class="name">{{ name }}</p>
        <p class="description">{{ description }}</p>
      </i-col>

    </Row>
  </div>
</template>

<script>
export default {
  name: 'Name',
  props: {
    showinner: {
      type: Boolean,
      default: () => false,
    },
    avatar: {
      type: String,
      default: () => 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    },
    name: {
      type: String,
      default: () => 'charles的小世界',
    },
    description: {
      type: String,
      default: () => 'MLGB(My Life Getting Better)',
    },
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 20rem;
  position: relative;
}
.header-title{
  text-align: center;
  animation:pound .2s 1; ;
}

    @keyframes pound {
        from {
            transform: scale(.9);
        }

        to {
            transform: scale(1.2);
        }
    }
.header-inner {
  position: fixed;
  width: 100%;
  top: 0rem;
  height: 4rem;
  padding: 1rem;
  z-index: 2;
  background: #fff
}
.container {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}
.avatar {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
}
.name {
  font-size: 1.4rem;
  color: rgb(85, 85, 85);
}
.description {
  font-size: 1.6rem;
  line-height: 1.6rem;
  letter-spacing: 0.1rem;
  color: rgb(104, 126, 145);
  font-weight: 300;
  text-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
}

</style>
