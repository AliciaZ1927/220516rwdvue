<template>
  
  <div class="container d-flex justify-content-center">

    <img class="img-fluid m-5 " src="../assets/images/banner.jpg" alt="夜蝴蝶館">


  </div>
  
  <Carousel/>

  <div class="goTop d-flex justify-content-end">
    <a href="#" class="goTopBtn jq-goTop">
      <i class="bi bi-arrow-up-circle-fill"></i>
    </a>
  </div>

</template>

<script>

import Carousel from '@/components/Carousel.vue';

export default {
  components: {
    Carousel
  },
};



</script>

<style scoped>

.goTop {
    position: fixed;
    right: 10px;
    bottom: 10px;
    font-size: 2rem;
    
    
  }
  .goTopBtn {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .bi-arrow-up-circle-fill {
    color: rgb(193, 173, 230);
  }

</style>