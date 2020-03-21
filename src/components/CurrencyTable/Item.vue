<template>
  <tr>
    <td>{{ currency }}</td>
    <td>{{ code }}</td>
    <td>{{ mid }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    code: { type: String, required: true },
    currency: { type: String, required: true },
    mid: { type: Number, required: true },
  },
};
</script>

<style scoped>
tr {
  border: 1px solid #d9d9d9;
  padding: 10px;
}
</style>