<!--suppress ALL -->
<template>
  <div class="attrib">
    <div class="icon">
      <font-awesome-icon class="fa-icon" :icon="icon"></font-awesome-icon>
    </div>
    <h2>{{attribute}}</h2>
    <p>{{description}}</p>
  </div>
</template>

<script>
    export default {
        name: "Attributes",
      fontawesome: {
        component: 'fa'
      },
      props: {
        icon: {
          quote: String,
          required: true
        },
        attribute: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        }
      }
    }
</script>

<style scoped>
  .attrib {
    flex-basis: 100%;
    text-align: center;

  }
  .icon {
    width: 140px;
    height: 140px;
    color: #fff;
    background-color: #222;
    border-radius: 50%;
    margin: auto;
    font-size: 90px;
    text-align: center;
    padding-top: 5px;
  }
  .fa-icon {
    font-style: unset;
  }



  @media (max-width: 440px){
    .icon {
      padding-top: 1px;
      font-size: 45px;
      width: 70px;
      height: 70px;
    }

    .attrib h2 {
      font-size: 1.3em;
    }
 }

</style>
