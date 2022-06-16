<template>

  <Navbar />

  <router-view/>

  <footer class="text-center mt-5">
        ©seba夜蝴蝶館 著作權所有
    </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapActions } from 'vuex';

export default {
  components: {
   Navbar
  },
  methods: {
    ...mapActions(['readToken'])
  },
  created(){
    this.readToken()
  }
};


</script>
