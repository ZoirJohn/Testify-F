<script setup lang="ts">
const { t } = useI18n()
const requiredMsg = useChangeCase(t('auth.loginPasswordRequired'), 'sentenceCase')
const noMatchMsg = useChangeCase(t('auth.loginPasswordNoMatch'), 'sentenceCase')
const inputLabel = useChangeCase(t('auth.signupPasswordMatch'), 'sentenceCase')
const props = defineProps<{ match: string }>()
const rules = [required(requiredMsg.value), match(noMatchMsg.value, props.match)]
</script>

<template>
  <TextField type="password" :label="inputLabel" :rules="rules" />
</template>

<style scoped></style>
