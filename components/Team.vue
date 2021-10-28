<template>
    <div id="team">
      <h1>{{teamHeader}}</h1>
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
  import TeamBox from '~/components/TeamBox.vue'
  import HariPhoto from '~/assets/images/hari.jpg'
  import MayPhoto from '~/assets/images/may.jpg'
  import DiegoPhoto from '~/assets/images/diego.jpg'
  import AnilPhoto from '~/assets/images/anil.jpg'
  import KarenPhoto from '~/assets/images/karen.jpg'
  import RitaPhoto from '~/assets/images/rita.jpg'

  export default {
        name: "Team",
    components: {
      TeamBox
    },
      data() {
        return {
          teamHeader: "Get to know the KNSR team.",
          team: [
            {id: 0, name: "Hari Nagarajan", role: "Software", photo: HariPhoto},
            {id: 1, name: "Austin Agnish", role: "Sales", photo: AnilPhoto},
            {id: 2, name: "May Park", role: "Design", photo: MayPhoto}
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
