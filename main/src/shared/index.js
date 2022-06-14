import store from "@/store";

class Shared {
    getToken() {
        const token = store.state.token;
        return token || '';
    }

    setToken(newVal){
        store.commit('setToken', newVal);
    }
}

const shared = new Shared();

export default shared;