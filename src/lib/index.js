import Vue from 'vue';
import RoundDateVue from './vue-round-date.vue';

var VueRoundDate = {}

VueRoundDate.install = function(Vue, options) {
	Vue.component(RoundDateVue.name, RoundDateVue)
}

export default VueRoundDate;
