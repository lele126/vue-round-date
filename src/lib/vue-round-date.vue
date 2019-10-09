<template>
	<div>
		<div class="wrapper" ref="wrapper" :style="{width:wrapperWidth+'px'}">
			<ul class="content" :style="{width:contentWidth+'px'}">
				<li v-for="item in year" @click="yearSelected" :style="{width:liYearWidth+'px'}"><span>{{item}}</span></li>
			</ul>
		</div>
		<div class="wrapper" ref="wrapperMonth" :style="{width:wrapperWidth+'px'}" v-show="monthShow">
			<ul class="content" :style="{width:contentMonthWidth+'px'}">
				<li v-for="item in month" @click="monthSelected" :style="{width:liWidth+'px'}"><span>{{item}}</span></li>
			</ul>
		</div>
		<div class="wrapper" ref="wrapperDay" :style="{width:wrapperWidth+'px'}" v-show="dayShow">
			<ul class="content" :style="{width:contentDayWidth+'px'}">
				<li v-for="item in day" @click="daySelected" :style="{width:liWidth+'px'}"><span>{{item}}</span></li>
			</ul>
		</div>
		<div class="tooltip" @click="dateSelected">
			<div class="tooltiptext">{{currentYear}}年<span v-show="monthShow">{{currentMonth}}月</span><span v-show="dayShow">{{currentDay}}日</span></div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'VueRoundDate',
		data() {
			return {
				year: [],
				currentYear: 0,
				month: 12,
				currentMonth: 12,
				monthShow: false,
				day: 30,
				currentDay: 0,
				dayShow: false,
				wrapperWidth: 0,
				contentWidth: 0,
				contentMonthWidth: 0,
				contentDayWidth: 0,
				liWidth: 0,
				options: {
					startX: 0,
					scrollX: true,
					scrollY: false,
					eventPassthrough: "vertical",
					bounce: {
						top: false,
						bottom: false,
						left: true,
						right: true
					},
					click: true,
				}
			}
		},
		props: {
			minYear: Number,
			defaultDate:String
		},
		mounted() {
			if (this.minYear == undefined) {
				this.minYear = this.currentYear - 1
			}
			if (this.minYear < 1949) {
				this.minYear = 1949
			}
			if(this.defaultDate==undefined){
				var date = new Date();
				this.currentYear = date.getFullYear(); //获取完整的年份(4位,2017)
				this.currentMonth = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
				this.currentDay = date.getDate(); //获取当前日(1-31)
			}else{
				this.currentYear = parseInt(this.defaultDate.split('-')[0]) //获取完整的年份(4位,2017)
				this.currentMonth = parseInt(this.defaultDate.split('-')[1]) //获取当前月份(0-11,0代表1月)
				this.currentDay = parseInt(this.defaultDate.split('-')[2]) //获取当前日(1-31)
			}
			if (this.currentMonth == 1 || this.currentMonth == 3 || this.currentMonth == 5 || this.currentMonth == 7 || this.currentMonth ==
				8 || this.currentMonth == 10 || this.currentMonth == 12) {
				this.day = 31
			} else if (this.currentMonth == 4 || this.currentMonth == 6 || this.currentMonth == 9 || this.currentMonth == 11) {
				this.day = 30
			} else if (this.currentMonth == 2) {
				if (this.isLeapYear(this.currentYear)) {
					this.day = 29
				} else {
					this.day = 28
				}
			}
			let yearCount = this.currentYear - this.minYear + 1
			let yearItem = this.currentYear
			for (var i = 0; i < yearCount; i++) {
				this.year.push(yearItem)
				yearItem = yearItem - 1
			}
			this.year = this.year.reverse()
			this.wrapperWidth = document.documentElement.clientWidth
			this.liYearWidth = this.wrapperWidth / 7
			this.liWidth = this.wrapperWidth / 9
			this.contentWidth = this.wrapperWidth + this.liYearWidth * (yearCount - 7)
			this.contentMonthWidth = this.wrapperWidth + this.liWidth * (this.month - 9)
			this.contentDayWidth = this.wrapperWidth + this.liWidth * (this.day - 9)

			this.scroll = new BScroll(this.$refs.wrapper, this.options)
			this.scrollM = new BScroll(this.$refs.wrapperMonth, this.options)
			this.scrollD = new BScroll(this.$refs.wrapperDay, this.options)
			setTimeout(() => {
				this.initEle(this.$refs.wrapper, this.currentYear, 'year')
			}, 100)


		},
		methods: {
			isLeapYear(Year) {
				if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
					return true;
				} else {
					return false;
				}
			},
			initEle(wrapper, val, type) {
				var current = this
				let ul = wrapper.firstChild
				for (let index in ul.children) {
					let subLi = ul.children[index]
					if (subLi.style != undefined) {
						subLi.style.backgroundColor = '#fff'
						subLi.firstChild.style.color = '#000'
						if (subLi.firstChild.innerText == val) {
							subLi.style.backgroundColor = '#FF0000'
							subLi.firstChild.style.color = '#FF0000'
							if (type == 'year') {
								setTimeout(function() {
									current.scroll.scrollToElement(subLi, 10, true, true)
								}, 100);
							} else if (type == 'month') {
								setTimeout(function() {
									current.scrollM.scrollToElement(subLi, 10, true, true)
								}, 100);
							} else if (type == 'day') {
								setTimeout(function() {
									current.scrollD.scrollToElement(subLi, 10, true, true)
								}, 100);
							}
						}

					}
				}
			},
			yearSelected(ele) {
				this.currentYear = this.changeEle(ele)
				this.monthShow = true
				this.initEle(this.$refs.wrapperMonth, this.currentMonth, 'month')
			},
			monthSelected(ele) {
				this.currentMonth = this.changeEle(ele)
				this.dayShow = true
				this.initEle(this.$refs.wrapperDay, this.currentDay, 'day')
			},
			daySelected(ele) {
				this.currentDay = this.changeEle(ele)
			},
			changeEle(ele) {
				let span = ele.target
				let li = span.parentElement
				let ul = span.parentElement.parentElement
				for (let index in ul.children) {
					let subLi = ul.children[index]
					if (subLi.style != undefined) {
						subLi.style.backgroundColor = '#fff'
						subLi.firstChild.style.color = '#000'
					}
				}
				span.style.color = '#FF0000'
				li.style.backgroundColor = '#FF0000'
				return span.innerText
			},
			dateSelected(){
				var date = this.currentYear+'-'+this.currentMonth+'-'+this.currentDay
				this.$emit("dateSelected",date)
			}
		}
	}
</script>

<style>
	.wrapper {
		height: 45px;
		overflow: hidden;
		box-sizing: border-box;
		box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
		-webkit-box-sizing: border-box;
		-webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
		-moz-box-sizing: border-box;
		-moz-box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
		padding: 0;
		margin: 3px 0 0 0;
	}

	.content {
		height: 45px;
		list-style: none;
		padding: 0;
		margin: 0 auto;
	}

	li {
		text-align: center;
		display: inline;
		line-height: 40px;
		float: left;
		height: 40px;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}

	li>span {
		background-color: #fff;
		display: block;
		height: 38px;
		margin-top: 2px;
		-webkit-user-select: none;
		user-select: none;
	}

	li:hover {
		color: red;
		background-color: #FF0000;
	}

	.tooltip {
		position: relative;
		display: inline-block;
		width: 100%;
		text-align: center;
		margin-top: 10px;
	}

	.tooltip .tooltiptext {
		visibility: visible;
		width: 120px;
		background-color: #FFF0D5;
		color: #000;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		z-index: 1;
		margin: 0 auto;
		box-sizing: border-box;
		box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
		-webkit-box-sizing: border-box;
		-webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
		-moz-box-sizing: border-box;
		-moz-box-shadow: 0 2px 3px rgba(0, 0, 0, .12);
	}

	.tooltip .tooltiptext::after {
		content: " ";
		position: absolute;
		bottom: 100%;
		/* 提示工具头部 */
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent #FFF0D5 transparent;
	}
</style>
