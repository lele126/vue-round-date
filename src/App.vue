<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
	<VueRoundDate :msgp="msgp"></VueRoundDate>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
	  return{
		  msgp:"是",
	  }
  }
}
</script>

<style>
</style>
