import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: null,
    assets: [],
    next: 0,
    previus: 0
  },
  mutations: {
    setFilters(state, newFilters){
        state.filters = newFilters;
    },
    setAssets(state, newAssets){
        state.assets = newAssets
    },
    setNext(state, newNext){
        state.next = newNext
    },
    setPrev(state, newPrev){
        state.previus = newPrev
    }
  },
  actions: {
    setRoutes({commit, state}, currentId){        
        let currentPos = state.assets.map( asset => { return asset.id }).indexOf(parseInt(currentId))
       
        if((currentPos > 0) && (currentPos < (state.assets.length - 1)) ) {
            commit('setNext', (currentPos+1));
            commit('setPrev', (currentPos-1));
        }
        else if(currentPos == 0){
            if (currentPos == (state.assets.length-1)){
                commit('setNext', (currentPos));
                commit('setPrev', (currentPos));
            }
            else{
                commit('setNext', (currentPos+1));
                commit('setPrev', (state.assets.length-1));
            }
        }
        else{
            commit('setNext', 0);
            commit('setPrev', (currentPos-1));
        }
    }
  }
})
