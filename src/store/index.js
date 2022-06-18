import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

const store = new vuex.Store({
  state: {
    products: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    }
  },
  mutations: {
    SET_PRODUCTS_TO_VUEX: (state,products) => {
      state.products = products
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
      .then ((response) => {
        commit ('SET_PRODUCTS_TO_VUEX', response.data)
      })
    }
  },
  modules: {
  }
})

export default store;
