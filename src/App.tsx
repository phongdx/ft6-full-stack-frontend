import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

import Routes from './Routes'
import { AppState } from './types'

export default function App() {
  const darkMode = useSelector((state: AppState) => state.ui.darkMode)
  const lightTheme = createMuiTheme({})
  const darkTheme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#333333',
      },
    },
  })
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}
