import { Dispatch } from 'redux'
import axios from 'axios'

import { FETCH_COUNTRIES_SUCCESS, Country } from '../../types'

export function fetchCountriesSuccess(countries: Country[]) {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: {
      countries,
    },
  }
}

export function fetchCountries() {
  return (dispatch: Dispatch) => {
    return axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=flag;name;languages;population;region'
      )
      .then((res) => {
        dispatch(fetchCountriesSuccess(res.data))
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
