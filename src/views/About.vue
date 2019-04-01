<template>
<v-app class="about lighten-4 pt-5 pl-3">
  <Nav></Nav>
  <v-layout row wrap>
    <v-flex xs12 sm7 md7 offset-sm1 class=" text-sm-left ml-3 mt-3 ">
       <div class="title font2 text-xs-center " style="color: #E31B6D;">FEW WORDS ABOUT ME,</div> <br> <br>    
       <div class=" headline cyan--text font-weight-regular ml-5 ">
         <div class="abouttext">I'm a Full-Stack Developer with more than two years of experience in WEB technologies. I have doing a different kind of projects using JavaScript / HTML5 / CSS3  and Node.JS. <br> Recently I learned Vue.js/MySQL and created this website for my portfolio based on Vue.js. <br> <br>
         I've always been drawn to the overlap between design and development. My <router-link to= '/skills' class="font-weight-regular"  style="cursor: pointer; color: #E31B6D;">skills </router-link> are broad ranging from ux to design, front end to back end development.
         I'm <router-link to = '/contact' style="cursor: pointer; color: #E31B6D" ><span class="font-weight-regular" > available</span></router-link>  for remote work If you would like to build something together, 
        
       </div>
         </div>     
    </v-flex>

    <v-flex xs10 sm3 md3 offset-xs1 class="cyan--text headline">
      <v-card class="mb-2 mt-4 font2">
        <v-card-title class=" title justify-center primary--text text--darken-1 cyan lighten-3" >
          <span text-xs-center class="text-uppercase">Services</span>          
        </v-card-title>        
         </v-card >
        <v-card class="mb-2" v-for="lang in langs" :key="lang.title" >
          <v-card-text class=" body-2 "  >
         <div class="title text-xs-center cyan--text text-uppercase " >{{lang.title}}</div>
            <div class="subheading text-xs-center">{{lang.text}}</div>
          </v-card-text>
        </v-card>     
    </v-flex> 
  </v-layout> 
 <Footer class="mt-3"></Footer>
 </v-container>
</v-app>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
  export default {
    components: {
      Nav, Footer   
    },
    data () {
      return {
        langs:[
          {title: 'Design' , text: 'UX, UI, Web-Apps, Logos'},
          {title: 'Front-End' , text: 'CSS3, Javascript, ES6, React, ThreeJS'},
          {title: 'Back-End' , text: 'NodeJS, PHP, APIs, NoSQL AWS,  Firebase'}
        ]
      }
    }
  }
</script>

<style scoped>
.about{
background-color: rgb(23, 15, 37);
background: url("../assets/about.jpg") no-repeat center fixed;
 background-size: cover ;;

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

