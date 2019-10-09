<template>
  <div id="app">
	<VueRoundDate :minYear="minYear" :defaultDate="defaultDate" :content="content" @dateSelected="dateSelected"></VueRoundDate>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
	  return{
		  minYear:2005,
		  defaultDate:'2018-8-8',
		  content:'test<br>test'
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
