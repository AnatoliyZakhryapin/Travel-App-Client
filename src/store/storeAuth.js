import { reactive } from 'vue';
import { saveToken, getToken, removeToken } from '../api/auth';

export const storeAuth = reactive({
    user: null,
    token: getToken(),
    isAuthenticated: false,

    login(userData) {
        this.user = userData.user;
        this.token = userData.token;
        this.isAuthenticated = true;
        saveToken(this.token);
    },

    logout() {
        this.user = null;
        this.token = null;
        this.isAuthenticated = false;
        removeToken();
    },

    checkAuth() {
        const token = getToken();
        this.isAuthenticated = !!token;
        this.token = token;
    }
});

