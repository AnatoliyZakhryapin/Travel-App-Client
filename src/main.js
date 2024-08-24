import { createApp } from 'vue';
import {createBootstrap} from 'bootstrap-vue-next'
import { router } from './router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import "./styles/general.scss";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add();

import App from './App.vue';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createBootstrap());
app.use(router);
app.mount('#app');
