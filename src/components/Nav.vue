<template>
  <v-card >
    <v-toolbar  color="orange lighten-3" height='73'  >
      
      <!-- side drawer btn -->
      <v-toolbar-side-icon   @click="sideNav=!sideNav" scroll-toolbar-off-screen 
      class="hidden-md-and-up "> 
      </v-toolbar-side-icon> 
      <router-link to="/"><img class="" height="73" contain src='../assets/fav.jpg' /></router-link>

      <v-spacer></v-spacer> 
      <span v-for="link in menuItems" :key="link.title" class="hidden-xs-and-down " > 
        <v-btn flat  color='orange lighten-5'   router :to='link.route'>
            <v-icon  class="  purple--text">{{link.icon}}</v-icon>
          <span  class="red--text text--darken-4 font-weight-bold pl-1">{{link.title}}</span>
        </v-btn>       
      </span>

       

  

    </v-toolbar>

    <!-- the side-nav links -->
    <v-navigation-drawer app v-model="sideNav" temporary  class="yellow lighten-4 " style="margin-top : 73px">
      <v-list>
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

