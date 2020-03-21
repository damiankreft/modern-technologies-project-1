<template>
    <div>
        Records found: <b>{{ recordsCount }}</b>
    </div>
</template>

<script>
export default {
    props: {
        recordsCount: { type: Number, required: true, },
    },
}
</script>