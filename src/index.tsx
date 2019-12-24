import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
//redux
import { Provider } from 'react-redux'
import configureStore from './redux/store'
//mui custom theme
import { myTheme } from './theme'
import { ThemeProvider } from '@material-ui/core/styles'

ReactDOM.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
