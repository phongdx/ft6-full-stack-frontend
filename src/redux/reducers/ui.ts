import { TOGGLE_DARK_MODE, UiState, UiActions } from '../../types'

export default function ui(
  state: UiState = {
    darkMode: false,
  },
  action: UiActions
): UiState {
  switch (action.type) {
  case TOGGLE_DARK_MODE: {
    return {
      ...state,
      darkMode: !state.darkMode,
    }
  }
  default:
    return state
  }
}
