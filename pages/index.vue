<template>
  <div id="index">
    <Home />
    <About />
    <Team />
    <Footer />
  </div>
</template>

<script>
  import Home from '@/components/Home.vue'
  import About from '@/components/About.vue'
  import Team from '@/components/Team.vue'

  import Footer from '@/components/Footer.vue'

  export default {
  components: {
    Home,
    About,
    Team,
    Footer
  }
}
</script>

<style>
  #index {
    align-items: center;
  }

</style>
