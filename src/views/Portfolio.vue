<template>
  <v-app class="portfolio px-5">
    <Nav/>
    <v-layout justify-center class="mt-3">
      <v-flex xs12  >
        <v-card flat v-for="project in projects" :key="project.title" 
        class="mt- main-card " >
          <v-container fluid grid-list-lg>
            <v-flex >
                <v-card class=" lighten-3 px-3 pb-4" >
                  <v-container fill-height fluid pa-2>
                    <v-layout row wrap justify-space-around>  
                      <v-flex xs10 offset-xs1 class="ma-2">
                       <div class="text-sm-left display-1 primary--text ">
                         {{project.title}}
                       </div>
                        </v-flex>                   
                     <v-flex sm10 md6 xs12 class="py-2" >
                      <v-hover >
                        <v-card slot-scope="{ hover }" id="image-card">
                          <v-img v-bind:src= "project.image"></v-img>  
                           <v-expand-transition>
                            <div  v-if="hover"  class="d-flex transition-fast-in-fast-out yellow lighten-2 v-card--reveal display-3 black--text"  style="height: 73%;"  >
                            <div class="font-weight-bolder title  black--text text-xs-center">
                            <div class="headline">{{project.text1}}</div>
                            </div>
                            </div>
                           </v-expand-transition>
                        </v-card>
                      </v-hover>
                    </v-flex>

                    <v-flex sm11 md5 xs10  class="cyan lighten-5 "  >                     
                        <v-card flat   class='justify-center text-xs-center cyan lighten-5'>
                            <div class="headline font-weight-bold cyan lighten-5  px-2 pt-4">{{project.text1}} <br> {{project.text2}}   </div> 
                          <v-flex right >                            
                              <a :href="project.url" target="_blank" rel="noopener noreferrer" style="text-decoration: none" class="pb-3">
                            <v-btn large round class="yellow darken-2 body-2 font-weight-bolder black--text  "> <v-icon left>code</v-icon> View on GitHUb</v-btn> </a>
                          </v-flex>
                        </v-card>                      
                    </v-flex> 
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    <Footer></Footer>    
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
        projects :[
          {title: ' A Vue Project Manager Web App',
          text1:' The project is a project manager web app using Vue Vuetify and Firebase real time database to store tasks and team members.', 
          text2: 'The project also uses Vuex and Vue Router alongside Vue , JQuerry and selected CSS3 frameworks like Bootstrap. ', 
          url : 'https://github.com/thisbruno/Project-Manager', 
          image: require( "../assets/pm1.png")
          },

          {title: ' Meet-Up Project',  
          text1:"This is a responsive vue Meet-up application that incorporate Vue -Vuex Vue Router. The project's Back-End is built with Node.Js and Firebase Authetication functionality  ",
          text2:` A Meet- Up web aplication that uses javaScript - specifically Vue - Vuetify and CSS3. It also incorporates Firebase Authentication and Real-Time Database `, 
          url :'https://github.com/thisbruno/Devs-Meet-Up',
          image: require("../assets/mu1.png")     } 

          // Note that the text1 will is also shown on the hover card whle both are shown at adjacent card
        ]
      }
    }}
</script>

<style scoped>
.portfolio { 
  background: #e6b459;
  padding: 0 43px ;
   /* background-image: linear-gradient( #e6b459,  rgb(34, 32, 32),  #e6b459); */
  }
  .main-card{ 
  background: #e6b459;
  padding: 0 43px ;
  }
#image-card{
 background-size: cover;
  background-repeat: no-repeat;
  background-color:#ffffff;
  }
.v-card--reveal { align-items: center;  bottom: 0;  justify-content: center;
      opacity: .83;  position: absolute;  width: 100%;  font-display: red;
}
</style>


