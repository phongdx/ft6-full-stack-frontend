import React from 'react'

import {
  makeStyles,
  TableCell,
  TableRow,
  Typography,
  Link,
} from '@material-ui/core'
import { AppState, Country } from '../types'
import Flag from './Flag'
import ButtonCell from './ButtonCell'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/actions/inCart'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    listStyle: 'none',
    textAlign: 'center',
  },
})

const CountryRow = ({ name, flag, languages, population, region }: Country) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const addCountryToCart = () => {
    const country = { name, flag, languages, population, region }
    dispatch(addToCart(country))
  }
  const inCartCountries = useSelector((state: AppState) => state.inCart.inCart)
  const inCartNameList = inCartCountries.map((i) => i.name)
  const added = inCartNameList.includes(name)
  return (
    <TableRow>
      <Flag flag={flag} />
      <TableCell align="center">
        <Typography>
          <Link to={`/country/${name}`} color="inherit" component={RouterLink}>
            {name}
          </Link>
        </Typography>
      </TableCell>
      <TableCell>
        {languages.map((language) => (
          <li className={classes.list} key={language.name}>
            <Typography>{language.name}</Typography>
          </li>
        ))}
      </TableCell>
      <TableCell align="center">
        <Typography>{population}</Typography>
      </TableCell>
      <TableCell align="center">
        <Typography>{region}</Typography>
      </TableCell>
      <ButtonCell addCountryToCart={addCountryToCart} added={added} />
    </TableRow>
  )
}

export default CountryRow
