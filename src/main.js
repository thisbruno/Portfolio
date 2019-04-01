import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueTyperPlugin from 'vue-typer'

import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

Vue.use(VueTyperPlugin)

new Vue({
  router, VueTyperPlugin,
  render: h => h(App),  
}).$mount('#app')
