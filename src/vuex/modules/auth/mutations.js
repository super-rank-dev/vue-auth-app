export default {
    setUser: (state, user) => {
        state.user = user;
    },
    removeUser: (state) => {
        state.user = null;
    }
}