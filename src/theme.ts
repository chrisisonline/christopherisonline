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
    button: {
      fontFamily: Raleway,
      fontWeight: 500,
      fontSize: '1.25em',
    }
  },
  overrides: {
    MuiAppBar:{
      colorPrimary: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }
    },
    MuiToolbar: {
      /* Styles applied to the root element if `disableGutters={false}`. */
      gutters: {
        paddingLeft: MuiTheme.spacing(2),
        paddingRight: MuiTheme.spacing(2),
        [MuiTheme.breakpoints.up('sm')]: {
          paddingTop: MuiTheme.spacing(6),
          paddingLeft: MuiTheme.spacing(18),
          paddingRight: MuiTheme.spacing(18),
        },
      },
      /* Styles applied to the root element if `variant="regular"`. */
      regular: MuiTheme.mixins.toolbar,
      /* Styles applied to the root element if `variant="dense"`. */
      dense: {
        minHeight: 48,
      },
    }
  }
})

export default myTheme