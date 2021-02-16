import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableContainer, Paper } from '@material-ui/core'
import { CountriesProps } from '../types'
import CountryRow from './CountryRow'
import TableHeader from './TableHeader'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  flag: {
    width: 200,
    height: 100,
  },
})

const CountryTable = ({ countries }: CountriesProps) => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeader />
        <TableBody>
          {countries.map((country) => (
            <CountryRow
              key={country.name}
              flag={country.flag}
              name={country.name}
              languages={country.languages}
              population={country.population}
              region={country.region}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default React.memo(CountryTable)
