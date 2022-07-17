<template>
 <div class="container">
    <div class="row d-flex justify-content-around">

      <div class="col-10 col-sm-9 col-md-5 order-2 order-md-1">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/images/cover/zhou1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/images/cover/zhou2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/images/cover/zhou3.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="col-10 col-sm-9 col-md-5 order-1 order-md-2 d-flex justify-content-center align-items-center">

        <h2 class="display-1">已出版作品</h2>
      </div>

    </div>
  </div>

  <div class="container">
    <div class="row d-flex justify-content-around">

      <div class="col-10 col-sm-9 col-md-5 d-flex justify-content-center align-items-center">
        <h2 class="display-1">漫畫化作品</h2>
      </div>
      <div class="col-10 col-sm-9 col-md-5">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/images/comic/shangxiec1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/images/comic/shangxiec2.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="../assets/images/comic/shangxiec3.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>



h2 {
  color: rgb(102, 101, 101);
  animation: neon 5s infinite;
}
@keyframes neon {
  0%, 39%, 41%, 59%, 61%, 100% {
    text-shadow:
    rgb(255, 255, 255) 0 0 15px,
    rgb(0, 38, 255) 0 0 30px,
    rgb(0, 38, 255) 0 0 40px;
  }
  20%, 60% {
    text-shadow: none;
  }
}
</style>

