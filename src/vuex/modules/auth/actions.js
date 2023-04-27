import axios from 'axios';

export default {
    login: ({ commit }, user) => {
        commit('setUser', user);
    }
}