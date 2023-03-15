import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faCartShopping, faChartSimple, faUser, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faCartShopping, faChartSimple, faUser, faLock)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
