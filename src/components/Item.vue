<template>
  <tr>
    <th scope="row">{{item.Id}}</th>
    <td>{{item.Name}}</td>
    <td>{{item.quantity}}</td>
    <td>
        <button class="btn btn-info btn-sm" @click="increase(item.Id)">
            +
        </button>
        <button class="btn btn-danger btn-sm" @click="reduce(item.Id)">
            -
        </button>
    </td>
    <td>${{item.Price * item.quantity}}</td>
  </tr>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: ['item'],
  setup(){
    const store = useStore()
    const increase = Id => {store.commit('increase', Id)}
    const reduce = Id => {store.commit('reduce', Id)}

    return {increase, reduce}
  }
};

</script>
