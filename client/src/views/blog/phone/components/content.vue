<template>
  <dl class="main">
    <dd
      v-for="({name,description,list},i) in data"
      :key="i"
      class="item"
    >
      <Row>
        <i-col span="24">
          <h2 class="name">{{ name }}</h2>
          <p class="description">{{ description }}</p>
          <ol>
            <li
              v-for="(item,j) in list"
              :key="j"
              class="list"
            >
              {{ item.name }}
            </li>
          </ol>
        </i-col>

      </Row>
    </dd>
  </dl>

</template>

<script>
export default {
  name: 'Name',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
li,
dd {
  list-style-type: none;
}
.main {
  height: 100%;
  width: 100%;
}

.name {
  font-size: 2.1rem;
  font-weight: bold;
  margin: 1rem 0;
}
.description {
  font-size: 1.4rem;
  margin: 1rem 0;
}
.list {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 1rem 1rem;
}
.item {
  height: 100%;
  padding: 1rem;
  border-radius: 0.3rem;
  list-style-type: none;
  border-bottom: dashed 0.1rem rgb(221, 221, 221);
}
hr {
  border-width: 0.1rem;
  border-style: dashed;
  border-color: rgb(221, 221, 221);
  border-image: initial;
}
</style>
