<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "./view/HomePage.vue";
export default {
  components: {
    Header,
    HomePage,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
