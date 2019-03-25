<template>
<v-app  class="info">
  <Nav></Nav>
<div class="pt-5">
  <v-layout row wrap>
    <v-flex xs12 sm8 md8 offset-md0 class="text-xs-center text-sm-left mb-3">
      
     <v-flex xs12 sm10 offset-sm1 offset-md-2>       
       <div class="headline highlight">Hello,</div> <br>
      <div class="headline white--text">I'm <span class="highlight"> Bruno Kibura</span> ,  a fullstack developer based in Nairobi , Kenya</div> <br>  
      
     </v-flex>
       <v-flex xs10 offset-sm0>
       <div class="title white--text ma-3 mb-4 pt-5">
          I'm available for remote work - if you would like to build something together, 
        <router-link to= '/contact' tag="span" class="orange--text intouch" style="cursor: pointer">get in touch ?</router-link>
       </div>
    </v-flex>



    </v-flex>
      <v-flex xs12 sm4  md3 offset-md1 class="text-xs-center mb-2 pb-3">
        
         <div class="testimonial-quote group mt-3 ">
        <img src='../assets/me.jpg'>
        <div class="quote-container">
            <blockquote>
                <p>I've always been drawn to the overlap between design and development. My skills are broad: from ux to design, front end to back end development.”</p>
            </blockquote>  
           <hr style="margin-top: 37px auto; opacity: 5;">
           </div>

               <v-flex  xs11 sm8  md6 offset-sm2 class="ma-2 pt-5">
       <v-card class="info lighten-3 mb-2">
         <v-card-title class="highlight title justify-center">THIS IS WHAT I DO</v-card-title>
       </v-card>
        </v-flex>  
        
        <v-flex  xs11 sm8 md6 class="ma-2 ">
       <v-card class="info lighten-3 mb-2">
         <v-card-title class="info--text title">Front-End</v-card-title>
         <v-card-text class="subheading mt-0 pt-0">, DataViz</v-card-text>
       </v-card>
        </v-flex>

       <v-flex  xs11 sm8 md6 class="ma-2">
       <v-card class="info lighten-3 mb-2">
         <v-card-title class="info--text title"></v-card-title>
         <v-card-text class="subheading mt-0 pt-0"></v-card-text>
       </v-card>
        </v-flex>
       <v-flex  xs11 sm8 md6 class="ma-2">
         <v-card class="info lighten-3">
         <v-card-title class="info--text title">Design</v-card-title>
         <v-card-text class="subheading mt-0 pt-0">UX, UI, Web-Apps, Logos</v-card-text>
       </v-card>
     </v-flex>
    </div>         
    </v-flex>  
  </v-layout>

  <v-layout>
    <v-flex xs12 sm6>



    </v-flex>    
    

  </v-layout>





   <v-layout row wrap>

   </v-layout>
  
</div>
 <Footer class="mt-3"></Footer>
</v-app>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'


  export default {
    components: {
      Nav, Footer
    
    }
  }
</script>

<style scoped>
.highlight {
  color: #E31B6D; }
.contact{
    background-color: rgb(134, 110, 175);
}

.testimonial-quote {
  font-size: 14px;
}
.testimonial-quote blockquote {
  /* Negate theme styles */
  border: 0;
  margin: 0;
  padding: 0;
  background: none;
  color: white;
  font-family: Georgia, serif;
  font-size: 1.5em;
  font-style: italic;
  line-height: 1.4 !important;
  margin: 0;
  position: relative;
  text-shadow: 0 1px rgb(0, 0, 0);
  z-index: 600;
}

.testimonial-quote blockquote * {
  box-sizing: border-box;
}

.testimonial-quote blockquote p {
  color: #75808a;
  line-height: 1.2 !important;
}

.testimonial-quote blockquote p:first-child:before {
  content: '\201C';
  color: #81bedb;
  font-size: 7.5em;
  font-weight: 700;
  opacity: .3;
  position: absolute;
  top: -.4em;
  left: -.2em;
  text-shadow: none;
  z-index: -300;
}

.testimonial-quote img {
  border: 3px dotted rgb(243, 156, 197);
  border-radius: 50%;
  display: block;
  width: 120px;
  height: 120px;
  position: absolute;
  top: -.2em;
  left: 0;
}
.testimonial-quote {
  position: relative;
}

.testimonial-quote .quote-container {
  padding-left: 120px;
}

.testimonial-quote.right .quote-container {
  padding-left: 0;
  padding-right: 16px;
}

.testimonial-quote.right img {
  left: auto;
  right: 0;
}
</style>

