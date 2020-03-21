<template>
  <table>
    <thead>
    <tr>
      <th>Currency</th>
      <th>Code</th>
      <th>Rate</th>
    </tr>
    </thead>
    <tbody>
      <item class="table-item" v-for='currency in data' :key=currency.code v-bind=currency />
    </tbody>
  </table>
</template>

<script>
import Item from './Item';

export default {
  components: {
    Item,
  },
  props: {
    data: { type: Array, required: true, },
  },
};
</script>

<style scoped>
table {
  width: 90%;
  margin: 20px auto;
}

th {
  padding: 14px;
  background-color:lightseagreen;
}

.table-item:nth-child(odd) {
  background-color: teal;
  color: white;
}

.table-item:nth-child(even) {
  background-color: #d9d9d9;
  color: black;
}

.table-item:nth-child(odd):hover, .table-item:nth-child(even):hover {
  color: white;
  background-color: darkslategrey;
}
</style>