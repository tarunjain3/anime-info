<template>
  <Anime />
</template>

<script>
import Anime from './pages/Anime.vue';

export default {
  name: 'App',
  components: {
    Anime
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
