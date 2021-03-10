import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get'
import PropTypes from 'prop-types'

import Link from '../Link'
import { TextStyleVariantsMap } from '../../foundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import { propToStyle } from '../../../theme/utils/propToStyle'

const ButtonGhost = css`
  color: ${ ({ theme, variant }) => get(theme, `colors.${ variant }.color`) };
  background-color: transparent;
`

const ButtonDefault = css`
  color: ${
  ({ theme, variant }) => get(theme, `colors.${ variant }.contrastText`)
};
  background-color: ${
  ({ theme, variant }) => get(theme, `colors.${ variant }.color`)
};
`

const ButtonWrapper = styled.button`
  padding: 12px 26px;
  border: 0;
  outline: 0;
  border-radius: ${ ({ theme }) => theme.borderRadius.large };
  font-weight: bold;
  cursor: pointer;
  transition: ${ ({ theme }) => theme.transitions.fast };

  ${ breakpointsMedia(
    {
      xs: css`${ TextStyleVariantsMap.smallestException }`,
      md: css`${ TextStyleVariantsMap.paragraph1 }`
    }
  ) }
  
  ${ ({ ghost }) => (ghost ? ButtonGhost : ButtonDefault) }

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${ ({ fullWidth }) => fullWidth && css`
    width: 100%;
  ` }

  ${ propToStyle('margin') }
  ${ propToStyle('display') }

  &:hover, &:focus {
    opacity: ${ ({ theme }) => theme.opacity.transparent };
  }
`
export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href)
  const tag = hasHref ? Link : 'button'
  return (
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  href: undefined
}
