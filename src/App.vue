<script>
import { useStore } from 'vuex';
import Navbar from './components/Navbar.vue'
import axios from 'axios';
export default {
    components: {
        Navbar
    },
    setup() {
        const store = useStore();
        return {
            autoLogin: () => store.dispatch('auth/loginWithJWT')
        }
    },
    created() {
        this.autoLogin();
    }
}
</script>

<template>
    <Navbar />
    <router-view></router-view>
</template>