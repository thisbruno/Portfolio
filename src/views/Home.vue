<template>
  <v-app  class="blue lighten-3 home-hero" id="home-hero" >
   
    <v-layout  column wrap  >
      <v-flex xs10 offset-xs1 text-xs-center>
        <h2> Full-Stack Web Developer.</h2>
        <p></p>
      </v-flex> 
      </v-layout>
        

      <v-layout>   
      <v-flex   text-xs-center>
        <v-btn to='/about' large class="orange lighten-3 red--text"> Explore my work 
         <i class="fas fa-briefcase"></i> <i class="fa fa-arrow-circle-down icon-hover"></v-btn>


        <v-btn to='/contact' large class="orange lighten-3 red--text"> Hire Me 
         <v-icon right>person</v-icon></v-btn>
      </v-flex>
      </v-layout>  

      
 
  </v-app>


  
</template>

<script>
import Homy from '@/components/Homy';

export default {
    name: 'home',
    components: {
        Homy
    }
};
</script>

<style scoped>
.home1{
  color: aqua;
}
.page1 {
  background-image: url("../assets/back.jpg");
}
#home-hero {
    background: url("../assets/back.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
}

</style>
