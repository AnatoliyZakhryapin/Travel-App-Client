import { createRouter, createWebHistory } from 'vue-router';

import { storeAuth } from '../src/store/storeAuth';
import AppHome from './pages/Dashboard/AppHome.vue';
import AppStartPage from './pages/StartPage/AppStartPage.vue';
import AppIntro1 from './pages/StartPage/AppIntro1.vue';
import AppIntro2 from './pages/StartPage/AppIntro2.vue';
import AppIntro3 from './pages/StartPage/AppIntro3.vue';
import AppRegister from './pages/Auth/AppRegister.vue';
import AppLogin from './pages/Auth/AppLogin.vue';
import AppDashboard from './pages/Dashboard/AppDashboard.vue';
import AppCreateTrips from './pages/Dashboard/AppCreateTrips.vue';
import AppDestinations from './pages/Dashboard/AppDestinations.vue';
import AppTripsDetails from './pages/Dashboard/AppTripsDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
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
        {
            path: '/register',
            name: 'register',
            component: AppRegister,
        },
        {
            path: '/login',
            name: 'login',
            component: AppLogin,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: AppDashboard,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/dashboard/home',
                    name: 'home',
                    component: AppHome,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/dashboard/createtrips',
                    name: 'createTrips',
                    component: AppCreateTrips,
                    meta: { requiresAuth: true },
                    children: [
                        {
                            path: '/dashboard/createtrips/destinations',
                            name: 'destinations',
                            component: AppDestinations,
                            meta: { requiresAuth: true },
                        },
                        {
                            path: '/dashboard/createtrips/trip-details',
                            name: 'tripDetails',
                            component: AppTripsDetails,
                            meta: { requiresAuth: true },
                        }
                    ]
                },
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !storeAuth.isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export {router};