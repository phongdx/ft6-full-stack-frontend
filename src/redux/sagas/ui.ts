import { takeLatest } from 'redux-saga/effects'

import { TOGGLE_DARK_MODE, ToogleDarkMode } from '../../types'

function* toggleTheme(action: ToogleDarkMode) {
  const localData = yield localStorage.getItem('darkMode')
  const darkMode = localData ? JSON.parse(localData) : false
  localStorage.setItem('darkMode', JSON.stringify(!darkMode))
}

export default [takeLatest(TOGGLE_DARK_MODE, toggleTheme)]
