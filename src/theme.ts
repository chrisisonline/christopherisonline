import { createMuiTheme } from '@material-ui/core/styles'

//default theme to get useful values
const MuiTheme = createMuiTheme()

//colors
export const colors = {
  text: '#4F4F4F',
  textLight: '#828282',
  text30: '#C7C7C7',
  text15: '#E5E5E5',
  white90: 'rgba(255, 255, 255, 0.9)',
  white95: 'rgba(255, 255, 255, 0.95)',
}

//font families
const Ubuntu = '"Ubuntu", sans-serif'
const Raleway = '"Raleway", sans-serif'

//style variables
export const styleVars = {
  navBar: '12vw',
  imgContainer: '48vw',
  contentContainer: '36vw',
}

//Mui Theme overrides
export const myTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1600,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: Ubuntu,
    h1: {
      color: colors.text30,
      fontFamily: Raleway,
      fontWeight: 900,
      fontSize: '8em',
    },
    h2: {
      color: colors.text,
      fontFamily: Raleway,
      fontWeight: 900,
      fontSize: '5.25em',
    },
    subtitle1: {
      color: colors.textLight,
      fontFamily: Raleway,
      fontWeight: 400,
      fontSize: '3.25em',
    },
    body1: {
      color: colors.text,
      fontWeight: 400,
      fontSize: '1.2em',
    },
    button: {
      fontFamily: Raleway,
      fontWeight: 500,
      fontSize: '1.5em',
    }
  },
  shadows: ['none', '0 4px 15px 0 rgba(0, 0, 0, 0.15)', '2px 2px 12px 0 rgba(0, 0, 0, 0.2)'].concat(
    Array(22).fill('0 5px 20px 0 rgba(0, 0, 0, 0.15)'),
  ) as any,
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: MuiTheme.spacing(2),
        paddingRight: MuiTheme.spacing(2),
        [MuiTheme.breakpoints.up('sm')]: {
          paddingLeft: '10vw',
          paddingRight: '10vw',
        },
      },
      /* Styles applied to the root element if `variant="regular"`. */
      regular: MuiTheme.mixins.toolbar,
      /* Styles applied to the root element if `variant="dense"`. */
      dense: {
        minHeight: 48,
      },
    },
    MuiButton: {
      root: {
        color: colors.text30,
      },
      text: {
        padding: MuiTheme.spacing(1, 1.5)
      }
    },
    MuiChip: {
      root: {
        backgroundColor: colors.text,
        borderRadius: 8,
        color: 'white',
        fontSize: '1em',
        height: 30,
      }
    },
  }
})

export default myTheme