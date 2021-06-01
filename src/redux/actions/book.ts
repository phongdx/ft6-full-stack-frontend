import { Dispatch } from 'redux'
import axios from 'axios'

import { FETCH_BOOKS_SUCCESS, Book } from '../../types'

export function fetchBooksSuccess(books: Book[]) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: {
      books,
    },
  }
}

export function fetchBooks() {
  return (dispatch: Dispatch) => {
    return axios
      .get('http://localhost:5000/api/v1/books')
      .then((res) => {
        dispatch(fetchBooksSuccess(res.data))
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
