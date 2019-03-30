<template>
  <v-app class="contact ">
    <Nav></Nav>
    <h1 class="sunheading text-xs-center my-2 mb-3 primary--text ">Portfolio</h1>
     <v-layout row wrap justify-space-around >
      <v-flex xs12 sm5 md5 justify-center class="mt-2 ">
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto img1"
              color="grey lighten-4"  >
              <v-img  :aspect-ratio="16/9"   >
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal body-2 white--text"  style="height: 70%;"  >
                  <div class="font-weight-bold body-2  black--text text-xs-center">
                      Made of bamboo by hand <br>
                      Our Vintage kitchen utensils delight any chef.<br>
                  <v-btn  class="primary small body-1 font-weight-bold black--text">read more</v-btn>
                  </div>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="cyan lighten-2"  style="position: relative;" >
                <h3 class="body-2  font-weight-bold primary--text mb-1 text-uppercase text-xs-center">
                  project name   
                </h3>
                
              </v-card-text>
            </v-card>
          </v-hover> 
        </v-flex>                 
       
        <v-flex xs12 sm5 md5 justify-center  class="mt-2">
          <v-hover>
            <v-card slot-scope="{ hover }" class="mx-auto img1"
              color="grey lighten-4"  >
              <v-img  :aspect-ratio="16/9"   >
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out cyan lighten-2 v-card--reveal display-3 white--text"  style="height: 70%;"  >
                  <div class="font-weight-bold body-2  black--text text-xs-center">
                      Made of bamboo by hand <br>
                      Our Vintage kitchen utensils delight any chef.<br>
                  <v-btn  class="primary body-1 font-weight-bold black--text">read more</v-btn>
                  </div>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="cyan lighten-2"  style="position: relative;" >
                <h3 class="body-1  font-weight-bold primary--text mb-1 text-uppercase text-xs-center">QW cooking utensils</h3>
              </v-card-text>
            </v-card>
          </v-hover>
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
        works :[
          {image:'', bottomtitle:'', hovertitle:'', btnurl :''}
        ]
      }
    }
  }
</script>


<style scoped>
   .contact{  background-color: #252934;}
   .img1 {
    background: url("../assets/back2.jpeg"); background-size: cover;
    width: 100%; height: 100%;}
    .v-card--reveal {
      align-items: center;
      bottom: 0;
      justify-content: center;
      opacity: .7;
      position: absolute;
      width: 100%;
      font-display: red;
}
    .fw-btn hover{
      color: black;
      border: 1px solid #000;
    }
</style>

