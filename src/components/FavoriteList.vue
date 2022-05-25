<template>

<div class="container my-5">
        <h4>最愛清單</h4>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">品項</th>
                <th scope="col">價格</th>
                <th scope="col"></th>
                <th scope="col"></th>

            </tr>
            </thead>
            <tbody id="favorites">

                <FavoriteItem
                v-for="favorite in favorites" :key="favorite.id" :favorite="favorite"
                />
            </tbody>
            
        </table>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import FavoriteItem from "./FavoriteItem.vue";



export default {
    components:{
        FavoriteItem
    },
  setup(){
      const store = useStore()
      const favorites = computed(() => store.state.list)
      

      return {favorites}
  }
};


</script>
