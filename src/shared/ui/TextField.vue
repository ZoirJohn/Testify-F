<script setup lang="ts">
const { xs } = useDisplay()
</script>
<template>
  <v-text-field class="text-field w-full" :density="xs ? 'compact' : 'default'"></v-text-field>
</template>
<style scoped></style>
