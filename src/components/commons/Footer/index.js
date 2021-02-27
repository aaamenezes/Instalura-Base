import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  border-radius: 4px; 

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${ ({ theme }) => theme.colors.primary.medium.color };
    text-decoration: none;
    transition: .3s;

    &:hover,
    &:focus {
      opacity: ${ ({ theme }) => theme.opacity.transparent };
    }
  }
`

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href='https://www.alura.com.br/' target='_blank' rel='noreferrer'>
        <img
          src='https://www.alura.com.br/assets/img/alura-logo.svg'
          alt='Logo Alura'
        />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        o
        {' '}
        <a href='https://www.alura.com.br/' target='_blank' rel='noreferrer'>
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterWrapper>
  )
}
