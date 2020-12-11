import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import  ECharts from 'echarts'

Vue.config.productionTip = false

//将echarts加入原型，以后的项目不需要import直接引用$echarts
Vue.prototype.$echarts = ECharts 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
