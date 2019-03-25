<template>
  <v-app class="contact ">
    <Nav></Nav>
        <h1 class="display-2 text-xs-center mb-3 white--text ">Contact Details</h1>

        <v-layout>
          <v-flex xs12 sm6 md4  offset-sm3 offset-md4 >
            <v-card  class="pa-3 cyan lighten-3 " >                
                <span class="pt-3 pb-4 px-3 title primary--text text-xs-center justify-center" >  
                  <v-icon class="primary--text left " large >phone</v-icon>  
                  (+254) 70 - 7474 - 123 </span>              
            </v-card>
          </v-flex>
        </v-layout>


        <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 class="mt-3 ">
            <v-card round>
              <v-form class="mt-3 px-5 py-3 info lighten-3 " >
                <p class="headline ml-2 primary--text text-uppercase text-xs-center">Send me a Message </p>
                 <v-text-field   style="font-size:23px" name="name" placeholder="Name" height='27px' v-model="name"  ></v-text-field>
               <v-text-field light  class="" style="font-size: 23px"  name="email" placeholder="Email" height='27px' v-model="email"  >  </v-text-field>
                <v-textarea  style="font-size:23px" name="message" v-model="message" placeholder="Message"   ></v-textarea>
                 <v-btn class="info  lighten-3 primary--text" type="submit" name="name" >Send Message</v-btn>       <span><v-card>ds n</v-card></span>         
              </v-form>
            </v-card>
          </v-flex>                 
          </v-layout>


          <v-layout class="mt-4 mb-5">            
          <v-flex xs12 sm6 offset-sm4 offset-xs2 >        
              <div class="icon-bar">
              <a href="#" class="email"><i class="fa fa-envelope"></i></a>    
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
               <a href="#" class="github"><i class="fa fa-github" ></i></a>     
               <a href="#" class="linkedin"><i class="fa fa-linkedin-square" ></i></a>
               <a href="#" class="slack"><i class="fa fa-slack" ></i></a>  
                </div> 
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
      Nav , Footer
    },
    data(){
      return{
       name: null,
      message: null,
      email: null,
      contacts:
      [{ icon:"person", detail:"@amkibura"},
      { icon:"phone", detail:"(+254) 70 - 7474 - 123"},
      { icon:"mail", detail:"amkibura@gmail.com"}
      ]
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
  display: relative;
  text-align: center;
  padding: 5px;
  margin-right: 27px;
  transition: all 0.3s ease;
  color: white;
  font-size: 37px;
}
.icon-bar a:hover {
  background-color: rgb(255, 9, 9);
  font-size: 53px;
}
.twitter {
  background: rgb(26, 141, 230);
  color: white;
}
.linkedin {
  background: #f5076a;
  color: white;
}.github {
  background: #252627;
  color: white;
}.slack {
  background: #595bca;
  color: white;
}
.email {
  background: #d60857;
  color: rgb(82, 7, 7);
}
.ccard:hover{
 background-color: rgb(143, 248, 183);
 border: #f5076a 2px solid;
 height: 93px;
 padding: 7px;
 font-weight: bolder;
}
.ccard{
 background-color: rgb(143, 248, 183);
}
.contact{ 
   background-color: rgb(23, 15, 37);
}

 </style>
 