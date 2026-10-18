<script setup lang="ts">
const { t } = useI18n()
const rules = [required(t('auth.emailRequired'))]
</script>
<template>
  <TextField type="email" :rules="rules" :label="$t('auth.emailLabel')" />
</template>

<style scoped></style>
