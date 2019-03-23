<template>
<div>
	<v-layout row wrap >
		<v-flex xs12 sm6>
			<div>
					<v-card class=" cyan lighten-5 ma-2 " v-for="skill in skills" :key="skill.lang" >
						<v-progress-circular  
						rotate="360"  :size="57"
							:width="7" :value="fvalue"  color="blue darken-5" > 
						<span class="black--text darken-5"> {{ skill.progress }}%</span>
				  	</v-progress-circular> 						 
			    	<span class="headline blue--text darken-5">{{skill.lang}}</span>
					</v-card>
				</div>
		</v-flex>
			<v-flex xs12 sm6>
			<div>
					<v-card class=" cyan lighten-5 ma-2 " v-for="skill in skills2" :key="skill.lang" >
						<v-progress-circular  
						rotate="360"  :size="57"
							:width="7" :value="skill.progress"  color="blue darken-5" > 
						<span class="black--text darken-5"> {{ skill.progress }}%</span>
				  	</v-progress-circular> 						 
			    	<span class="headline blue--text darken-5">{{skill.lang}}</span>
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
				fvalue: 13,
				tvalue: 73,
				skills :[
					{lang: 'HTML', progress: 90 },
					{lang: 'CSS', progress: 80 },
					{lang: 'JavaScript', progress: 73 },
					{lang: 'Vue', progress: 70 },
					{lang: 'React', progress: 57 }
				],
				skills2 :[
					{lang: 'Node.Js', progress: 60 },
					{lang: 'Mongo DB', progress: 40 },
					{lang: 'UI Design', progress: 70 },
					{lang: 'Photoshop', progress: 40 },
					{lang: 'Illustrator', progress: 40 }
				]
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
		},
		methods:{
			progress(){
				 this.interval = setInterval(() => {
        if (this.fvalue >= this.tvalue) {
          return (this.fvalue = this.tvalue)
        }
        this.fvalue += 1
      }, 7)
			}

		},
    mounted () {
      this.progress()
    }
  }
</script>