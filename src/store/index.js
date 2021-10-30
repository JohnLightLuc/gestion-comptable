import { createStore } from 'vuex'

export default createStore({
  state: {
    isInitialize: false,
    types: [],
    months: [],
    exercices: [],
    baseUrl: 'http://gescompta.lce-ci.com/public'
  },
  mutations: {
    initialize: (state, type, month, exercice) => {
      state.types = type
      state.months = month
      state.exercices = exercice
      state.initialize = true
    }
  },
  actions: {
    getInitialize: (context, type, month, exercice) => {
      context.commit('initialize', type, month, exercice)
    }
  },
  modules: {
  }
})
