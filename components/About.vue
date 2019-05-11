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
  import Attribute from '@/components/Attribute.vue'

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
            attribute: "Self Sufficient",
            icon: "tools",
            description: "We grow unchecked without any external signals or influences."},
          {
            id: 1,
            attribute: "Adaptability",
            icon: "fist-raised",
            description: "We are able to rapidly expand even in the harshest environments."},
          {
            id: 2,
            attribute: "Limitless",
            icon: "dice-d20",
            description: "Our potential for growth and expansion is limitless."}
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
