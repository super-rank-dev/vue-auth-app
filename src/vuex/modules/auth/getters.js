export default {
    isAuthorized: (state) => {
        return state.user !== null;
    }
}