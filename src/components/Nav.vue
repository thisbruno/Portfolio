<template>
  <v-card >
    <v-toolbar  light  app color="cyan" height='83' >   
      <router-link to="/"><img class="red" height="80" contain src='../assets/fav.jpg' /></router-link>

      <v-spacer></v-spacer> 

      <!-- class="hidden-sm-and-down " -->
      <span v-for="link in menuItems" :key="link.title" id="nav"  > 
        <v-btn  flat large class=" darken-2  btn2"   router :to='link.route'>
            <!-- <v-icon  class="  purple--text">{{link.icon}}</v-icon> -->
          <span  class="font-weight-bold  toolbar-link pl-1">{{link.title}}</span>
        </v-btn>       
      </span>
       <v-spacer></v-spacer> 

    </v-toolbar>
    <!-- the side-nav links -->
      
  </v-card>
</template>


<script>
  
export default { 

  data() {
    return{

    menuItems :[
       {  icon:'person', title : "Home", route:"/" },
      {  icon:'supervisor_account', title : "About", route:"/about" },
      {  icon:'person', title : "Skills", route:"/skills" },
      {  icon:'person', title : "Portfolio", route:"/portfolio" },
      {  icon:'person', title : "Contact", route:"/contact" },
        ]   
    }
  },   
  }

</script>

<style scoped>
.toolbar-link{
  font-size: 23px;
}

#nav .btn2 {
  position: relative;
}
#nav .btn2:after {
  position: absolute; bottom: 0; left: 0; right: 0; margin: auto;
  width: 0%; content: '.';  color: transparent;  background: rgb(223, 56, 112);
  height: 1px;
}
#nav .btn2 {
  transition: all .037s;
}
#nav .btn2:after {
  text-align: left; content: '.';  margin: 0;  opacity: 0;
}
#nav .btn2:hover {
  color: cyan;  z-index: 1;
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


