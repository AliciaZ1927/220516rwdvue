<template>
<div class="container mt-5 mb-5">
  <div class="row d-flex justify-content-center">

    <div class="text-center mt-5 mb-5">
      <img src="../assets/images/seba.jpg" class="rounded" alt="...">
       <div class=" col mt-5 mb-5 d-flex icons justify-content-center">
    <div><a href="mailto:seba.twblog@gmail.com"><i class="bi bi-envelope-heart-fill"></i></a></div>
    <div><a href="https://www.facebook.com/realseba/"><i class="bi bi-facebook"></i></a></div>
    <div><a href="https://www.instagram.com/seba.twblog/"><i class="bi bi-instagram"></i></a></div>
  </div>
      
    </div>

 
    

  </div>
</div>
</template>

<style scoped>

.icons{
  column-gap: 25px;
}
.bi{
  width: 60px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 2rem;
  color: rgb(0, 0, 0);
  border-radius: 50%;
  outline: 2px solid rgb(0, 0, 0);
  transition-property: outline-offset, outline-color, background-color;
  transition-duration: .25s;
}
.bi:hover{
  outline-offset: 3px;
}
.bi:hover i{
  animation: shake .25s;
}
.bi-envelope-heart-fill:hover{
  background-color: rgba(137, 45, 213, 1);
  outline-color: rgba(137, 45, 213, 1);
}
.bi-facebook:hover{
  background-color: #0D8AF0;
  outline-color: #0D8AF0;
}
.bi-instagram:hover {
  background-image: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  outline-color: #a02d76;
}
@keyframes shake {
  10%{transform: rotate(15deg);}
  20%{transform: rotate(-15deg);}
  30%{transform: rotate(15deg);}
  40%{transform: rotate(-15deg);}
}
</style>