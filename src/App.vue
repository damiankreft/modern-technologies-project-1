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
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['id', 'name', 'username', 'email'],
        items: fetchUsers
      }
    }
  }

  function fetchUsers() {
    const baseURI = 'https://jsonplaceholder.typicode.com/users'
    this.$http.get(baseURI).then((result) => {
      this.items = result.data
    })
  }
</script>

<style scoped>
#app {
  text-align: center;
}
</style>