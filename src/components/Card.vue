<template>
  <div class="col-12 col-sm-6 col-md-3">
    <div class="card">
      <img :src="product.imgUrl" :alt="`image-${product.Name}`" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ product.Name }}</h5>
        <p class="card-text">$<span>{{ product.Price }}</span></p>
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
    

    return { add }
 
  }
}
</script>
