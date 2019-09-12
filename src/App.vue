<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/contact">Contact</router-link> -->
      <Header1></Header1>
      <section></section>
    </div>
    <router-view/>
    <Footer></footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header1 from '@/components/header1.vue'
import Footer from '@/components/footer.vue'



export default {
  name: 'home',
  components: {
    HelloWorld,
    Header1,
    Footer,
  }
}


</script>