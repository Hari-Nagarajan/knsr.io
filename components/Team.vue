<template>
    <div id="team">
      <h1>Meet the KNSR team.</h1>
      <div id="team-box">
          <TeamBox
            v-for="mate in team"
            :key="mate.id"
            :name="mate.name"
            :role="mate.role"
            :photo="mate.photo"
          />



      </div>
    </div>
</template>

<script>
  import TeamBox from '@/components/TeamBox.vue'
  import HariPhoto from '@/assets/hari.jpg'
  import MayPhoto from '@/assets/may.jpg'
  import DiegoPhoto from '@/assets/diego.jpg'
  import AnilPhoto from '@/assets/anil.jpg'
  import KarenPhoto from '@/assets/karen.jpg'
  import RitaPhoto from '@/assets/rita.jpg'

  export default {
        name: "Team",
    components: {
      TeamBox
    },
      data() {
        return {
          team: [
            {id: 0, name: "Hari Nagarajan", role: "Engineering", photo: HariPhoto},
            {id: 1, name: "May Park", role: "Stan", photo: MayPhoto},
            {id: 2, name: "Diego Tomsig", role: "Operations", photo: DiegoPhoto},
            {id: 3, name: "Anil René", role: "Finance", photo: AnilPhoto},
            {id: 4, name: "Karen Boyce", role: "Legal", photo: KarenPhoto},
            {id: 5, name: "Rita Juliana", role: "Engineering", photo: RitaPhoto}
          ]
        }
      }
    }
</script>

<style scoped>
  #team {
    padding-top: 100px;
    margin: auto;
    max-width: 1000px;
    vertical-align: middle;
    text-align: center;
  }

  #team-box {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 440px){
    #team {
      padding-top: 25px;
      height: unset;
    }
  }


</style>
