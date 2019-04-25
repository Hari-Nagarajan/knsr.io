<template>
  <v-app dark>
    <vue-particles
    color="#dedede"
    :particleOpacity="0.7"
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

    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      :disable-route-watcher = true
      :disable-resize-watcher = true
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer"  id="drawer-button" class="hidden-md-and-up"/>

      <img id="logo" v-bind:src="image">
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>


    <v-content id="main">
      <v-container>

      </v-container>
    </v-content>


    <v-footer
      :fixed="fixed"
      app
    >
      <span id="footer">&copy;2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  import NuxtLogo from '@/assets/logo/logo26.png'
  import Vue from 'vue'
  import VueParticles from 'vue-particles'
  Vue.use(VueParticles);

  export default {
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

  #footer {
    padding-left: 1em;
  }

  #logo {
    height: 50px;
    width: 50px;
    filter: brightness(0) invert(1);

  }

  .v-toolbar__title{
    margin-left: 0;
  }

  #main {
    position: absolute;
    align-self: center;
  }

  #particles-js {
    height: 100%;
  }

  .v-toolbar {
    opacity: 0.7;
  }

  @media only screen and (min-width: 959px) {
    #drawer-button {
      display: none;
    }
  }

  @media only screen and (max-width: 959px) {
    #drawer-button {
      display: unset;
    }
  }

</style>
