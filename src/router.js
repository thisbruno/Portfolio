import Vue from 'vue'
import Router from 'vue-router'

// import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Portfolio from './views/Portfolio.vue'
import Services from './views/Services.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
