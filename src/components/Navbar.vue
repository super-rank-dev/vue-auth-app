<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        return {
            user: store.state.auth.user,
            isAuthorized: computed(() => store.getters['auth/isAuthorized'])
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.svg" alt="..." height="36">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto" v-if="isAuthorized">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/home">{{ user }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Sign out</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto" v-else>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/login">Sign in</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Sign up</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>