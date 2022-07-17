<template>
<div class="container">
<div class="card mt-5">
    
    <h1>會員資訊</h1>
    <p class="title">{{userinfo.Name}}</p>
    <p>帳號: {{userinfo.Account}} </p>
    <p>信箱: {{userinfo.Email}} </p>
    <p>地址: {{userinfo.Address}} </p>
</div>
<div class="d-flex justify-content-center mt-5">
<button class="button-86" role="button" @click="logout">登出</button>

</div>
</div>

</template>

<script>
import { useStore } from 'vuex'
import {mapState} from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import { mapActions } from 'vuex';


export default {
    computed: {
        ...mapState(['token'])
    },
    
        setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('userInfo')
        })
        const userinfo = computed(() => store.state.userinfo)
        // const cart = computed(() => store.state.cart)

        return {userinfo}
    },
    methods: {
    ...mapActions(['logout']),

    }
    
}

/*

methods: {
        async logout() {
            await axios({
                method: "get",
                url: "http://localhost:5001/api/auth/logout",
                data: this.token
            })
            .then(this.$router.push({ path : '/'}))
        }
    },

methods: {
        async protecteddata(){
            try {
                const res = await fetch('http://localhost:5001/api/auth/admin', {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                })
                const dataDB = await res.json()
                console.log(dataDB);

            } catch (error) {
                console.log(error);
            }
        }
    },
    created(){
        this.protecteddata()
    }


    methods: {
        async userinfo(){
            
            await axios({
            method: 'get',
            baseURL: 'http://localhost:5001/api/auth/admin',
            'Content-Type': 'application/json',
            "X-Auth-Token": this.token,     
        }).then ((result) => {console.log(result)})
        }
    },
*/


</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(52, 24, 87, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

h1 {
  background: white;

}
.title {
  color: grey;
  font-size: 1.2rem;
  background: white;

}
p{
    background: white;
}

.button-86 {
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-86::after,
.button-86::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.button-86::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #636399;
  border-radius: 10px;
}

.button-86::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button-86:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-86:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button-86:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}

</style>