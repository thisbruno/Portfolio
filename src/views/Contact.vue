<template>
  <v-container>
    <Nav></Nav>
    <h1 text-xs-center class="underline">Contact</h1>
    <v-flex text-xs-center class="underline">
      <h1 class="display-1" style="font-style: underline">Contact</h1>
      </v-flex>
<br>
    <v-layout row wrap> 
     <v-flex xs12 sm6 md6 offset-sm1
 >
       <p class="headline ml-2">Send me a Message </p>
      </v-flex>
    </v-layout>
   
    <!-- action="https://formspree.io/brplus7@gmail.com" -->
    <v-layout>
      <v-flex xs12 sm6>
        <v-card raised class="primary lighten-5 pa-1">
          <v-form  method="POST" id="theform" v-on:submit.prevent="onSubmit" >     
            <v-layout row wrap >
                <v-flex xs12 >
                  <v-text-field class="primary lighten-5 pa-1" light  style="font-size: 23px" name="name" placeholder="Name" height='27px' v-model="name" box ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
            <v-flex xs12 >
            <v-text-field light  class="primary lighten-5 pa-1" style="font-size: 23px"  name="email" placeholder="Email" height='27px' v-model="email" box >
              
            </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 >
            <v-textarea class="primary lighten-5 pa-1"  style="font-size: 23px" name="message" v-model="message" placeholder="Message"  box ></v-textarea>
            </v-flex>
          </v-layout>        
          
          <v-layout row wrap>
            <v-flex xs12 >
          <v-btn class="primary" type="submit" name="name" >Send</v-btn>
            </v-flex>
          </v-layout> 
        </v-form>
      </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        

      </v-flex>
    </v-layout>





  </v-container>
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
      email: null
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
 #theform {
   /* border: 2px solid grey; */
   padding: 7px;
}
 </style>
 