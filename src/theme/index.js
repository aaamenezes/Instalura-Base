import { typographyVariants } from './typographyVariants'

const colors = {
  primary: {
    medium: {
      color: '#2196f3',
      contrastText: '#fff'
    },
    light: {
      color: '#4dabf5',
      contrastText: '#000'
    },
    dark: {
      color: '#1769aa',
      contrastText: '#fff'
    }
  },
  secondary: {
    medium: {
      color: '#f50057',
      contrastText: '#fff'
    },
    light: {
      color: '#f73378',
      contrastText: '#fff'
    },
    dark: {
      color: '#ab003c',
      contrastText: '#fff'
    }
  },
  modes: {
    normal: {},
    dark: {},
    alternative: {}
  }
}

const borderRadius = {
  small: '3px',
  large: '8px'
}

const transitions = {
  fast: '.3s ease-in-out',
  medium: '.7s ease-in-out',
  slow: '1s ease-in-out'
}

const fontFamily = {
  primary: '\'Rubik\', sans-serif',
  // secondary: ...
}

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

const opacity = {
  invisible: .1,
  transparent: .4,
  light: .7
}

export default {
  colors,
  fontFamily,
  typographyVariants,
  borderRadius,
  transitions,
  breakpoints,
  opacity
}