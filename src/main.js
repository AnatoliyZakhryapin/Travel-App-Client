import { createApp } from 'vue';
import { register } from 'swiper/element/bundle';
register();
import {createBootstrap} from 'bootstrap-vue-next'
import { router } from './router';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "./styles/general.scss";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse, faSuitcaseRolling, faHeart, faRightFromBracket, faStar, faStarHalfAlt, faArrowLeftLong, faArrowRightLong  } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
// import { fabGithub } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add( faHouse, faSuitcaseRolling, faHeart, faRightFromBracket, faStar, farStar, faStarHalfAlt, faArrowLeftLong, faArrowRightLong );

import App from './App.vue';
import { storeAuth } from '../src/store/storeAuth';

const app = createApp(App);

storeAuth.checkAuth();

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
