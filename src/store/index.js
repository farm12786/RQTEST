import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    qrtest: 'testQR'
  },
  mutations: {
    getqrtest (stat, val) {
      stat.qrtest = val
    }
  },
  actions: {
  },
  modules: {
  }
})
