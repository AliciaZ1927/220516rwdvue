<template>
  <div class="col-12 col-sm-6 col-md-3 d-flex align-content-stretch flex-wrap g-5">
    <div class="card">
      <img :src="product.thumbnailUrl" :alt="`image-${product.title}`" class="card-img-top">
      <div class="card-body">
        
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">$<span>{{ product.price }}</span><p>{{product.description}}</p>
        </p>
        
        
        

      </div>
      <div class="d-flex justify-content-around">
        <button class="btn btn-dark" @click="addList(product)"><i class="bi bi-suit-heart-fill"></i></button>
        <button class="btn btn-dark" @click="add(product)">加入購物車</button>
        </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default{
  props: ['product'],
  setup(){
    const store = useStore()
    const add = product => {
      store.dispatch('addToCart', product)
    }
    const addList = product => {
      store.dispatch('addToList', product)
    }

    return { add, addList }

  }
}
</script>
