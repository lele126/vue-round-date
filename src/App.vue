<template>
  <div id="app">
	<VueRoundDate :minYear="minYear" :defaultDate="defaultDate" @dateSelected="dateSelected"></VueRoundDate>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
	  return{
		  minYear:2015,
		  defaultDate:'2018-8-8'
	  }
  },
  methods:{
	  dateSelected(date){
		  console.log(date)
	  }
  }
}
</script>

<style>
</style>
