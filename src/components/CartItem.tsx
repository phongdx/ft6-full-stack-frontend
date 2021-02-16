import React from 'react'

import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { CartItemProp } from '../types'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/actions'

const useStyles = makeStyles({
  flag: {
    width: 100,
    height: 50,
    borderRadius: 5,
  },
})

const CartItem = ({ country }: CartItemProp) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Grid container justify="space-between" alignItems="center" spacing={3}>
      <Grid item xs={4}>
        <img className={classes.flag} alt="flag img" src={country.flag} />
      </Grid>
      <Grid item xs={4}>
        <Typography noWrap>{country.name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch(removeFromCart(country))
          }}
        >
          REMOVE
        </Button>
      </Grid>
    </Grid>
  )
}

export default React.memo(CartItem)
