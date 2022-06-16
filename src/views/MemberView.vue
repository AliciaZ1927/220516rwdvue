<template>
    {{token}}
    {{userinfo}}
</template>

<script>
import { useStore } from 'vuex'
import {mapState} from 'vuex'
import axios from 'axios'
import { computed, onMounted } from '@vue/runtime-core'

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
    }
    
}


/*
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