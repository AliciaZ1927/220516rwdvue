<template>
<div class="container-fluid">
<h1 class="text-center m-5">禁咒師系列</h1>
<hr>
<div class="row">
    <Product 
    v-for="product of products" :key="product.id" :product="product"
    />
<hr>

</div>

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
