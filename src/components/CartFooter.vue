<template>
   <th scope="row" colspan="2">所有商品</th>
    <td>{{totalQuantity}}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="clear">
            清空購物車
        </button>
    </td>
    <td class="font-weight-bold"> <span>$ {{totalPrice}}</span></td>
</template>

<script>
import { useStore } from 'vuex'
import {computed} from 'vue';

export default{
    setup(){
        const store = useStore()

        const totalQuantity = computed(() => store.getters.totalQuantity)
        const totalPrice = computed(() => store.getters.totalPrice)
        const clear = () => {store.commit('clearCart')}

        return { totalQuantity, totalPrice, clear }
    }
}

</script>
