import { TOGGLE_DARK_MODE, ToogleDarkMode } from '../../types'

export function toogleDarkMode(): ToogleDarkMode {
  return {
    type: TOGGLE_DARK_MODE,
    payload: {},
  }
}
