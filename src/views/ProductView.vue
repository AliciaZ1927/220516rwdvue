<template>
<div class="container-fluid ">
<h1 class="text-center m-5">禁咒師系列</h1>
<hr>
<div class="row">
    <Product 
    v-for="product of products" :key="product.id" :product="product"
    />
<hr>

</div>

</div>
 <div class="goTop d-flex justify-content-end">
    <a href="#" class="goTopBtn jq-goTop">
      <i class="bi bi-arrow-up-circle-fill"></i>
    </a>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Product from '@/components/Product'
import { computed, onMounted } from '@vue/runtime-core'



export default{
    name: 'ProductView',
    components:{
        Product
    },
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('fetchData')
        })
        const products = computed(() => store.state.products)
        // const cart = computed(() => store.state.cart)

        return {products}
    }
}

// trabajar con composition api se necesita setup
</script>


<style scoped>

.goTop {
    position: fixed;
    right: 10px;
    bottom: 10px;
    font-size: 2rem;
    
    
  }
  .goTopBtn {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .bi-arrow-up-circle-fill {
    color: rgb(193, 173, 230);
  }

</style>