<template>
    <div>
        <label for="text">
            <b>Search for currency </b>
            <input type="text" v-model='uInput' @keyup="$emit('update:query', uInput)" placeholder="Currency..">
        </label>
    </div>
</template>
<script>
// Jebane gówno https://vuejs.org/v2/guide/components-custom-events.html#sync-Modifier
export default {
    props: {
        query: { type: String, required: true, },
    },
    data: function() {
        return { uInput: this.query };
    },
}
</script>
<style scoped>
input[type=text] {
  min-width: 300px;
  padding: 6px 16px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>