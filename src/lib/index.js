import VueRoundDate from './vue-round-date.vue';

const rounddate = {
  install: function(Vue) {
    Vue.component(VueRoundDate.name, VueRoundDate)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(rounddate) 
}
// 导出模块
export default rounddate