import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    users: [
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]
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