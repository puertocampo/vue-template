import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(faFacebookF, faInstagram)

createApp(App)
.use(createPinia())
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')