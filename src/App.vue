<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <h1 v-upper="msg"></h1>
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){return {msg:"hhh"}},
  components: {
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch("categoryList");
    this.$store.dispatch("getUserInfo")
  }
}
</script>

<style>
#app {
}
</style>
