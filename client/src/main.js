import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import VueSweetalert2 from 'vue-sweetalert2';
 // If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);
Vue.use(VueNumberInput);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
