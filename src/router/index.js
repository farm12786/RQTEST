import Vue from 'vue'
import VueRouter from 'vue-router'
// import medbox from '../views/medbox.vue'
import test6 from '../views/test6.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'test6',
    component: test6
  }
]

const router = new VueRouter({
  routes
})

export default router
