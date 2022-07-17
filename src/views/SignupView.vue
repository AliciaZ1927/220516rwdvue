<template>

        <div class="container d-flex flex-column p-5 signup">
<h2>會員註冊</h2>

    <Form class="row g-3 mt-5" @submit="Signup">
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
          <button class="button-74">申請會員</button>
        </div>
      </form>

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
      }).then(this.$router.push({ path : '/login'}))
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

<style scoped>

.button-74 {
  background-color: #b3c7f2;
  border: 2px solid #000442;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: rgb(225, 227, 244);
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
</style>