<template>
   <header class="container-fluid d-flex justify-content-between">
    <div class="logo"><router-link to="/"><img src="../assets/images/logo.jpeg" alt="蝴蝶seba"></router-link></div>
    <div>

    <ul class="nav nav-justified">
      <li class="nav-item p-1"><router-link to="/login"><i class="bi bi-box-arrow-in-right"></i></router-link></li>
      <li class="nav-item p-1"><router-link to="/signup"><i class="bi bi-person-plus-fill"></i></router-link> </li>
      <li class="nav-item p-1"><router-link to="/favorite"><i class="bi bi-clipboard-heart-fill"></i></router-link></li>
      <li class="nav-item p-1"><router-link to="/cart"><i class="bi bi-cart"></i></router-link></li>
    </ul>


       
      
       
      
    </div>
 </header>
  <nav class="container">
    <ul class="nav nav-pills nav-justified">
      <li class="nav-item p-1"><router-link to="/" class="nav-link active">夜蝴蝶館</router-link></li>
      <li class="nav-item p-1"><router-link to="/about" class="nav-link active">關於蝴蝶</router-link></li>
      <li class="nav-item p-1"><router-link to="/product" class="nav-link active">文字世界</router-link></li>
      <li class="nav-item p-1"><router-link to="/contact" class="nav-link active">聯絡蝴蝶</router-link></li>
    </ul>

    

  </nav>


</template>