import Vue from 'vue';
import RoundDateVue from './vue-round-date.vue';

var VueRoundDate = {}

VueRoundDate.install = function(Vue, options) {
	Vue.component(RoundDateVue.name, RoundDateVue)
}

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueRoundDate)
}

export default VueRoundDate;
