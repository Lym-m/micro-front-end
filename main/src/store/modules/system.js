export default {
    state: {
        token: '',
    },
    mutations: {
        setToken(newVal) {
            this.state.token = newVal;
        }
    }
}