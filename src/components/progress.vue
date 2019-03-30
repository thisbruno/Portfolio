<template>
<div>
	<v-layout row wrap class="primary lighten-5 " >
		<v-flex xs12 text-xs-center class="cyan lighten-4 mt-1 mx-1 pt-2">
			<h2>DASHBOARD</h2>
	  </v-flex>
		<v-flex xs12 sm6>
			<div>
					<v-card round class=" cyan lighten-4 ma-2 pa-1 " v-for="skill in skills" :key="skill.lang" >
						<v-progress-circular  
						rotate="360"  :size="53"
		      	:width="5" :value="skill.start"  color="blue darken-5" > 
						<span class="black--text darken-5"> {{ skill.progress }}%</span>
				  	</v-progress-circular> 						 
			    	<span class="headline black--text body-2 font-weight-bold" style=""> -  {{skill.lang}}</span>
					</v-card>
				</div>
		</v-flex>
			<v-flex xs12 sm6>
			<div>
					<v-card round class=" cyan lighten-4 ma-2 pa-1 " v-for="skill in skills2" :key="skill.lang" >
						<v-progress-circular  
						rotate="360"  :size="53"
							:width="5" :value="skill.start"  color="blue darken-5" > 
						<span class="black--text darken-5"> {{ skill.start }}%</span>
				  	</v-progress-circular> 						 
			    	<span class="headline black--text darken-5 body-2 font-weight-bold"> -  {{skill.lang}}</span>
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
					{lang: 'HTML', progress: 90  , start: 0},
					{lang: 'CSS', progress: 80 , start: 0 },
					{lang: 'JavaScript', progress: 73 , start: 0 },
					{lang: 'Vue', progress: 70  , start: 0},
					{lang: 'React', progress: 57 , start: 0 }
				],
				skills2 :[
					{lang: 'Node.Js', progress: 60 , start: 0 },
					{lang: 'Mongo DB', progress: 40 , start: 0 },
					{lang: 'UI Design', progress: 70  , start: 0},
					{lang: 'Photoshop', progress: 40 , start: 0 },
					{lang: 'Illustrator', progress: 40 , start: 0 }
				],
				timer: null
      }
    },
 
		    mounted() {
      this.timer = setInterval(() => {
        this.skills.forEach(skill => ( skill.start = skill.progress ))
			}, 730),
			      this.timer = setInterval(() => {
        this.skills2.forEach(skill => ( skill.start = skill.progress ))
			}, 730)
    },
	    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
    }
  
</script>
