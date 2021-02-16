import React from 'react'

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppState } from '../types'

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    maxWidth: 345,
    minWidth: 300,
  },
  media: {
    height: 140,
  },
})

const CountryDetail = () => {
  const { countryName } = useParams<{ countryName: string }>()
  const classes = useStyles()
  const countries = useSelector(
    (state: AppState) => state.country.countriesData
  )
  const country = countries.find((country) => country.name === countryName)
  const languagesList = country?.languages.map((language) => language.name)

  return (
    <div>
      {country && languagesList ? (
        <Box
          display="flex"
          justifyContent="center"
          style={{ minWidth: '250px' }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={country.flag}
                title={country.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {country.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Languages: {languagesList.join(', ')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Population: {country.population}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Region: {country.region}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ) : (
        <div>No country found</div>
      )}
    </div>
  )
}

export default CountryDetail
