import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.prototype.$nbpApi = axios.create({ // Tworzymy instancję axiosa i przypisujemy do globalnego prototypu
  baseURL: 'https://api.nbp.pl/api/', // Podajemy domyślny adres do API, żeby go nie powtarzać łącząc się
                                      // z różnych miejsc naszej aplikacji
  headers: { // Nagłowki służą do tego, aby przekazać dodatkowe informacje serwerowy
    Accept: 'application/json', // Tutaj informujemy, że wolimy JSON zamiast domyślnego XMLa
  },
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
