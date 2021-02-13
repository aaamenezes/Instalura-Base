import styled, { css } from 'styled-components'
import get from 'lodash/get'
import { TextStyleVariantsMap } from '../../foundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'

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

  ${ breakpointsMedia(
    {
      xs: css`${ TextStyleVariantsMap.smallestException }`,
      md: css`${ TextStyleVariantsMap.paragraph1 }`
    }
  )}
  
  
  ${ ({ghost}) => ghost ? ButtonGhost : ButtonDefault}

  &:hover, &:focus {
    opacity: .5;
  }
`