<template>
  <v-app class="contact ">
    <Nav></Nav>
        <h1 class="display-2 primary--text text-xs-center mb-3 mr-5">Contacts</h1>


        <v-layout row wrap>
              <v-flex xs12 sm4 offset-sm0 class="mt-5 mb-3">  
            <v-card  class="mb-2 ccard" hover v-for="item in contacts"  :key="item.detail">
              <v-layout row wrap class="pa-3">
                <v-flex xs2>
                  <v-icon left  class="pa-2 info--text">{{item.icon}}</v-icon>
                </v-flex>
                <v-flex xs8 offset-sm1>
                    <span class="headline primary--text"> {{item.detail}}</span>
                </v-flex>
              </v-layout>              
            </v-card>
   
          </v-flex>



          <v-flex xs12 sm6 offset-sm1 >
            <v-card round>
              <v-form class="mt-3 px-2 py-3 ccard1 " >
                <p class="title ml-2 primary--text">Send me a Message </p>
                 <v-text-field   style="font-size: 23px color:yellow" name="name" placeholder="Name" height='27px' v-model="name" outline ></v-text-field>
               <v-text-field light  class="" style="font-size: 23px"  name="email" placeholder="Email" height='27px' v-model="email" outline >  </v-text-field>
                <v-textarea  style="font-size:23px" name="message" v-model="message" placeholder="Message"  outline ></v-textarea>
                 <v-btn class="info  darken-3 p" type="submit" name="name" >Send Message</v-btn>                
              </v-form>
            </v-card>
          </v-flex>
                     

          </v-layout>


          <v-layout>            
          <v-flex xs12 sm6 offset-xs4 class="mt-4">        
              <div class="icon-bar">
                  <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
                  <a href="#" class="github"><i class="fa fa-github" ></i></a>     
                  <a href="#" class="linkedin"><i class="fa fa-linkedin-square" ></i></a>
                  <a href="#" class="slack"><i class="fa fa-slack" ></i></a>                  
                </div> 
            </v-flex>
            </v-layout>


    
  </v-app>
</template>

<script>
import Nav from '../components/Nav.vue'
  export default {
    components: {
      Nav 
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
/* Style the icon bar links */
.icon-bar a {
  display: relative;
  text-align: center;
  padding: 5px;
  margin-right: 27px;
  transition: all 0.3s ease;
  color: white;
  font-size: 37px;
}

/* Style the social media icons with color, if you want */
.icon-bar a:hover {
  background-color: rgb(34, 32, 34);
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
.ccard1{
 background-color: rgb(143, 248, 183);
}
.contact{
 
   background-color: rgb(23, 15, 37);
}

 </style>
 