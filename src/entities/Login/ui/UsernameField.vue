<script setup lang="ts">
const { t } = useI18n()
const rules = [required(t('auth.usernameRequired'))]
</script>

<template>
  <TextField :rules="rules" :label="$t('auth.usernameLabel')" aria-label="Username field" />
</template>

<style scoped></style>
