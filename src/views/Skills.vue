<template>
<v-app>
<Nav></Nav>

<v-layout>
  <v-flex xs11  offset-xs1 class="mt-2">
    <p class="headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas molestiae accusamus eligendi modi. Quis voluptatibus distinctio dolor t temporibus?</p>
  </v-flex>
</v-layout>
 



<v-layout row wrap>
  <v-flex xs11   offset-xs1>
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

