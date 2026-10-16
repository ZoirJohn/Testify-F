import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/app/App.vue'
import { createVuetify } from 'vuetify/framework'
import { createI18n } from 'vue-i18n'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App, { global: { plugins: [createVuetify(),createI18n({})] } })
    expect(wrapper.text()).toContain('You did it!')
  })
})
