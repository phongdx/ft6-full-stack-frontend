import React from 'react'

import { Drawer, makeStyles, Typography } from '@material-ui/core'
import { AppState, DropdownCartProps } from '../types'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const useStyles = makeStyles((theme) => ({
  cartItemList: {
    width: 350,
    padding: 10,
  },
  cartTitle: {
    margin: 10,
  },
}))

const DropdownCart = ({ isCartOpen, handleCartClose }: DropdownCartProps) => {
  const inCartCountries = useSelector((state: AppState) => state.inCart.inCart)
  const classes = useStyles()
  return (
    <Drawer anchor="right" open={isCartOpen} onClose={handleCartClose}>
      <Typography variant="h5" noWrap className={classes.cartTitle}>
        Your Shopping Cart
      </Typography>
      <div className={classes.cartItemList}>
        {inCartCountries.length ? (
          inCartCountries.map((country) => (
            <CartItem key={country.name} country={country} />
          ))
        ) : (
          <Typography color="secondary" noWrap>
            Cart is currently empty
          </Typography>
        )}
      </div>
    </Drawer>
  )
}

export default React.memo(DropdownCart)
