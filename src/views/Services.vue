<template>
<v-app  id ="skills" >
  <Nav></Nav>
<v-layout row wrap justify-space-around>
    <v-flex xs12 sm7 md7 offset-sm1 class=" text-sm-left ml-3 mt-3 ">
       <div class="display-1 font2 text-xs-center text-uppercase font-weight-regular " style="color: #E31B6D;">Services & Skills 222</div> <br>      
       <div class=" headline cyan--text font-weight-regular ml-5 ">
         <div class="abouttext"> 
            My area of my expertise is Front-End development and I have sufficient Back-end experience.  <br>
            I'm proficient in HTML5, CSS3 and JavaScript (ES-6) , hence can build  web-apps with Vue or React, custom plugins with interactive and responsive displays.
            I have experience with Back-End Technology i.e Node.Js and Databases like Mongo DB and serverless options like Firebase and A.W.S also have experience in working with CMS like WordPress Drupal.     
       </div> </div>     
    </v-flex>
    <v-flex xs12 sm5 md4 offset-md0 class="mt-3  ">
    <v-card round> <tprogress></tprogress>  </v-card>
    </v-flex> 


  </v-layout> 
 <Footer class="mt-3"></Footer>

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

<style scoped>
#skills{
background-color:#252627;
}
.abouttext{
    line-height: 1.7;
 
}

.font2{
  font-family: vidaloka, noto sans ;  
}
.color1{
 color: #E31B6D;
}
.flex1{
   flex-basis: 50%;
    flex-grow: 0;
}
</style>

