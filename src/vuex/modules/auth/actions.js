import axios from 'axios';

const SERVER_ADDRESS = 'http://localhost:8000';

export default {
    login: ({ commit }, user) => {
        axios
            .post(`${SERVER_ADDRESS}/auth/token/`, user)
            .then(({ data: { access } }) => {
                localStorage.setItem('jwt', `Bearer ${access}`);
                commit('setUser', user);
                window.location.href = '/';
            })
            .catch(error => {
                alert(error);
            });
    },
    loginWithJWT: ({ commit }) => {
        const access = localStorage.getItem('jwt');
        if (!access) return;
        axios.defaults.headers.common['Authorization'] = access;
        axios
            .get(`${SERVER_ADDRESS}/user/view/`)
            .then(({ data }) => {
                commit('setUser', data);
            })
            .catch(error => {
                alert(error);
            });
    },
    logout: ({ commit }) => {
        localStorage.removeItem('jwt');
        commit('removeUser');
    }
}