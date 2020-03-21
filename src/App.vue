<template>
  <div id='app'>
    <currency-table />
  </div>
</template>

<script>
import CurrencyTable from './views/CurrencyTable';

export default {
  components: {
    CurrencyTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
