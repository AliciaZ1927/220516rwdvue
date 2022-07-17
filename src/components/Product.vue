<template>
  <div class="col-12 col-sm-6 col-md-3 d-flex align-content-stretch flex-wrap g-5">
    <div class="card">
      <img :src="product.imgUrl" :alt="`image-${product.Name}`" class="card-img-top">
      <div class="card-body">
        
        <h5 class="card-title">{{ product.Name }}</h5>
        <p class="card-text">$<span>{{ product.Price }}</span><p>{{product.Description}}</p>
        </p>
        
        
        

      </div>
      <div class="d-flex justify-content-around">
        <button class="button-56" @click="addList(product)"><i class="bi bi-suit-heart-fill"></i></button>
        <button class="button-56" @click="add(product)">加入購物車</button>
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

<style scoped>

.card{
  box-shadow: rgba(80, 18, 181, 0.3) 0px 0px 0px 3px;
}
.bi{
  background: #575393;
}
.button-56 {
  align-items: center;
  background-color: #575393;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}


button:hover{
  outline: 0;
  background: #6d68b9;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}
</style>