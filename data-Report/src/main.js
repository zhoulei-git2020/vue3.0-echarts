import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import  ECharts from 'echarts'
import VueEcharts from 'vue-echarts'
import './plugins/vcharts'
import './style/index.css'



Vue.config.productionTip = false

//将echarts加入原型，以后的项目不需要import直接引用$echarts
Vue.prototype.$echarts = ECharts 

//注册一个v-chart组件，这个组件映射的实例时VueEcharts
Vue.component('v-chart',VueEcharts)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
