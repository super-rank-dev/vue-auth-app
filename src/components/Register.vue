<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        return {
            registerUser: (user) => store.dispatch('auth/register', user)
        }
    },
    data() {
        return {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        onSubmit() {
            const { email, name, password, confirmPassword } = this;
            this.registerUser({ email, name, password, confirmPassword });
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card border-0 shadow rounded-3 my-5">
                    <div class="card-body p-4 p-sm-5">
                        <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
                        <form @submit.prevent="onSubmit">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="anthony.bartolotte@outlook.com" v-model="email">
                                <label for="floatingInput">Email Address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingInput" placeholder="Anthony Bartolotte" v-model="name">
                                <label for="floatingInput">Full Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" v-model="confirmPassword">
                                <label for="floatingPassword">Confirm Password</label>
                            </div>
                            
                            <div class="d-grid">
                                <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                    up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>