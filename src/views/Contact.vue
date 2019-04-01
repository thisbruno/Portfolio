<template>
  <v-app class="contact ">
    <Nav></Nav>
        <v-layout row wrap justify-space-between> 
        <v-flex xs12 sm6 md4 offset-sm1 class=" mt-3">
            <v-card round>
             <v-form class="mt-1 px-5 py-3 cyan lighten-3 pageclip-form "
               action="https://send.pageclip.co/gOf5il7pwKwOvgYn2k0IWWmZFob8Ju2f"  
               method="post" ref="form"   v-model="valid"  lazy-validation>

           <v-layout column align-center>
            <div class="headline font-weight-bolder text-uppercase py-3 " justify-center>   
              <vue-typer  :text='[" Send Me a Message " ]' :repeat='2'  :shuffle='false'  initial-action='typing'  :pre-type-delay='73'  :type-delay='103' :pre-erase-delay='1270' :erase-delay='37'  erase-style='backspace'  :erase-on-complete='false'  caret-animation='blink' > span
              </vue-typer> </div>   </v-layout>      
            <v-flex xs12  ma-0>
              <v-layout  row wrap justify-space-between>
                <v-flex xs12 sm5>
                <v-text-field outline style="font-size:19px; font-color:red" name="Name"
                  required  label="NAME" :rules='messageRules' height='12px' >
                </v-text-field>
                </v-flex>
               <v-flex xs12 sm6>
                  <v-text-field light  style="font-size: 19px"  name="_replyto" required label="E-MAIL" outline height='12px'  :rules="emailRules"   >  </v-text-field>
                </v-flex>
               <v-flex xs12 >
                  <v-text-field light style="font-size: 19px"  name="Subject" required label="SUBJECT" outline height='12px' :rules='messageRules'    >  </v-text-field>
                </v-flex>
                
                <v-flex xs12>
                <v-textarea  style="font-size:19px" rows='6' name="message" :rules='messageRules'  required label="MESSAGE" outline  >                
                 </v-textarea>  
                </v-flex>
              </v-layout>
             </v-flex>            
             <v-flex xs12>             
             </v-flex>
              <v-btn raised class="info  lighten-3 primary--text pageclip-form__submit" type="submit"  :disabled="!valid"  @click="theSubmit"  >
              <span>Send</span></v-btn> 
              </v-form>
            </v-card>
            </v-flex>        
           <v-flex xs12 sm4 md3   class="mt-5"  justify-space-around >  
              <v-layout row wrap justify-space-around>
        
               <v-flex xs12 sm12>
                   <div class="card ">
                      <div class="card-body info-box font-weight-bold">
                        <p class='text--cyan'><v-icon  left>person</v-icon> Nairob&iacute;, Kenya.</p>
                        <p> <v-icon class='text--cyan' left>mail</v-icon> <a class="font-weight-bold" href="mailto:thisbruno7@gmail.com">thisbruno7@gmail.com</a></p>
                        <p><v-icon class='text--cyan' left>person</v-icon>  <a class="font-weight-bold" href="https://github.com/thisbruno">github.com/thisbruno</a></p>
                        <p><v-icon class='text--cyan' left>phone</v-icon> (+254)-70-7474-123</p>
                    </div>
                 </div>
               </v-flex>
              </v-layout>
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
      Nav , Footer ,
    },
    data(){
      return{
        name: '' , email : '' , message : "",
         valid: true, 
         email: '',
         emailRules: [
            v => !!v || 'e-mail required',
           v => /.+@.+/.test(v) || 'e-mail not valid' ],
           messageRules: [
             v => !!v || '***'
           ] 
           
           } },
   methods: {
     theSubmit() {
       if(this.$refs.form.validate()){
        var form = document.querySelector('.pageclip-form')
        Pageclip.form(form, {
          onSubmit: function (event) { },
          onResponse: function (error, response) { },
          successTemplate:` <span >
          <div class="text-xs-center headline primary--text headline pa-5 cyan"> Message Sent Succesfully !!!</div> <br> <br>  </span> `
       })  
     }
     }    
  },  
  }
</script>
 
 <style scoped>
.icon-bar a {
  display: relative; text-align: center; padding:8px;
  margin: 13px; margin-bottom: 17px;  transition: all 0.3s ease;
  color: white; font-size: 29px; }
.icon-bar a:hover { background-color: rgb(0, 248, 0); color: black; font-size: 31px;}
.twitter { background: rgb(26, 141, 230); color: white;}
.linkedin { background: #f5076a;  color: white;}
.github { background: #252627;  color: rgb(255, 255, 255);}
.ccard:hover{ background-color: rgb(143, 248, 183);
 border: #f5076a 2px solid; height: 33px;
 padding: 7px; font-weight: bolder;}
.ccard{ background-color: rgb(143, 248, 183);}
.contact{  background-color: #252934;
    background: url("../assets/contact2.jpg"); background-size: cover;
    width: 100%; height: 110%; color: #E31B6D }
  i.info-item {
    margin-right: 10px;
    color:  #E31B6D;
  }
  .info-box p{
    font-size: 14pt;
  }
  .info-box > p > a {
    text-decoration: none;
    color:  #E31B6D;
    font-size: 15pt
  }

  .info-box a.btn {
    margin-top: -30px;
  }
 </style>
 