<template>
  <div id="nav-bar">

    <v-toolbar
      :clipped-left="clipped"
      id='navbar'
    >
      <img id="logo" v-bind:src="image" alt="Logo">
      <v-toolbar-title v-text="title" id="nav-bar-title"/>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn href="#home" flat>Home</v-btn>
        <v-btn href="#about" flat>About</v-btn>
        <v-btn href="#team" flat>Our Team</v-btn>
        <v-btn href="#home" flat>Contact Us</v-btn>
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
          { icon: 'apps', title: 'Home', to: '#home' },
          { icon: 'apps', title: 'About', to: '#about' },
          { icon: 'apps', title: 'Our Team', to: '#team' },
          { icon: 'apps', title: 'Home', to: '#home' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
      }
    },
    mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", function(){
          const navbar = document.getElementById("nav-bar");
          const nav_classes = navbar.classList;
          if(document.documentElement.scrollTop >= 150) {
            if (nav_classes.contains("shrink") === false) {
              nav_classes.toggle("shrink");
            }
          }
          else {
            if (nav_classes.contains("shrink") === true) {
              nav_classes.toggle("shrink");
            }
          }
        })
      })
    }
    }
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>

  #nav-bar {
    width: 100%;
    height: 64px;
    top: 0;
    left: 0;
    position: fixed;
    margin-top: 20px;
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
  .shrink {
    margin-top: 0!important;
    background-color: #21212199;
    opacity: 1;
  }
  #logo {
    height: 50px;
    width: 50px;
    filter: brightness(0) invert(1);

  }

  #nav-bar-title{
    margin-left: 0;
  }

  

</style>
