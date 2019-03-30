<template>
  <v-app class="contact ">
    <Nav></Nav>
        <h1 class="heading text-xs-center mb-3 primary--text ">Contact Details</h1>

        <v-layout row wrap> 
        <v-flex xs12 sm6 offset-sm1 class=" mt-3">
            <v-card round>
              <v-form class="mt-1 px-5 py-3 info lighten-3 " >
                <p class="subheading ml-2 primary--text text-uppercase text-xs-center">Send me a Message </p>
                 <v-text-field   style="font-size:15px; font-color:red" name="name" placeholder="Name" height='16px' v-model="name"  ></v-text-field>
               <v-text-field light  class="" style="font-size: 15px"  name="email" placeholder="Email" height='16px' v-model="email"  >  </v-text-field>
                <v-textarea  style="font-size:15px" rows='4' name="message" v-model="message" placeholder="Message"   ></v-textarea>
                 <v-btn class="info  lighten-3 primary--text" type="submit" name="name" >Send Message</v-btn> 
              </v-form>
            </v-card>
          </v-flex>                 
          
          <v-flex xs12 sm4 offset-sm1 offset-xs0 class="mt-5" >  
              <v-flex xs12 sm12 offset-sm  class="text-xs-center justify-center" >
                <v-btn class="cyan  lighten-3 font-weight-bold mb-1"> <v-icon left>phone</v-icon>
                  (+254)-70-7474-123 </v-btn>
              </v-flex>
              <v-flex xs12 sm12 md offset-sm  class="text-xs-center justify-center" >
                <v-btn class="cyan lighten-3 font-weight-bold  mb-4 text-lowercase"> <v-icon>mail</v-icon>
                  thisbruno7@gmail.com</v-btn>
              </v-flex>
              <v-flex xs12 sm12 md12 offset-sm  class="text-xs-center " >
                <div class="icon-bar">
                  <a href="#" target="_blank" class="email "><i class="fa fa-envelope"></i></a>    
                  <a href="#"  target="_blank" class="twitter "><i class="fa fa-twitter"></i></a> 
                  <a href="https://github.com/thisbruno" target="_blank" class="github"><i class="fa fa-github" ></i></a>     
                  <a href="#" target="_blank" class="linkedin"><i class="fa fa-linkedin-square" ></i></a>
                  <a href="#" target="_blank" class="slack"><i class="fa fa-slack" ></i></a>  
                </div>   
              </v-flex>
               </v-flex>
            </v-layout>
            <Footer></Footer>  
            <Hmenu/> 
  </v-app>
</template>

<script>
import Hmenu from '../components/Hmenu.vue' 
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
  export default {
    components: {
      Nav , Footer , Hmenu
    },
    data(){
      return{
      }
    },
   methods: {
    onSubmit: function () {
      console.log('message sentS')     
      $.ajax({
        url: "https://formspree.io/brplus7@gmail.com",
        method: 'POST',
        data: {
           name: this.name,
          email: this.email,
          message: this.message
        } .serialize(),
        dataType: 'json'
      }).then(function () {
        this.formSuccess = true
        this.$emit('success', true)
        console.log('message sent');
        
      })
    }
  },
    
   
  };

 


</script>
 
 <style scoped>
.icon-bar a {
  display: relative; text-align: center; padding:8px;
  margin: 2px; margin-bottom: 17px;  transition: all 0.3s ease;
  color: white; font-size: 19px; }
.icon-bar a:hover { background-color: rgb(255, 255, 255); color: black; font-size: 17px;}
.twitter { background: rgb(26, 141, 230); color: white;}
.linkedin { background: #f5076a;  color: white;}
.github { background: #252627;  color: rgb(255, 255, 255);}
.slack { background: #595bca; color: white;}
.email { background: #d60857; color: rgb(82, 7, 7);}
.ccard:hover{ background-color: rgb(143, 248, 183);
 border: #f5076a 2px solid; height: 33px;
 padding: 7px; font-weight: bolder;}
.ccard{ background-color: rgb(143, 248, 183);}
.contact{  background-color: #252934;}
 </style>
 