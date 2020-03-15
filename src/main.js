import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  render: h => h(App),
  data: {
    users: []
  },
  methods: {
    fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }
  }
}).$mount('#app')

Vue.component("DataTable", {
  template: 
  `<div id="DataTable">
  <table>
      <tbody>
          <tr v-for="user in users" :key="fruit">
              {{user.isActive}} {{user.age}} {{user.first_name}} {{user.last_name}}
          </tr>
      </tbody>
  </table>
</div>`
});