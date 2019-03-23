<template>
  <v-app class="red">
     <v-content class="purple lighten-3" >    
       <router-view class="grey lighten-2 px-4 py-2"></router-view>
    </v-content>

    
      <Footer></Footer>
   
  </v-app>
</template>



<script>
import Footer from './components/Footer.vue'


  export default {
    components: {
      Footer
    
    }
  }
</script>
