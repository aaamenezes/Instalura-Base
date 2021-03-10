import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../../theme/Logo'
import Text from '../../foundation/Text'
import { Button } from '../Button'
import { MenuWrapper } from './styles/MenuWrapper'

const links = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'Perguntas frequentes',
    url: '/faq'
  },
  {
    text: 'Sobre',
    url: '/sobre'
  }
]

export default function Menu({ onCadastrarClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map(link => (
          <li key={link.url}>
            <Text tag='a' href={link.url} variant='smallestException'>
              {link.text}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button variant='primary.medium' ghost href='/app/login'>
          Entrar
        </Button>
        <Button variant='secondary.medium' onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired
<<<<<<< HEAD
}
=======
}
>>>>>>> 964a390218d06d53e858486da3ef5c7749b914a4
