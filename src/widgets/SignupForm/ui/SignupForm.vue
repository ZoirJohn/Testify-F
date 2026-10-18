<script setup lang="ts">
const { xs } = useDisplay()
const form = ref()
const payload = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

async function handleSubmit() {
  const { valid } = await form.value.validate()
  if (!valid) {
    return
  }
  console.log(payload.value)
}
</script>

<template>
  <v-form class="d-flex" ref="form" @submit.prevent="handleSubmit">
    <v-card
      class="d-flex flex-column ga-sm-4 ga-2 pa-sm-8 pa-5 items-center justify-center align-self-center"
      :width="xs ? 310 : 425"
    >
      <v-card-title class="px-0 pt-0 text-capitalize"
        >{{ $t('auth.signupFormTitle') }}
      </v-card-title>
      <UsernameField v-model="payload.username" />
      <EmailField v-model="payload.email" />
      <SignupPasswordField v-model="payload.password" />
      <ConfirmPasswordField v-model="payload.confirmPassword" :match="payload.password" />
      <RouterLink to="/login" class="align-self-center mb-4">
        {{ $t('auth.haveAccountToLogin') }}
      </RouterLink>
      <v-btn
        class="flex-grow-0 align-self-end text-capitalize bg-blue-grey-darken-3"
        :loading="false"
        type="submit"
        >{{ $t('auth.signupButtonLabel') }}</v-btn
      >
    </v-card>
  </v-form>
</template>

<style scoped></style>
