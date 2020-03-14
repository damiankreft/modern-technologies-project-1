import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component("demo-grid", {
  template: "#grid-template",
  props: {
    heroes: Array,
    columns: Array,
    filterKey: String
}});

var demo = new Vue({
  el: "#demo",
  data: {
    searchQuery: "",
    gridColumns: ["name", "power"],
    gridData: [
      { name: "Chuck Norris", power: Infinity },
      { name: "Bruce Lee", power: 9000 },
      { name: "Jackie Chan", power: 7000 },
      { name: "Jet Li", power: 8000 }
    ]
  }
});
