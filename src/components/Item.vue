<template>
  <tr>
    <th scope="row">{{item.id}}</th>
    <td>{{item.title}}</td>
    <td>{{item.quantity}}</td>
    <td>
        <button class="btn btn-info btn-sm" @click="increase(item.id)">
            +
        </button>
        <button class="btn btn-danger btn-sm" @click="reduce(item.id)">
            -
        </button>
    </td>
    <td>${{item.price * item.quantity}}</td>
  </tr>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: ['item'],
  setup(){
    const store = useStore()
    const increase = id => {store.commit('increase', id)}
    const reduce = id => {store.commit('reduce', id)}

    return {increase, reduce}
  }
};

</script>
