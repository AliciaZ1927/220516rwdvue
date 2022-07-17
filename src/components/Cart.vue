<template>
<div class="container my-5">
        <table class="table table-light">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">品項</th>
                <th scope="col">數量</th>
                <th scope="col"></th>
                <th scope="col">價格</th>
            </tr>
            </thead>
            <tbody id="items">

                <Item
                v-for="item in items" :key="item.Id" :item="item"
                />
            </tbody>
            <tfoot>
            <tr id="footer-carrito">
                <th scope="row" colspar="5" v-if="Object.keys(items).length === 0">空的!</th>
                <CartFooter v-else />
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CartFooter from "./CartFooter";
import Item from "./Item";



export default {
    components:{
        Item, CartFooter
    },
  setup(){
      const store = useStore()
      const items = computed(() => store.state.cart)

      return {items}
  }
};


</script>
