import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    qrtest: 'testQR'
  },
  mutations: {
    getqrtest (state, val) {
      console.log(val)
      state.qrtest = val
    }
  },
  actions: {
  },
  modules: {
  }
})
