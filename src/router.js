import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppStartPage from './pages/StartPage/AppStartPage.vue';
import AppIntro1 from './pages/StartPage/AppIntro1.vue';
import AppIntro2 from './pages/StartPage/AppIntro2.vue';
import AppIntro3 from './pages/StartPage/AppIntro3.vue';

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
        {
            path: '/intro-1',
            name: 'intro-1',
            component: AppIntro1,
        },
        {
            path: '/intro-2',
            name: 'intro-2',
            component: AppIntro2,
        },
        {
            path: '/intro-3',
            name: 'intro-3',
            component: AppIntro3,
        },
    ]
})

export {router};