<template>
  <v-container  class="blue lighten-3">
    <v-layout text-xs-center wrap    >
      <v-flex xs12>
        <v-img   :src="require('../assets/logo.png')" class="my-3" contain  height="400" ></v-img>
      </v-flex>   
      <v-flex>
        <v-btn to='/home' class="orange lighten-3 red--text"> Explore my work  <v-icon right>person</v-icon></v-btn>
      </v-flex>


   
    </v-layout>
  </v-container>
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
