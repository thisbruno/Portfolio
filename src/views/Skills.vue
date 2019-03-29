<template>
<v-app  id ="skills" >
<Nav></Nav>
<h1 class="text-xs-center mt-3 mb-4 primary--text display-1 skill">My Skills</h1>
<v-layout row wrap>
  <v-flex xs12 sm6 md7 class="py-2 ml-3">
    <div class="headline cyan--text font-weight-light ">
    <div> My area of my expertise is Front-End development with primary Back-end experience. </div> <br>
    <div>I'm proficient in HTML5, CSS3 and JavaScript (ES-6) , hence can build small and medium web-apps with Vue or React, custom plugins with interactive and responsive displays. </div> <br>
    <div>I'm also proficient with Back-End Technologies i.e Node.Js and Databasing technologies like Mongo DB and serverless options like Firebase and Amazon Web Services also have experience in working with CMS like WordPress Drupal. </div>
    </div>

  </v-flex>
  
  <v-spacer></v-spacer>
  <v-flex xs12 sm5 md4 offset-md0 class="pt-0 mr-0 ">
    <v-card round>
     <tprogress></tprogress>     
    </v-card>
  </v-flex> 

 
</v-layout>
<Footer></Footer>
</v-app>
</template>

<script>
import Nav from '../components/Nav.vue'
import tprogress from '../components/Progress'
import Footer from '../components/Footer.vue'
  export default {
    components: {
      Nav  , tprogress  ,Footer
    },
    
  }
</script>


<style scoped >
h1{
  text-decoration: underline;
}
#skills{
background-color: rgb(23, 15, 37);
/* background-color: #252934 */
}

</style>
