<template>
<v-app class="black lighten-4 pt-5">
  <Nav></Nav>
  <v-layout row wrap>
    <v-flex xs12 sm6 md6 class=" text-sm-left ml-3 pl-3">
       <div class="display-1 font2 text-xs-center " style="color: #E31B6D;">FEW WORDS ABOUT ME,</div> <br>      
       <div class="headline cyan--text font-weight-light abouttext">
         <div class="abouttext">Everything started with a passion for programming and web technologies. </div> <br>
         <div class="abouttext">I’m a Front-end Developer with more than two years of experience in WEB technologies. I have doing a different kind of projects using JavaScript / HTML5 / CSS3 and have a big passion to grow and know even more. Recently I learned Vue.js/MySQL and created a website for my portfolio based on Vue.js.</div>




         <!-- <div class="abouttext">I enjoy converting my ideas into code to build products and projects that makes the world a better place while fulfilling the my clients needs and instructions to the letter</div> <br> -->
         <!-- <div class="abouttext">I've always been drawn to the overlap between design and development. My <router-link to= '/skills' tag="span"  style="cursor: pointer; color: #E31B6D; font-style: italic" class="font-weight-bold">skills </router-link> are broad ranging from ux to design, front end to back end development.</div><br>
          <div class="abouttext">
          I'm available for remote work - if you would like to build something together, 
        <router-link to = '/contact' style="cursor: pointer; color: #E31B6D" class="font-weight-bold"><span style="font-style: italic">get in touch ?</span></router-link> -->
       </div>
         </div>     
    </v-flex>

    <v-flex xs12 sm4 md4 offset-sm1 class="cyan--text headline">
      <v-card class="mb-2 font2">
        <v-card-title class=" headline justify-center primary--text text--darken-1 cyan lighten-3" >
          <span text-xs-center class="text-uppercase">Languages</span>          
        </v-card-title>        
         </v-card >
        <v-card class="mb-2" v-for="lang in langs" :key="lang.title" >
          <v-card-text class=" subheading "  >
         <div class="headline text-xs-center cyan--text text-uppercase underline" >{{lang.title}}</div>
            <div class="headline text-xs-center">{{lang.text}}</div>
          </v-card-text>
        </v-card>     
    </v-flex> 
  </v-layout> 
 <Footer class="mt-3"></Footer>
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
.abouttext{
    line-height: 1.4;
    font-family: droid serif, lato;
}
.underline{
  text-decoration: underline;
  font-weight: bold;
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

