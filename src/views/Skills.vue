<template>
<v-app>
<Nav></Nav>
        <h1 class="text-xs-center mt-3 mb-4 primary--text display-1 skill">My Skills</h1>
  


<v-layout row wrap>
  <v-flex xs12 sm5 lg5 class="py-2" offset-lg1>
    <p class="headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas molestiae accusamus eligendi modi. Quis voluptatibus distinctio dolor t temporibus?</p>
  </v-flex>
  
  <v-spacer></v-spacer>
  <v-flex xs12 sm6 lg5 offset-lg1 class="pt-0 mr-0 ">
    <v-card round>
      <v-layout row wrap>
        <v-flex xs12 > 
          <tprogress></tprogress>     
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</v-layout>

 



</v-app>
</template>

<script>
import Nav from '../components/Nav.vue'
import tprogress from '../components/progress'
  export default {
    components: {
      Nav  , tprogress 
    },
    
  }
</script>


<style >
h1{
  text-decoration: underline;
}
</style>
