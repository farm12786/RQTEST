import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// const mountEl = document.querySelector('#app')

new Vue({
  // render: createElement => {
  //   const context = {
  //     props: { ...mountEl.dataset }
  //   }
  //   return createElement(App, context)
  // },
  render: h => h(App),
  router,
  store,
  vuetify
  // render: h => h(App)
}).$mount('#app')
