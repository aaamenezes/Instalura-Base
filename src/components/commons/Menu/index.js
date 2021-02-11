import React from 'react'
import Logo from '../../../theme/Logo'
import { Button } from '../Button'
import { MenuWrapper } from './styles/MenuWrapper'

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    text: 'Sobre',
    url: '/sobre',
  }
]

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link,index) => {
          return (
            <li key={index}>
              <a href={link.url}>
                {link.text}
              </a>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button variant="primary.medium" ghost>
          Entrar
        </Button>
        <Button variant="secondary.medium">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}

