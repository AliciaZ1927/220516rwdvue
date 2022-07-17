import { createStore } from 'vuex'
import router from '../router'


export default createStore({
  state: {
    products: [],
    cart: {},
    list: {},
    token: null,
    userinfo: []
  },
  getters: {
    totalQuantity(state){
      return Object.values(state.cart).reduce((acc, {quantity}) => acc + quantity, 0)
    },
    totalPrice(state){
      return Object.values(state.cart).reduce((acc, {quantity, Price}) => acc + quantity * Price, 0)
    }
  },
  mutations: {
    setProduct(state, payload){
      state.products = payload
    },
    setCart(state, payload){
      state.cart[payload.Id] = payload
    },
    clearCart(state){
      state.cart = {}
    },
    increase(state, payload){
      state.cart[payload].quantity = state.cart[payload].quantity + 1
    },
    reduce(state, payload){
      state.cart[payload].quantity = state.cart[payload].quantity - 1
      if(state.cart[payload].quantity === 0){
        delete state.cart[payload]
      } 
    },
    setList(state, payload){
      state.list[payload.Id] = payload
    },
    remove(state, payload){
      
        delete state.list[payload]
      
    },
    setToken(state, payload){
      state.token = payload
    },
    setUserinfo(state, payload){
      state.userinfo = payload
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res = await fetch('http://localhost:5001/api/books')
        const data = await res.json()
        commit('setProduct', data)
      } catch (error) {
        console.log("error")
      }
    },
    addToCart({commit, state}, product){
      state.cart.hasOwnProperty(product.Id) 
      ? product.quantity = state.cart[product.Id].quantity + 1 
      : product.quantity = 1
      commit('setCart', product)
    },
    addToList({commit, state},product){
      if(!state.list.hasOwnProperty(product.Id)){
        product.quantity = 1
      } 
    
      commit('setList', product)
    },
    async Login({commit}, user){
      console.log(user)
      try {
        const res = await fetch('http://localhost:5001/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
        const resDB = await res.json()
        console.log(resDB.token);
        commit('setToken', resDB.token)
        localStorage.setItem('token', resDB.token)

        return router.push({ path : '/'})
      } catch (error) {
        console.log(error);

      }
    },
    readToken({ commit }) {
      if(localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    async userInfo({commit}){
      try {
        const token = localStorage.getItem('token')
        const res = await fetch('http://localhost:5001/api/auth/admin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        const data = await res.json()
        commit('setUserinfo', data)
      } catch (error) {
        console.log("error")
      }
    },
    async logout({commit}){
      try {
        const token = localStorage.getItem('token')
        const res = await fetch('http://localhost:5001/api/auth/logout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        const clear = await res.json()
        localStorage.removeItem('token')
        console.log(clear);
        return router.push({ path : '/'})

      } catch (error) {
        console.log("error")
      }
    },
  },
  modules: {
  }
})

// ! TODO: refresh token

// las mutaciones solo para modificar states
// las mutaciones se llaman atraves de commit

// payload es los items que recibimos

// ahora si cada vez se llama a la fetchData, se va a activar la mutacion y la mutacion va a afectar al state, por lo tanto el productos va a ser un array de objetos para pintar los cards