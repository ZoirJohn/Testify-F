<script setup lang="ts">
const { t } = useI18n()
const rules = [
  required(t('auth.passwordRequired')),
  minLength(t('auth.minimumLength') + ' ' + MINIMUM_LENGTH, MINIMUM_LENGTH),
  maxLength(t('auth.maximumLength'), MAXIMUM_LENGTH),
  specialChars(t('auth.passwordSpecialChar')),
]
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
