<template>
  <div class="team-member">
    <div class="team-photo">
      <v-img :src=photo class="team-photo"></v-img>
    </div>
    <h2>{{name}}</h2>
    <h3>{{role}}</h3>
  </div>
</template>

<script>
  export default{
    props: {
      name: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      photo: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .team-member {
    flex-basis: 25%;
    text-align: center;
    padding: 3rem;
    margin: auto;
  }

  .team-photo {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }

  @media (max-width: 440px){
    .team-member{
      width: 50vw;
      padding: 1rem;
      flex-basis: 50%;
    }
  }

</style>
