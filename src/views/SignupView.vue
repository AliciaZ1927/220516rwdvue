<template>

        <div class="container d-flex flex-column p-5 signup">
<h2>會員註冊</h2>

    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="account" class="form-label">帳號</label>
          <input type="text" class="form-control" id="account" placeholder="請輸入帳號" required>
          
        </div>
        <div class="col-md-4">
          <label for="password" class="form-label">密碼</label>
          <input type="password" class="form-control" id="password" placeholder="請輸入密碼" required>
          
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">使用者名稱</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="請輸入使用者名稱" required>
            
          </div>
        </div>
        
        <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="請輸入正確email格式" required>
            
          </div>
          <div class="col-md-6">
            <label for="address" class="form-label">地址</label>
            <input type="text" class="form-control" id="address" placeholder="請輸入地址" required>
            
          </div>


        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
              同意網站使用條款
            </label>
            <div class="invalid-feedback">
              提交申請前須先同意
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">申請會員</button>
        </div>
      </form>

</div>
    
</template>

<script>

      //擋submit
      // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})
  </script>