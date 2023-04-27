import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import store from './vuex'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/login', component: Login },
        { path: '/register', component: Register }
    ]
})

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')