import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, 
    faCartShopping, 
    faChartSimple, 
    faUser, 
    faLock, 
    faBell, 
    faMoon, 
    faCircleInfo, 
    faEllipsisVertical,
    faAngleDown

} from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faCartShopping, faChartSimple, faUser, faLock, faBell, faMoon, faCircleInfo, faEllipsisVertical,faAngleDown)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
