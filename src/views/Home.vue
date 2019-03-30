<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column class="mt-5 pt-1">
            <div class="display-2  text-xs-center mt-5 pt-1 primary--text">Welcome,</div>
            <div class="display-1 white--text text-xs-center ma-2 mt-5 pt-2">I'm <span class="display-1" style="color: #E31B6D;" >Bruno </span> ,</div>

            <div class="display-1 white--text  text-xs-center ma-2 mb-3" >
                Full-Stack Web Developer 
             </div>

         <v-flex  id="nav" text-xs-center class="mt-2">
        <v-btn  round to='/about'  class="orange lighten-3   "> Explore my work  <v-icon right>work</v-icon></v-btn>
        <v-btn round to='/contact'  class="orange lighten-3 "> Hire Me  <v-icon right>person</v-icon></v-btn>        
      </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.home-hero {
    background: url("../assets/back2.jpeg"); background-size: cover;
    width: 100%; height: 100%;}
    #nav .btn2 {
  position: relative;
}
</style>