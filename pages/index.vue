<template>
  <div id="index">
    <Home />
    <About />
    <Quote
      quote="KNSR gave me exponential growth in my
               customer base. No matter what impediments we came across,
               there was no stopping KNSR."
      name="Amar Patel"
      location="Chicago, Il"
    />
    <Team />
    <Footer />
  </div>
</template>

<script>
  import Home from '~/components/Home.vue'
  import About from '~/components/About.vue'
  import Team from '~/components/Team.vue'
  import Quote from '~/components/Quote.vue'
  import Footer from '~/components/Footer.vue'

  export default {
  components: {
    Home,
    About,
    Team,
    Footer,
    Quote
  }
}
</script>

<style>
  #index {
    align-items: center;
  }

</style>
