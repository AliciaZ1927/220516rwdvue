<template>
  <tr>
    <th scope="row">{{favorite.id}}</th>
    <td>{{favorite.title}}</td>
    <td>{{favorite.price}}</td>
    <td>
        <button class="btn btn-danger btn-sm" @click="remove(favorite.id)">
            <i class="bi bi-heartbreak"></i>
        </button>
        
    </td>
    <td>
    <button class="btn btn-dark" @click="add(favorite)">加入購物車</button>
    </td>
  </tr>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: ['product', 'favorite'],
  setup(){
    const store = useStore()
    const add = favorite => {
      store.dispatch('addToCart', favorite)
    }
    
    const remove = id => {store.commit('remove', id)}

    return {add, remove}
  }
};

</script>
