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
