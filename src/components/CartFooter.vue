<template>
   <th scope="row" colspan="2">所有商品</th>
    <td>{{totalQuantity}}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="clear">
            清空購物車
        </button>
        <br>
        <button class="btn btn-success btn-sm" id="vaciar-carrito" @click="sentCart">
            送出訂單
        </button>
    </td>
    <td class="font-weight-bold"> <span>$ {{totalPrice}}</span></td>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue';
import axios from 'axios';


export default{
    data() {
        return {
            orderdata:{
                Quantity: this.totalQuantity,
                Amount: this.totalPrice
            },

        }
    },
    methods: {
        async sentCart() {
            await axios({
                method: "post",
                url: "http://localhost:5000/api/mics",
                data: this.orderdata,
            })
            .then(this.$router.push({ path : '/'}))
        }
    },
    setup(){
        const store = useStore()

        const totalQuantity = computed(() => store.getters.totalQuantity)
        const totalPrice = computed(() => store.getters.totalPrice)
        const clear = () => {store.commit('clearCart')}

        return { totalQuantity, totalPrice, clear }
    }
}

</script>
