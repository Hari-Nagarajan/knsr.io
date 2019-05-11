<template>
  <div id="index">
    <Home />
    <About />
    <Quote
      quote="KNSR gave me exponential growth in my
               user base. No matter what impediments we came across,
               there was no stopping KNSR."
      name="Amar Patel"
      location="Chicago, IL"
    />
    <Team />
    <Quote
      quote="We were hesitant at first, but KNSR turned my business cash positive
      and took us to the next level. I'm looking forward to the future."
      name="Shauna Maddox"
      location="New York, NY"
    />
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
