import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cart: {},
    list: {}

  },
  getters: {
    totalQuantity(state){
      return Object.values(state.cart).reduce((acc, {quantity}) => acc + quantity, 0)
    },
    totalPrice(state){
      return Object.values(state.cart).reduce((acc, {quantity, price}) => acc + quantity * price, 0)
    }
  },
  mutations: {
    setProduct(state, payload){
      state.products = payload
    },
    setCart(state, payload){
      state.cart[payload.id] = payload
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
      state.list[payload.id] = payload
    },
    remove(state, payload){
      
        delete state.list[payload]
      
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setProduct', data)
      } catch (error) {
        
      }
    },
    addToCart({commit, state}, product){
      state.cart.hasOwnProperty(product.id) 
      ? product.quantity = state.cart[product.id].quantity + 1 
      : product.quantity = 1
      commit('setCart', product)
    },
    addToList({commit, state},product){
      if(!state.list.hasOwnProperty(product.id)){
        product.quantity = 1
      } 
    
      commit('setList', product)
    }
  },
  modules: {
  }
})



// las mutaciones solo para modificar states
// las mutaciones se llaman atraves de commit

// payload es los items que recibimos

// ahora si cada vez se llama a la fetchData, se va a activar la mutacion y la mutacion va a afectar al state, por lo tanto el productos va a ser un array de objetos para pintar los cards