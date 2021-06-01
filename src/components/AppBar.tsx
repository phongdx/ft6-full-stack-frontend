import React, { useState } from 'react'

import GoogleLogin from 'react-google-login'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Menu,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchBar from './SearchBar'
import { AppBarProp, AppState } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import DropdownCart from './DropdownCart'
import { logOut, toogleDarkMode } from '../redux/actions'

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
  responseGoogle,
}: AppBarProp) {
  const borrowedBooks = useSelector(
    (state: AppState) => state.loginDetail.user.borrowedBooks
  )
  const token = useSelector((state: AppState) => state.loginDetail.token)
  const dispatch = useDispatch()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const handleCartOpen = () => {
    setIsCartOpen(true)
  }
  const handleCartClose = () => {
    setIsCartOpen(false)
  }
  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
    setIsMenuOpen(true)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
    setIsMenuOpen(false)
  }
  const handleLogOut = () => {
    handleMenuClose()
    dispatch(logOut())
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
            LIBRARY
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
            <Badge badgeContent={borrowedBooks.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {(token && token === '') || !token ? (
            <GoogleLogin
              clientId="339989383854-qo129j1jagjn73qp3caemd8bbc7lh75p.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          ) : (
            <div>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <DropdownCart isCartOpen={isCartOpen} handleCartClose={handleCartClose} />
    </div>
  )
}
