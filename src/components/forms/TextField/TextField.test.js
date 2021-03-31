import React from 'react'
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
})
