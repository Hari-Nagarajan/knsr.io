<template>
  <v-app dark>
    <vue-particles
    color="#dedede"
    :particleOpacity="0.4"
    :particlesNumber="80"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="false"
    hoverMode="grab"
    :clickEffect="false"
    clickMode="push"
  >></vue-particles>

    <Nav />


    <v-content id="main">
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  import NuxtLogo from '@/assets/logo/logo26.png'
  import Vue from 'vue'
  import Nav from '@/components/Nav.vue'

  import VueParticles from 'vue-particles'
  Vue.use(VueParticles);

  export default {
    components: {
      Nav
    },
    data() {
      return {
        image: NuxtLogo,
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'KNSR'
      }
    }
  }
</script>

<style scoped>

  .container {
    padding: unset;
    max-width: 100%;
  }
  #footer {
    padding-left: 1em;
  }


  #main {
    position: absolute;
    align-self: center;
    background: #303030;
  }

  #particles-js {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1;
  }

</style>
