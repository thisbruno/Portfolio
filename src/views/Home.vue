<template>
  <v-app  class="blue lighten-3 page1" :style="{'background-image': `url(${require('../assets/back.png')}`}">
   
    <v-layout text-xs-center wrap    >
      <v-flex xs10 offset-xs1>
        <v-img   :src="require('../assets/logo.png')" class="my-0" contain  height="200" ></v-img>
      </v-flex> 
      </v-layout>
        

      <v-layout>   
      <v-flex   text-xs-center>
        <v-btn to='/about' large class="orange lighten-3 red--text"> Explore my work  <v-icon right>person</v-icon></v-btn>
        <v-btn to='/contact' large class="orange lighten-3 red--text"> Hire Me  <v-icon right>person</v-icon></v-btn>
      </v-flex>
      </v-layout>   
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>

<style>
.home1{
  color: aqua;
}
.page1 {
  background-image: url("../assets/back.jpg");
}

</style>
