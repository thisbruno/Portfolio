import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import Progress from 'bootstrap-vue/es/components/progress'


Vue.config.productionTip = false

// Vue.use(Progress)

new Vue({
  router, 
  render: h => h(App),  
}).$mount('#app')
