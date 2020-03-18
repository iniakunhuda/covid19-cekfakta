<template>
  <div id="app">
    <Articles/>
    <Footer />
  </div>
</template>

<script>
import Articles from './components/Articles.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Articles,
    Footer
  },
  created () {
    document.title = "Cek Fakta Covid-19";
  }
}
</script>

<style src="./assets/main.css"></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
