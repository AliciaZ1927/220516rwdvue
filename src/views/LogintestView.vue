<template>

        <div class="container d-flex flex-column p-5 signup">
<h2>會員註冊</h2>

    <Form class="row g-3" @submit="onSubmit">
        <div class="col-md-4">
          <label for="account" class="form-label">帳號</label>
          <Field type="text" class="form-control" name="Account" id="account" placeholder="請輸入帳號" :rules="validateAccount"/>  
          <p><ErrorMessage name="Account" /></p>       
        </div>
        
        <div class="col-md-4">
          <label for="password" class="form-label">密碼</label>
          <Field type="password" class="form-control" name="Password" id="password" placeholder="請輸入密碼" :rules="validatePassword"/>          
        <p><ErrorMessage name="Password" /></p>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">使用者名稱</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <Field type="text" class="form-control" name="Username" id="validationCustomUsername" placeholder="請輸入使用者名稱" :rules="validateUsername"/>            
          </div>
        <p><ErrorMessage name="Username"/></p>
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <Field type="email" class="form-control" name="email" id="email" placeholder="請輸入正確email格式" :rules="validateEmail"/>
        <p><ErrorMessage name="email"/></p>
          </div>
          <div class="col-md-6">
            <label for="address" class="form-label">地址</label>
            <Field type="text" class="form-control" name="address" id="address" placeholder="請輸入地址" :rules="validateAddress"/>
        <p><ErrorMessage name="address"/></p>
            </div>


        <div class="col-12">
          <div class="form-check">
            <Field class="form-check-input" type="checkbox" name="check" id="invalidCheck" :rules="validateCheck"/>
            <label class="form-check-label" for="invalidCheck">
              同意網站使用條款
            </label>
        <p><ErrorMessage name="check"/></p>

            
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">申請會員</button>
        </div>
      </form>

</div>
    
    
</template>
 
   <script>
    import { Form, Field, ErrorMessage } from 'vee-validate';


    export default {
    components: {
        Form,
        Field,
        ErrorMessage
  },
    methods: {
    onSubmit(values) {
      console.log("submitted");
    },
    validateAccount(value) {
      if (!value) {
        return "請輸入帳號";
      }
      return true;
    },
    validatePassword(value) {
      if (!value) {
        return "請輸入密碼";
      }
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!regex.test(value)) {
          return "密碼限制:密碼至少為8位，包括至少一個字母和一個數字，不包含特殊字符";
      }
      return true;
    },
    validateUsername(value) {
      if (!value) {
        return "請輸入使用者名稱";
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return "請輸入信箱";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return '請輸入有效信箱';
      }
      return true;
    },
    validateAddress(value) {
      if (!value) {
        return "請輸入地址";
      }
      return true;
    },
    validateCheck(value, event) {
      if (event.target.checked) {
        return "提交申請前須先同意";
      }
      return true;
    },
  },
};

  </script>
