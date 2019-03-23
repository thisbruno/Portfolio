<template>
  <v-card >
    <v-toolbar  light  app color="cyan" height='83'
     >
   
      <router-link to="/"><img class="red" height="80" contain src='../assets/fav.jpg' /></router-link>

      <v-spacer></v-spacer> 
      <span v-for="link in menuItems" :key="link.title" class="hidden-sm-and-down " > 
        <v-btn flat large class="black--text darken-2"   router :to='link.route'>
            <!-- <v-icon  class="  purple--text">{{link.icon}}</v-icon> -->
          <span  class="font-weight-bolder subheading pl-1">{{link.title}}</span>
        </v-btn>       
      </span>
       <v-spacer></v-spacer> 

             <!-- side drawer btn -->
      <v-toolbar-side-icon   @click="sideNav=!sideNav" scroll-toolbar-off-screen 
      class="hidden-md-and-up "></v-toolbar-side-icon> 
      

  

    </v-toolbar>
  

    <!-- the side-nav links -->
    <v-navigation-drawer app v-model="sideNav" temporary  class="yellow lighten-4 " >
      <v-list>
       <div class="pl-3 py-1 red black--text">
        <h1 class="display-1">Bruno , </h1>
        <h1 class="headline">Welcomes You .</h1>
       </div>
        <v-list-tile v-for='link in menuItems' :key="link.title" router :to= "link.route" @click="sideNav=false" class="mt-1">
          <v-list-tile-action>
            <v-icon class="  purple--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="red--text text--darken-4 ">{{link.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>   
    </v-navigation-drawer>
     
  </v-card>
</template>

<script>
export default {
  
  data() {
    return{
      sideNav: false,
    menuItems :[
       {  icon:'person', title : "Home", route:"/" },
      {  icon:'supervisor_account', title : "About", route:"/about" },
      {  icon:'person', title : "Portfolio", route:"/portfolio" },
      {  icon:'person', title : "Skills", route:"/skills" },
      {  icon:'person', title : "Contact", route:"/contact" },
        ]     
    }
  },
    
    
  }

</script>

