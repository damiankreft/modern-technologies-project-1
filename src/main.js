import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.prototype.$nbpApi = axios.create({
  baseURL: 'https://api.nbp.pl/api/',
  headers: {
    Accept: 'application/json',
  },
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
