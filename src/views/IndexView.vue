<template>
  
  <div class="container d-flex justify-content-center">

    <img class="img-fluid m-5 " src="/images/banner.jpg" alt="夜蝴蝶館">


  </div>
  
  <Carousel/>

  <div class="goTop container-fluid d-flex justify-content-end">
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
