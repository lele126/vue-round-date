import Vue from 'vue';
import RoundDateVue from './vue-round-date.vue';

var VueRoundDate = {}

VueRoundDate.install = function(Vue, options) {
	Vue.component(RoundDateVue.name, RoundDateVue)
	Vue.prototype.changeMsg = function(options) {
		// 逻辑...
		return options
	}
}

export default VueRoundDate;
