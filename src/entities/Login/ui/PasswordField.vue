<script setup lang="ts">
import { MINIMUM_LENGTH } from '@/shared/constants/password'
const { t } = useI18n()
const requiredMsg = useChangeCase(t('auth.loginPasswordRequired'), 'sentenceCase')
const lengthMsg = useChangeCase(t('auth.loginPasswordLength'), 'sentenceCase')
const inputLabel = useChangeCase(t('auth.loginPasswordLabel'), 'sentenceCase')

function required(value: string) {
  if (!value) {
    return requiredMsg.value
  }
  return true
}
function length(value: string) {
  if (value.length < MINIMUM_LENGTH) {
    return lengthMsg.value + ' ' + MINIMUM_LENGTH
  }
  return true
}
function specialChars(value: string) {
  if (!value.match(/^(?=.*?[#?!@$%^&*-])$/)) {
  }
  return true
}

const rules = [required, length, specialChars]
</script>

<template>
  <TextField type="password" :label="inputLabel" :rules="rules" />
</template>

<style scoped></style>
