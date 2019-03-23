<template>
<v-app >
  <Nav></Nav>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 sm8 md6>
      <div class="display-2">Hello,</div> <br>
      <div class="display-1">I'm <span class="highlight">     Bruno Kibura </span> ,</div> <br>  
      <div class="display-1"> The <span class="orange--text">FullStack Developer</span></div>
    </v-flex>
  </v-layout>
</v-container>

</v-app>
</template>

<script>
import Nav from '../components/Nav.vue'


  export default {
    components: {
      Nav
    
    }
  }
</script>

<style>
.highlight {
  color: #E31B6D; }

</style>

