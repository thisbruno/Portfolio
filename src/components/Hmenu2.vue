<template>
<v-app>
<v-layout >
  <v-flex xs12>
    <button @click="onClick" class="menu-toggle"></button>
  </v-flex>
</v-layout>
<nav>
  <h1>Welcome </h1>
  <ul class="menu py-0 my-0">
    <router-link to="/"><li data-text="Home" >Home</li></router-link>
    <router-link to="/about"><li data-text="About Me" >About</li></router-link>
    <router-link to="/skills"><li data-text="Skills" >skills</li></router-link>
    <router-link to="/portfolio"><li data-text="Portfolio" >portfolio</li></router-link>
    <router-link to="/contact"><li data-text="Contact Me" >Contact</li></router-link>   
  </ul>
</nav>
</v-app>
</template>

<script>
  export default {
    methods:{
      onClick: function(){
  $('body').toggleClass('open');}}}  
</script>

<style scoped>
@charset "UTF-8";
ul { list-style: none; margin: 0; padding: 0;}

ul li { cursor: pointer; padding: 7px 27px; font-size: 43px;}

button {  opacity: 1.6; background-color: transparent;
  position: fixed; z-index: 2; top: 27px; right: 24px;  border: none; width: 37px; height: 31px;  outline: none;  transition: opacity 0.2s ease-out;}

button:before {   content: "";  position: absolute;   top: 0;  right: 0;
  bottom: 0;  left: 0;  margin: auto;  right: auto;  width: 100%;
  background: linear-gradient(to bottom, #E31B6D, #E31B6D 20%, transparent 20%, transparent 40%, #E31B6D 40%, #E31B6D 60%, transparent 60%, transparent 80%, #E31B6D 80%, #E31B6D 100%); transition: opacity 0.2s ease-out, width 0.2s 0.2s ease-out;}

button:after {  opacity: 0; content: '×';  color: #E31B6D;  position: absolute;  top: 16px; left: -4px;  font-family: Arial, sans-serif;  font-size: 76px;  line-height: 0;  transition: opacity 0.4s ease-out;}

button:active {  -webkit-transform: translateY(2px); transform: translateY(2px);}
button:hover {  opacity: 1;}
.open button { opacity: 1;}
.open button:before {  opacity: 0;  width: 0;}
.open button:after {  opacity: 1;  -webkit-transform: translate3d(0, 0, 0) rotate(360deg);
   transform: translate3d(0, 0, 0) rotate(360deg);  transition: opacity 0.4s 1s ease-out, -webkit-transform 0.4s 1s ease-out;
  transition: transform 0.4s 1s ease-out, opacity 0.4s 1s ease-out;  transition: transform 0.4s 1s ease-out, opacity 0.4s 1s ease-out, -webkit-transform 0.4s 1s ease-out;}

nav {  z-index: 1;  position: fixed;  top: -100%;  left: 0;  width: 100%;  height: 100%;
  -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden; backface-visibility: hidden;  overflow: hidden;}
nav:before { content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;
  background: rgb(33, 240, 240); width: 100%; height: 0;  padding-bottom: 100%;
  border-radius: 100%; -webkit-transform: scale(0.04), translateY(9999px);  transform: scale(0.04), translateY(9999px); overflow: hidden;}
.open nav {  top: 0;}

.open nav:before {  -webkit-animation: menu-animation 0.8s ease-out forwards; animation: menu-animation 0.8s ease-out forwards;}

ul.menu { position: fixed;  top: 37%;  left: 50%;  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;  -webkit-perspective: 1000; perspective: 1000;
  color: rgb(27, 235, 8);}

ul.menu li { opacity: 0; text-align: center; -webkit-transform: translate3d(0, 36px, 0);
   transform: translate3d(0, 36px, 0);}
ul.menu li:before {  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  left: auto;
  background-color:rgb(23, 15, 37);
  height: 100%;
  width: 0;
  overflow: hidden;
  transition: width 0.14s ease-out;
}
ul.menu li:after {
  opacity: 0;
  content: attr(data-text);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: cyan;
  overflow: hidden;
  -webkit-transform: translate(-24px, 6px);
          transform: translate(-24px, 6px);
  transition: opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out, -webkit-transform 0.1s ease-out;
}
ul.menu li:hover:before {
  left: 0;
  right: auto;
  width: 100%;
}
ul.menu li:hover:after {
  opacity: 1;
  padding: 0 20px;
  -webkit-transform: translate(0px, 6px);
          transform: translate(0px, 6px);
  transition: opacity 0.2s 0.14s ease-out, -webkit-transform 0.2s 0.14s ease-out;
  transition: transform 0.2s 0.14s ease-out, opacity 0.2s 0.14s ease-out;
  transition: transform 0.2s 0.14s ease-out, opacity 0.2s 0.14s ease-out, -webkit-transform 0.2s 0.14s ease-out;
}
.open ul.menu li {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
  transition: transform 0.2s ease-out, opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;
}
.open ul.menu li:nth-child(1) {
  transition-delay: 0.75s;
}
.open ul.menu li:nth-child(2) {
  transition-delay: 0.85s;
}
.open ul.menu li:nth-child(3) {
  transition-delay: 0.95s;
}
.open ul.menu li:nth-child(4) {
  transition-delay: 1.05s;
}

@-webkit-keyframes menu-animation {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.04) translateY(300%);
            transform: scale(0.04) translateY(300%);
  }
  40% {
    -webkit-transform: scale(0.04) translateY(0);
            transform: scale(0.04) translateY(0);
    transition: ease-out;
  }
  40% {
    -webkit-transform: scale(0.04) translateY(0);
            transform: scale(0.04) translateY(0);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(0.02) translateY(0px);
            transform: scale(0.02) translateY(0px);
  }
  61% {
    -webkit-transform: scale(0.04);
            transform: scale(0.04);
  }
  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }
  100% {
    -webkit-transform: scale(2);
            transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
}

@keyframes menu-animation {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.04) translateY(300%);
            transform: scale(0.04) translateY(300%);
  }
  40% {
    -webkit-transform: scale(0.04) translateY(0);
            transform: scale(0.04) translateY(0);
    transition: ease-out;
  }
  40% {
    -webkit-transform: scale(0.04) translateY(0);
            transform: scale(0.04) translateY(0);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(0.02) translateY(0px);
            transform: scale(0.02) translateY(0px);
  }
  61% {
    -webkit-transform: scale(0.04);
            transform: scale(0.04);
  }
  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }
  100% {
    -webkit-transform: scale(2);
            transform: scale(2);
    height: 99%;
    padding-bottom: 0;
    border-radius: 0;
  }
}

</style>
