<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Your Vue.js App</h1>
    <div>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ["currency", "code", "mid"],
        items: fetchCurrency
      }
    }
  }

  function fetchCurrency() {
    const baseURI = 'http://api.nbp.pl/api/exchangerates/tables/a?format=JSON'
    this.$http.get(baseURI).then((result) => {
      //this.items = result.data.rates
      this.items = result.data[0].rates
    })
  }
</script>

<style scoped>
#app {
  text-align: center;
}
</style>