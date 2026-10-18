import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import { UsernameField } from '@/entities/Login'

describe('Username field component tests', () => {
  it('should raise error when a value does not pass rules', async () => {
    const lengthErrMsg = 'Minimum length is 5'
    const lengthRule = (value: string) => value?.length  >= 5 || lengthErrMsg

    const { getByLabelText, getByText } = render(UsernameField, {
      props: {
        rules: [lengthRule],
      },
    })

    await fireEvent.update(getByLabelText('Username'), 'Alex')

    expect(getByText(lengthErrMsg)).toBeTruthy()
  })
})
