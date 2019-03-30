<template>
  <div>
    <div v-for="bar in bars" class="row mb-1" :key="bar.variant">
      <div class="col-sm-2">{{ bar.variant }}:</div>
      <div class="col-sm-10 pt-1">
        <b-progress :value="bar.start" :variant="bar.variant" :key="bar.variant"></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
					barstart: 13,
        bars: [
          { variant: 'sucbruncess', value: 100  , start:10},
          { variant: 'info', value: 40  , start:10 },
          { variant: 'warning', value: 75  , start:10},
          { variant: 'danger', value: 75  , start:10},
          { variant: 'primary', value: 75 , start:10 },
          { variant: 'secondary', value: 75  , start:10},
          { variant: 'dark', value: 75  , start:10}
				],  
				 timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() => {
        this.bars.forEach(bar => (bar.start = bar.value  ))
      }, 2000)
    },
		  //   mounted() {
      // this.timer = setInterval(() => {
			// 	if (this.barstart >= bar.value) {
			// 	this.bars.forEach(bar => (bar.value ))}
			// 	if (this.barstart <= bar.value){
			// 		this.barstart += 1				}
				
      // }, 2000)
    // },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>
    // mounted () {
    //   this.interval = setInterval(() => {
    //     if (this.fvalue >= this.tvalue) {
    //       return (this.fvalue = this.tvalue)
    //     }
    //     this.fvalue += 1
    //   }, 7)
    // }

