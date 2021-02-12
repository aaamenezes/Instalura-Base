import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariantsMap } from '../../foundation/Text'

const ButtonGhost = css`
  color: ${ ({theme,variant}) => get(theme, `colors.${variant}.color`) };
  background-color: transparent;
`

const ButtonDefault = css`
  color: ${ ({theme,variant}) => get(theme, `colors.${variant}.contrastText`) };
  background-color: ${ ({theme,variant}) => get(theme, `colors.${variant}.color`) };
`

export const Button = styled.button`
  padding: 12px 26px;
  border: 0;
  outline: 0;
  border-radius: ${ ({theme}) => theme.borderRadius.large };
  font-weight: bold;
  opacity: 1;
  cursor: pointer;
  transition: ${ ({theme}) => theme.transitions.fast };
  ${ ({ghost}) => ghost ? ButtonGhost : ButtonDefault}
  ${TextStyleVariantsMap.smallestException}
  
  &:hover, &:focus {
    opacity: .5;
  }
`