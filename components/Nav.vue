<template>
  <div id="nav-bar">
    <!--<v-navigation-drawer-->
      <!--:mini-variant="miniVariant"-->
      <!--:clipped="clipped"-->
      <!--v-model="drawer"-->
      <!--:disable-route-watcher = true-->
      <!--:disable-resize-watcher = true-->
      <!--fixed-->
      <!--app-->
    <!--&gt;-->
      <!--<v-list>-->
        <!--<v-list-tile-->
          <!--v-for="(item, i) in items"-->
          <!--:to="item.to"-->
          <!--:key="i"-->
          <!--router-->
          <!--exact-->
        <!--&gt;-->
          <!--<v-list-tile-action>-->
            <!--<v-icon v-html="item.icon" />-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title v-text="item.title" />-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->

    <v-toolbar
      :clipped-left="clipped"
      id='navbar'
    >
      <v-toolbar-side-icon @click="drawer = !drawer"  id="drawer-button" class="hidden-md-and-up"/>

      <img id="logo" v-bind:src="image">
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Home</v-btn>
        <v-btn flat>About</v-btn>
        <v-btn flat>Our Team</v-btn>
        <v-btn flat>Contact Us</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>


</template>

<script>
  import NuxtLogo from '@/assets/logo/logo26.png'

  export default {
        name: "Nav",
    data() {
      return {
        image: NuxtLogo,
        title: 'KNSR',
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
      }
    }
    }
</script>

<style scoped>

  #nav-bar {
    width: 100%;
    height: 64px;
    top: 0;
    left: 0;
    position: fixed;
    margin-top: 36px;
    z-index: 100;
  }

  #navbar {
    background: none;
    box-shadow: none;
    align-self: center;
    left: unset;
    max-width: 1000px;
    margin: auto;
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

  .v-toolbar {
    opacity: 1;
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
