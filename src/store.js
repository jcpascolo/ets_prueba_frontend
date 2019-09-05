import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: null
  },
  mutations: {
    setFilters(state, newFilters){
        state.filters = newFilters;
    }
  },
  actions: {

  }
})
