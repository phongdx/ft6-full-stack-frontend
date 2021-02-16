import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import SearchBar from './SearchBar'
import { AppBarProp, AppState } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import DropdownCart from './DropdownCart'
import { toogleDarkMode } from '../redux/actions'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  flexBox: {
    margin: 5,
  },
}))

export default function PrimarySearchAppBar({
  darkMode,
  value,
  handleInputChange,
}: AppBarProp) {
  const classes = useStyles()
  const inCartCountries = useSelector((state: AppState) => state.inCart.inCart)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const dispatch = useDispatch()
  const handleCartOpen = () => {
    setIsCartOpen(true)
  }
  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            COUNTRIES-SHOP
          </Typography>
          <SearchBar value={value} handleInputChange={handleInputChange} />
          <div className={classes.grow} />
          <IconButton
            color="inherit"
            onClick={() => {
              dispatch(toogleDarkMode())
            }}
          >
            {darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton color="inherit" onClick={handleCartOpen}>
            <Badge badgeContent={inCartCountries.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <DropdownCart isCartOpen={isCartOpen} handleCartClose={handleCartClose} />
    </div>
  )
}
