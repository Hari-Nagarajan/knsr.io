<template>
    <div id="about">
      <h1 style="padding: 1rem">{{aboutHeader}}</h1>

      <div id="bs">
        <Attribute
          v-for="attribute in attributes"
          :key="attribute.id"
          :icon="attribute.icon"
          :attribute="attribute.attribute"
          :description="attribute.description"
        />
      </div>

    </div>
</template>

<script>
  import Attribute from '~/components/Attribute.vue'

  export default {
    name: "About",
    fontawesome: {
      component: 'fa'
    },
    components: {
          Attribute
    },
    data() {
      return {
        aboutHeader: "Why do you need KNSR?",
        attributes: [
          {
            id: 0,
            attribute: "Fast Funding",
            icon: "money-bill-wave",
            description: "We offer Next Day funding. No extra costs, fees or fine print."},
          {
            id: 1,
            attribute: "Custimizability",
            icon: "fist-raised",
            description: "We will customize your solution to fit your unique business needs."},
          {
            id: 2,
            attribute: "Consistent",
            icon: "dice-d20",
            description: "KNSR is consistent, we have proven ourselves time and time again to be unstoppable."}
        ]
      }
    }

  }

</script>

<style scoped>
  #about {
    padding-top: 100px;
    margin: auto;
    max-width: 1000px;
    vertical-align: middle;
    text-align: center;
  }
  #bs {
    display: flex;
  }



  @media (max-width: 440px){
    #about {
      padding-top: 25px;
      padding-left: 5px;
      padding-right: 5px;
      display: grid;
    }



  }

</style>
