<template>
<div>
	<v-layout  wrap class="primary lighten-5 "  align-center>
		<v-flex xs12 text-xs-center class="cyan lighten-4 mt-1 mx-1 pt-2">
            <v-layout column align-center >                
             <v-card justify-center flat   class="headline py-3 font-weight-bold text-xs-center  cyan lighten-4 " >
            <vue-typer  
                  :text='["DASHBOARD"]'
                  :repeat='1'  :shuffle='false'  initial-action='typing'
                  :pre-type-delay='73'  :type-delay='193' :pre-erase-delay='1270'
                  :erase-delay='137'  erase-style='backspace'  :erase-on-complete='false'
                  caret-animation='blink' >
            </vue-typer>     
             </v-card>
             </v-layout> 
			
	  </v-flex>
		<v-flex xs12 sm6>
			<div>
					<v-card round class=" cyan lighten-4 ma-2 px-2 py-3 " v-for="skill in skills" :key="skill.lang" >
						<v-progress-circular  
						rotate="360"  :size="53"
		      	:width="5" :value="skill.start"  color="blue darken-5" > 
						<span class="black--text "> {{ skill.progress }}%</span>
				  	</v-progress-circular> 						 
			    	<span class="title black--text font-weight-bold" style=""> -  {{skill.lang}}</span>
					</v-card>
				</div>
		</v-flex>
			<v-flex xs12 sm6>
			<div>
					<v-card round class=" cyan lighten-4 ma-2 px-2 py-3 " v-for="skill in skills2" :key="skill.lang" >
						<v-progress-circular  
						rotate="360"  :size="53"
		      	:width="5" :value="skill.start"  color="blue darken-5" > 
						<span class="black--text "> {{ skill.progress }}%</span>
				  	</v-progress-circular> 						 
			    	<span class="title black--text font-weight-bold" style=""> -  {{skill.lang}}</span>
					</v-card>
				</div>
		</v-flex>
	</v-layout>		
</div>	
</template>

<script>
  export default {
    data () {
      return {
        interval: {},
				skills :[
					{lang: 'HTML5 & CSS3', progress: 80  , start: 0},
					{lang: 'JavaScript', progress: 73 , start: 0 },
					{lang: 'Vue', progress: 70  , start: 0},
					{lang: 'React', progress: 57 , start: 0 },
					{lang: 'Node.JS', progress: 60 , start: 0 }
				],
				skills2 :[
					{lang: 'Mongo DB', progress: 40 , start: 0 },
					{lang: 'WordPress', progress: 40 , start: 0 },
					{lang: 'FireBase', progress: 70 , start: 0 },
					{lang: 'UI/UX Design', progress: 70  , start: 0},
					{lang: 'Photoshop', progress: 40 , start: 0 }
				],
				timer: null
      }
    },
 
		    mounted() {
      this.timer = setInterval(() => {
        this.skills.forEach(skill => ( skill.start = skill.progress ))
			}, 1230),
			      this.timer = setInterval(() => {
        this.skills2.forEach(skill => ( skill.start = skill.progress ))
			}, 1230)
    },
	    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
    }
  
</script>
