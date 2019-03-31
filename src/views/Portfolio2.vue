<template>
  <v-app class="black">
    <Nav/>
    <v-layout justify-center class="mt-2">
      <v-flex xs12  class="mt-1">
        <v-card>
          <v-container fluid grid-list-lg>
            <v-flex >
                <v-card raised class="cyan lighten-3 px-3" >
                  <v-container fill-height fluid pa-2>
                    <v-layout row wrap justify-space-around>  
                      <v-flex xs10 offset-xs1 class="ma-2">
                       <div class="text-sm-left headline primary--text ">A Vue Project Manager Web App</div>
                        </v-flex>                   
                      <v-flex sm10 lg5 xs12 >
                      <v-card  class=" img2" height="300">
                      </v-card>
                    </v-flex>

                    <v-flex sm10 lg5 xs12  >
                      <v-card  class="img1" height="300">
                      </v-card>
                    </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            <!-- </v-layout> -->

          </v-container>
        </v-card>
      </v-flex>
    </v-layout>


    <v-layout justify-center class="mt-3">
      <v-flex xs12  >
        <v-card>
          <v-container fluid grid-list-lg>
            <v-flex >
                <v-card raised class="cyan lighten-3 px-3" >
                  <v-container fill-height fluid pa-2>
                    <v-layout row wrap justify-space-around>  
                      <v-flex xs10 offset-xs1 class="ma-2">
                       <div class="text-sm-left headline primary--text ">
                         Meet-Up Project
                       </div>
                        </v-flex>                   
                      <v-flex sm10 lg5 xs12 >
                      <v-card  class=" img3" height="300">
                      </v-card>
                    </v-flex>

                    <v-flex sm10 lg5 xs12  >
                      <v-card  class="img4" height="">
                      </v-card>
                    </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-flex>
            <!-- </v-layout> -->

          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-app>

</template>
<script>

import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
  export default {
    components: {
      Nav, Footer    
    }, 

}
</script>

<style scoped>
.img1 {
    background: url("../assets/pm2.png"); background-size: cover;
    width: 100%; height: 100%;}
.img2 {
    background: url("../assets/pm1.png"); background-size: cover;
    width: 100%; height: 100%;}
    .img3 {
    background: url("../assets/mu1.png"); background-size: cover;    
    width: 100%; height: 100%;}
    .img4 {
    background: url("../assets/mu1.png"); background-size: cover;
    width: 100%; height: 100%;}
</style>


