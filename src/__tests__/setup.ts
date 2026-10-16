import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import { createI18n } from 'vue-i18n'

import { uz } from '@/shared/i18n/uz'
import { ru } from '@/shared/i18n/ru'
import { en } from '@/shared/i18n/en'

const vuetify = createVuetify()

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { uz, ru, en },
})

config.global.plugins = [vuetify, i18n]
