import React from 'react'

import { Drawer, makeStyles, Typography } from '@material-ui/core'
import { AppState, Book, DropdownCartProps } from '../types'
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
  const idList = useSelector(
    (state: AppState) => state.loginDetail.user.borrowedBooks
  )
  const bookList = useSelector((state: AppState) => state.book.books)
  const borrowList = bookList.filter((book: Book) => idList.includes(book._id))
  const classes = useStyles()
  return (
    <Drawer anchor="right" open={isCartOpen} onClose={handleCartClose}>
      <Typography variant="h5" noWrap className={classes.cartTitle}>
        Your Book Cart
      </Typography>
      <div className={classes.cartItemList}>
        {borrowList.length ? (
          borrowList.map((book: Book) => (
            <CartItem key={book.title} book={book} />
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

export default DropdownCart
