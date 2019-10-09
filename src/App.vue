<template>
  <div id="app">
	<VueRoundDate :windowWidth="windowWidth" :minYear="minYear" :defaultDate="defaultDate" :content="content" @dateSelected="dateSelected"></VueRoundDate>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
	  return{
		  minYear:2005,
		  defaultDate:'2018-8-8',
		  content:'test<br>test',
		  windowWidth:document.documentElement.clientWidth-15,
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
