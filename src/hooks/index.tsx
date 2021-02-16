import { useState, useEffect, useCallback } from 'react'

import { Country, AppState } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../redux/actions/country'

const useCountries = (searchInput: string): [Country[]] => {
  const countries = useSelector(
    (state: AppState) => state.country.countriesData
  )
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const dispatch = useDispatch()

  const getCountries = useCallback(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    getCountries()
  }, [dispatch, getCountries])

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) => {
        return country.name.toLowerCase().includes(searchInput.toLowerCase())
      })
    )
  }, [searchInput, countries])

  return [filteredCountries]
}

export default useCountries
