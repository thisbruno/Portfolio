<template>
  <v-app>
     <v-content  >    
       <router-view class="darkblue lighten-5 px-4 py-2"></router-view>
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
