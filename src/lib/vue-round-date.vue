<template>
	<div>{{msg}}<button @click="changeM">点击</button>
	</div>
</template>

<script>
	export default {
		name: 'VueRoundDate',
		data() {
			return {
				msg: '我'
			}
		},
		props: {
			msgp: {
				default: "",
				type: String
			},
		},
		methods: {
			changeM: function() {
				//这里的this.doubleNumber()方法就是上面写的组件里的方法
				this.msg = this.changeMsg(this.msgp);
			}
		}
	}
</script>

<style>
</style>
