<script setup lang="ts">
const { availableLocales, locale } = useI18n()
function setLocale() {
  const currentLocaleIndex = availableLocales.findIndex((lcl) => lcl === locale.value)
  const nextLocale = availableLocales[(currentLocaleIndex + 1) % availableLocales.length]
  locale.value = nextLocale
}
</script>

<template>
  <header>
    <div class="container">
      <button @click="setLocale">
        {{ locale }}
      </button>
    </div>
  </header>
</template>

<style scoped></style>
