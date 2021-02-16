import {
  CountryActions,
  CountryState,
  FETCH_COUNTRIES_SUCCESS,
} from '../../types'

export default function country(
  state: CountryState = {
    countriesData: [],
  },
  action: CountryActions
): CountryState {
  switch (action.type) {
  case FETCH_COUNTRIES_SUCCESS: {
    const { countries } = action.payload

    return { ...state, countriesData: countries }
  }
  default:
    return state
  }
}
