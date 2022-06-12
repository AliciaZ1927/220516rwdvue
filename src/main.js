


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.$ = window.jQuery = require('jquery');
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap" ;

// import express from "express";
// import session from "express-session";
// import cors from "cors";
// import {expressCspHeader, INLINE, NONE, SELF } from 'express-csp-header';
// const app = express();


// app.use(express.json());

// const oneDay = 1000 * 60 * 60 * 24;

// app.use(session({ 
// 	secret: 'sessionToken',  // 加密用的字串
// 	resave: false,   // 沒變更內容是否強制回存
// 	saveUninitialized: false ,  // 新 session 未變更內容是否儲存
// 	cookie: {
// 		maxAge: oneDay // session 狀態儲存多久？單位為毫秒
// 	}
// })); 
// const corsOptions = {
//     origin: "*",
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
//     allowedHeaders: ['Content-Type', 'Authorization'],
// };  

// const expressCSP = expressCspHeader({
//     directives: {
//         'default-src': [SELF, 'http://localhost:5000'],
//     }
// })

// app.use(cors(corsOptions)).use(expressCspHeader(expressCSP))

createApp(App).use(store).use(router).mount('#app')
