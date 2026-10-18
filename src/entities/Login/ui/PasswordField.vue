<script setup lang="ts">
const { t } = useI18n()
const rules = [required(t('auth.passwordRequired'))]
</script>

<template>
  <TextField
    type="password"
    :label="$t('auth.passwordLabel')"
    :rules="rules"
    :max-errors="rules.length"
  />
</template>

<style scoped></style>
