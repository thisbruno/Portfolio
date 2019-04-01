<template style="overflow-y: hidden;">
    <v-container fluid fill-height class="hero-image" style="max-height: 100vh;  overflow-y: hidden;">
        <v-layout  align-center column class="mt-5 pt-5 hero-text">
            <div class="display-4 text-xs-center mt-5 pt-1 primary--text">Welcome,</div>
            <div class="display-3 white--text text-xs-center ma-2 mt-5 pt-2">I'm <span style="color: #E31B6D;" >Bruno </span> ,</div>          
          <div  >                
             <v-card    class="headline font-weight-bolder text-xs-center cyan lighten-4 mb-3 px-5 py-2  mt-1" >
            <vue-typer
                  class="font-weight-bold headline" 
                  :text='["The Full-Stack Developer","The Front-End Developer"," The Back-End Engineer ","The  UI/UX Designer "," The ML Enthusiast ", " The Analytical Chemist ", " The Python Developer "  ]'
                  :repeat='127'  :shuffle='false'  initial-action='typing'
                  :pre-type-delay='73'  :type-delay='93' :pre-erase-delay='1270'
                  :erase-delay='37'  erase-style='backspace'  :erase-on-complete='false'
                  caret-animation='smooth' > span
            </vue-typer>     
             </v-card>
             </div>    
          <v-flex  id="nav" text-xs-center class="mt-2">
            <v-btn fab to='/about'  class="cyan  lighten-1 primary--text "> <v-icon size="57px" >arrow_drop_down</v-icon></v-btn>
          </v-flex>
        </v-layout>
    </v-container>
</template>

<style  scoped>
.card1{
  background-color: red;
  border: 10px solid #000;
  width: '100px'
}

/* .hero-image {
  background: url(img_man.jpg) no-repeat center; 
  background-size: cover;
  height: 500px;
  position: relative;
} */

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-image {
    background: url("../assets/theback.jpg") no-repeat center;
    background-size: cover;
    width: 100%; height: 100%;
    position: relative
}
 #nav .btn2 {
  position: relative;
}
.v-icon {
  display: inline-flex;}

@keyframes rocking {
  0%,100% {transform: rotateZ(-10deg);},
  50%     {transform: rotateZ(10deg);}
}

.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  background-color: #fff;
  }


</style>