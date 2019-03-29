<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column class="mt-5 pt-5">
            <div class="display-4 white--text text-xs-center mt-5 pt-1 primary--text">Welcome,</div>
            <div class="display-2 white--text text-xs-center ma-2 mt-5 pt-2">I'm <span class="display-3" style="color: #E31B6D;" >Bruno </span> ,</div>

            <div class="display-1  white--text  text-xs-center ma-2 mb-3" >
                Full-Stack Web Developer 
             </div>

         <v-flex  id="nav" text-xs-center class="mt-2">
        <v-btn flat round to='/about' large class="orange lighten-3  btn2 "> Explore my work  <v-icon right>work</v-icon></v-btn>
        <v-btn round to='/contact' large class="orange lighten-3  btn2"> Hire Me  <v-icon right>person</v-icon></v-btn>        
      </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.home-hero {
    background: url("../assets/back2.jpeg"); background-size: cover;
    width: 100%; height: 100%;}
    #nav .btn2 {
  position: relative;
}
#nav .btn2:after {
  position: absolute; bottom: 0; left: 0; right: 0; margin: auto;
  width: 0%; content: '.';  color: transparent;  background: rgb(223, 56, 112);
  height: 1px;
}
#nav .btn2 {
  transition: all .3s;
}
#nav .btn2:after {
  text-align: left; content: '.';  margin: 0;  opacity: 0;
}
#nav .btn2:hover {
  color:cyan;  z-index: 1;
}
#nav .btn2:hover:after {
  z-index: -10; animation: fill .37s forwards; -webkit-animation: fill .37s forwards;
  -moz-animation: fill .37s forwards;  opacity: 1;
}

/* Keyframes */
@-webkit-keyframes fill {
  0% {  width: 0%; height: 1px;  }
  50% { width: 100%;  height: 1px; }
  100% {  width: 100%; height: 100%;  background: #E31B6D; }
}
</style>