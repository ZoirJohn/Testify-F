<script setup lang="ts">
const { t } = useI18n()
const requiredMsg = useChangeCase(t('auth.loginUsernameRequired'), 'sentenceCase')
const inputLabel = useChangeCase(t('auth.loginUsernameLabel'), 'sentenceCase')

function required(value: string) {
  if (!value) {
    return requiredMsg.value
  }
  return true
}
const rules = [required]
</script>

<template>
  <TextField :rules="rules" :label="inputLabel" aria-label="username_field" />
</template>

<style scoped></style>
