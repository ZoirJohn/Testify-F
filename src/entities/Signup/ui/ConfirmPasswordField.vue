<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{ match: string }>()
const rules = [
  required(t('auth.confirmPasswordRequired')),
  match(t('auth.confirmNoMatch'), () => props.match),
]
</script>

<template>
  <TextField
    type="password"
    :label="$t('auth.confirmPassword')"
    :rules="rules"
    :max-errors="rules.length"
  />
</template>

<style scoped></style>
