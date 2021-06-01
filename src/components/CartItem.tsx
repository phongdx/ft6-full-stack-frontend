import React from 'react'

import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { returnBook } from '../redux/actions'
import { BookProp } from '../types'

const useStyles = makeStyles({
  flag: {
    width: 132,
    height: 175,
    borderRadius: 5,
  },
  titleGrid: {
    minHeight: 175,
  },
})

const CartItem = ({ book }: BookProp) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleReturnBook = () => {
    dispatch(returnBook(book._id))
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <img className={classes.flag} alt="flag img" src={book.coverUrl} />
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
          className={classes.titleGrid}
        >
          <Grid item>
            <Typography>{book.title}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleReturnBook}
            >
              Return
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default React.memo(CartItem)
