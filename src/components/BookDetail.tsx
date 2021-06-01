import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
  Grid,
  Box,
} from '@material-ui/core'
import { postBorrowedBook } from '../redux/actions'
import { AppState } from '../types'

const useStyles = makeStyles({
  root: {
    margin: 20,
    minHeight: 325,
    overflow: 'initial',
    borderRadius: 16,
  },
  media: {
    width: 227,
    height: 300,
    borderRadius: 16,
    borderColor: 'black',
    backgroundColor: '#fff',
  },
  shadowBox: {
    marginTop: 13,
    marginLeft: 10,
    width: 170,
    height: 225,
    borderRadius: 16,
  },
})

const BookDetail = ({ book }: any) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleBorrowBook = () => {
    dispatch(postBorrowedBook(book._id))
  }
  const borrowedBooks = useSelector(
    (state: AppState) => state.loginDetail.user.borrowedBooks
  )
  const borrowed = borrowedBooks.includes(book._id)
  return (
    <Grid item xs={6}>
      <Card className={classes.root} variant="outlined">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <Box boxShadow={3} className={classes.shadowBox}>
              <CardMedia className={classes.media} image={book.coverUrl} />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography noWrap gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`by ${book.author}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={12}>
                  <Button size="small" variant="contained" color="primary">
                    View
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {borrowed ? (
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      disabled
                    >
                      Borrow
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={handleBorrowBook}
                    >
                      Borrow
                    </Button>
                  )}
                </Grid>
              </Grid>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default BookDetail
