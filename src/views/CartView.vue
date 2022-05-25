<template>
<div class="container-fluid p-5">
<h1 class="text-center m-5">購物車</h1>
<hr>
<Cart />


</div>
</template>

<script>
import { useStore } from 'vuex'
import Card from '@/components/Card'
import { computed, onMounted } from '@vue/runtime-core'
import  Cart  from '@/components/Cart'


export default{
    name: 'CartView',
    components:{
        Card, Cart
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
