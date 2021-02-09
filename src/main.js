import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// const mountEl = document.querySelector('#app')

Vue.mixin({
  methods: {
    globalHelper () {
      alert('HELLO')
    },
    oneChatCallBackQRScanner (ScanQRcodevalue) {
      alert('SUCCESS')
      alert(ScanQRcodevalue)
      // if (ScanQRcodevalue === '') {
      //   alert('FAILED')
      // } else {
      //   alert('SUCCESS')
      //   alert(ScanQRcodevalue)
      // }
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
