<template>
  <v-app  class="blue lighten-3">
    <v-layout text-xs-center wrap    >
      <v-flex xs12>
        <v-img   :src="require('../assets/logo.png')" class="my-3" contain  height="300" ></v-img>
      </v-flex>   
      <v-flex>
        <v-btn to='/about' class="orange lighten-3 red--text"> Explore my work  <v-icon right>person</v-icon></v-btn>
        <v-btn to='/contact' class="orange lighten-3 red--text"> Contact Me  <v-icon right>person</v-icon></v-btn>
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

</style>
