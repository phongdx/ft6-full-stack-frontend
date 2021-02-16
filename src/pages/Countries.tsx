import React from 'react'
import { useState } from 'react'
import PrimarySearchAppBar from '../components/AppBar'
import CountryTable from '../components/Table'
import useCountries from '../hooks'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { AppState } from '../types'

const Countries = () => {
  const [searchInput, setSearchInput] = useState('')
  const [countries] = useCountries(searchInput)
  const darkMode = useSelector((state: AppState) => state.ui.darkMode)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  return (
    <div>
      <Paper>
        <PrimarySearchAppBar
          darkMode={darkMode}
          value={searchInput}
          handleInputChange={handleInputChange}
        />
        <CountryTable countries={countries} />
      </Paper>
    </div>
  )
}

export default Countries
