<template>

        <div class="container d-flex flex-column p-5 signup">
<h2>會員註冊</h2>

    <Form class="row g-3" @submit="Signup">
        <div class="col-md-4">
          <label for="account" class="form-label">帳號</label>
          <Field type="text" class="form-control" name="Account" id="account" placeholder="請輸入帳號" :rules="validateAccount" v-model="userdata.Account"/>  
          <p class="text-danger"><ErrorMessage name="Account" /></p>       
        </div>
        
        <div class="col-md-4">
          <label for="password" class="form-label">密碼</label>
          <Field type="password" class="form-control" name="Password" id="password" placeholder="請輸入密碼" :rules="validatePassword" v-model="userdata.Password"/>          
        <p class="text-danger"><ErrorMessage name="Password" /></p>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">使用者名稱</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <Field type="text" class="form-control" name="Username" id="validationCustomUsername" placeholder="請輸入使用者名稱" :rules="validateUsername" v-model="userdata.Name"/>            
          </div>
        <p class="text-danger"><ErrorMessage name="Username"/></p>
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <Field type="email" class="form-control" name="email" id="email" placeholder="請輸入正確email格式" :rules="validateEmail" v-model="userdata.Email"/>
        <p class="text-danger"><ErrorMessage name="email"/></p>
          </div>
          <div class="col-md-6">
            <label for="address" class="form-label">地址</label>
            <Field type="text" class="form-control" name="address" id="address" placeholder="請輸入地址" :rules="validateAddress" v-model="userdata.Address"/>
        <p class="text-danger"><ErrorMessage name="address"/></p>
            </div>

        <div class="col-12">
          <button class="btn btn-primary">申請會員</button>
        </div>
      </form>
{{userdata}}
</div>
    
    
</template>
 
   <script>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import axios from "axios";


    export default {
    components: {
        Form,
        Field,
        ErrorMessage
  },
  data() {
    return {
      userdata: {
        Name: "",
        Password: "",
        Account: "",
        Email: "",
        Address: "",
      },

      users: [],
    };
  },
    methods: {
    async Signup() {
      await axios({
        method: "post",
        url: "http://localhost:5001/api/auth/signup",
        data: this.userdata,
      })
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
  },
};

  </script>
