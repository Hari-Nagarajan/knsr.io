<template>
  <div id="home" :style="{ backgroundImage: `url('${HomeImg}')` }">
    <div id="home-text-wrapper">
      <div id="home-text">
        <h1>
          {{homeHeader}}
        </h1>
        <p>{{homeSubHeader}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import HomeImg from '~/assets/images/home.jpg'
  export default {
        name: "Home",
      data() {
          return {
            homeHeader: "KNSR is what your business needs.",
            homeSubHeader: "Unchecked growth and virality is what KNSR is all about. Boost your digital presence with KNSR.",
            HomeImg
          }
      }
    }
</script>

<style>
 #home {
   background: url("/assets/images/home.jpg");
   opacity: 0.6;
   width: 100vw;
   height: 100vh;
   background-size: cover;
   vertical-align: middle;
   align-content: center;
   align-items: center;
   display: table-cell;
 }

  #home-text {
    color: white;
    margin: auto;
    text-align: center;
  }

  #home-text-wrapper {
    display: -webkit-box;
    text-shadow: 0 1px 3px rgba(0,0,0,.5);
    background: rgba(0, 0, 0, 0.5);
    padding: 24px;
  }
</style>
