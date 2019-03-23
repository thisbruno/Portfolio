<template>
<div>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm6>
				<div class="text-xs-cente" v-for="skill in skills" :key="skill.lang">
					<v-card class="pa-1 grey lighten-3 mb-2 mr-2" >
						<v-progress-circular 
						rotate="360"  :size="73"
							:width="7" :value="skill.progress"  color="purple" > 
						<span class="headline"> {{ skill.progress }}%</span>
				  	</v-progress-circular> 
			    	<span class="headline">{{skill.lang}}</span>
					</v-card>
				</div>				
			</v-flex>
						<v-flex xs12 sm6>
				<div class="text-xs-cente" v-for="skill in skills2" :key="skill.lang">
					<v-card class="pa-1 grey lighten-3 mb-2">
						<v-progress-circular 
						rotate="360"  :size="73"
							:width="7" :value="skill.progress"  color="purple" > 
						<span class="headline"> {{ skill.progress }}%</span>
				  	</v-progress-circular> 
			    	<span class="headline">{{skill.lang}}</span>
					</v-card>
				</div>				
			</v-flex>
		</v-layout>		
	</v-container>
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
					{lang: 'html', progress: 90 },
					{lang: 'css', progress: 80 },
					{lang: 'JavaScript', progress: 73 },
					{lang: 'Vue', progress: 70 },
					{lang: 'React', progress: 43 }
				],
				skills2 :[
					{lang: 'Node.Js', progress: 60 },
					{lang: 'Mongo DB', progress: 40 },
					{lang: 'Ui Design', progress: 70 },
					{lang: 'Photoshop', progress: 40 },
					{lang: 'Illustrator', progress: 40 }
				]
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.fvalue >= this.tvalue) {
          return (this.fvalue = this.tvalue)
        }
        this.fvalue += 1
      }, 7)
    }
  }
</script>

<style  scoped>
  .v-progress-circular
   { margin: 1rem}
</style>
