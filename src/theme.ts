import { createMuiTheme } from '@material-ui/core/styles'

//default theme to get useful values
const MuiTheme = createMuiTheme()

//colors
export const textColor = '#4F4F4F'
export const textColorLight = '#828282'
export const textColor30 = '#C7C7C7'

//font families
const Ubuntu = '"Ubuntu", sans-serif'
const Raleway = '"Raleway", sans-serif'

export const myTheme = createMuiTheme({
  typography: {
    fontFamily: Ubuntu,
    h1: {
      color: textColor30,
      fontFamily: Raleway,
      fontWeight: 900,
      fontSize: '8em',
    },
    h2: {
      color: textColor,
      fontFamily: Raleway,
      fontWeight: 900,
      fontSize: '5.25em',
    },
    subtitle1: {
      color: textColorLight,
      fontFamily: Raleway,
      fontWeight: 400,
      fontSize: '3.5em',
    },
    body1: {
      color: textColor,
      fontWeight: 400,
      fontSize: '1.25em',
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
    MuiAppBar:{
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
      text: {
        padding: MuiTheme.spacing(1, 1.5)
      }
    },
  }
})

export default myTheme