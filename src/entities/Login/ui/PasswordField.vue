<script setup lang="ts">
const { t } = useI18n()
const requiredMsg = useChangeCase(t('auth.loginPasswordRequired'), 'sentenceCase')
const lengthMsg = useChangeCase(t('auth.loginPasswordLength'), 'sentenceCase')
const inputLabel = useChangeCase(t('auth.loginPasswordLabel'), 'sentenceCase')
const rules = [
  required(requiredMsg.value),
  minLength(lengthMsg.value + ' ' + MINIMUM_LENGTH, MINIMUM_LENGTH),
]
</script>

<template>
  <TextField type="password" :label="inputLabel" :rules="rules" />
</template>

<style scoped></style>
