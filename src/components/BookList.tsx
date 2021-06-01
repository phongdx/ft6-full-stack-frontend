import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BookCard from './BookCard'

const useStyles = makeStyles({
  root: {
    //height: '100vh',
    //marginTop: 10,
    // paddingLeft: '50px',
    // paddingRight: '50px',
  },
})

const BookList = ({ books }: any) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
      //spacing={1}
    >
      {books.map((book: any) => (
        <BookCard key={book.title} book={book} />
      ))}
    </Grid>
  )
}

export default BookList
