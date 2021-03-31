import React from 'react'
import user from '@testing-library/user-event'
import { render, screen } from '../../../infra/test/testUtils'
import TextField from '.'

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder='Nome'
        value='Mario'
        onChange={() => {}}
        name='name'
      />
    )
    // screen.debug()
    const textField = screen.getByPlaceholderText(/nome/i)
    expect(textField).toMatchSnapshot()
  })

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn()
        render(
          <TextField
            placeholder='Nome'
            value='Andre'
            onChange={onChangeMock}
            name='nome'
            isTouched
          />
        )
        const inputNome = screen.getByPlaceholderText(/nome/i)
        user.type(inputNome, 'devsoutinho')
        expect(onChangeMock).toHaveBeenCalledTimes(11)
      })
    })
  })

  describe('when field is invalid', () => {
    // Elemento tenha o span de texto
    test('display the respective error mesage', () => {
      render(
        <TextField
          placeholder='Email'
          value='@gmail.com'
          onChange={() => {}}
          name='email'
          isTouched
          error='campo obrigatório'
        />
      )
      expect(screen.getByPlaceholderText(/email/i)).toHaveValue('@gmail.com')
      expect(screen.getByRole('alert')).toHaveTextContent('campo obrigatório')

      const inputEmail = screen.getByPlaceholderText(/email/i)
      expect(inputEmail).toMatchSnapshot()
    })
  })
})
