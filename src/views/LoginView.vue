<template>

  <div class="container col-6 col-md-4 p-5 login">
    <form class="needs-validation" novalidate>
      <div>

        <label for="Account" class="form-label">帳號</label>
        <input type="text" class="form-control" id="Account" required />
        <div class="invalid-feedback">請輸入帳號。</div>

        <div>

          <label for="Password" class="form-label">密碼</label>
          <input type="text" class="form-control" id="Password" required />
          <div class="invalid-feedback">請輸入密碼。</div>
          <div>
            <label for="validationServerUsername" class="form-label">使用者名稱</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">@</span>
              <input type="text" class="form-control" id="validationServerUsername"
                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
              <div id="validationServerUsernameFeedback" class="invalid-feedback">
                請輸入使用者名稱!
              </div>
            </div>
          </div>
          <br>
          <div class="login-form__remember-me">
            <input type="checkbox" id="rememberMeCheckbox" name="RememberMe" />
            <label for="rememberMeCheckbox">記得我</label>

          </div>
          <br>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">登入</button>
          </div>
        </div>
      </div>

    </form>
  </div>


    
</template>

 
   <script>

    // login
    $(document).ready(function () {
      const $form = $('form');
      $form.submit(function (event) {
        event.preventDefault();
        if ($form.hasClass('needs-validation')) {
          $form.removeClass('needs-validation');
          $form.addClass('was-validated');
        }
        if ($('.form-control:invalid').length === 0) {
          alert(':)');
        }
      });
    });



// @submit.prevent=""
  </script>