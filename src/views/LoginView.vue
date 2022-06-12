<template>

  <div class="container col-6 col-md-4 p-5 login">
    <Form @submit.prevent="login">
      <div>

        <label for="Account" class="form-label">帳號</label>
        <Field type="text" class="form-control" name="Account" id="Account" v-model="userdata.Account" :rules="validateAccount"/>
         <p class="text-danger"><ErrorMessage name="Account" /></p>

        <div>

          <label for="Password" class="form-label">密碼</label>
          <Field type="password" class="form-control" name="Password" id="Password" v-model="userdata.Password" :rules="validatePassword"/>
         <p class="text-danger"><ErrorMessage name="Password" /></p>
          <div>
            <label for="validationServerUsername" class="form-label">使用者名稱</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend3">@</span>
              <Field type="text" class="form-control" name="Username" id="validationServerUsername" v-model="userdata.Name" :rules="validateUsername"/>
              
            </div>
            <p class="text-danger"><ErrorMessage name="Username" /></p>
          </div>
          <br>
          <div class="login-form__remember-me">
            <Field type="checkbox" id="rememberMeCheckbox" name="RememberMe" />
            <label for="rememberMeCheckbox">記得我</label>

          </div>
          <br>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">登入</button>
          </div>
        </div>
      </div>

    </Form>
  </div>


    
</template>
 
   <script>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import axios from "axios";
import { mapActions } from 'vuex';


    export default {
      name:"Login",
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
      },

      users: [],
    };
  },
    methods: {
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
      return true;
    },
    validateUsername(value) {
      if (!value) {
        return "請輸入使用者名稱";
      }
      return true;
    },
    // async Login() {
    //   await axios({
    //     method: "post",
    //     url: "http://localhost:5000/api/login",
    //     data: this.userdata,
    //   })
    // },
    ...mapActions(['login'])
  },
};

  </script>
