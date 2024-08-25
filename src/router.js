import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppStartPage from './pages/AppStartPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/',
            name: 'start',
            component: AppStartPage,
        },
    ]
})

export {router};