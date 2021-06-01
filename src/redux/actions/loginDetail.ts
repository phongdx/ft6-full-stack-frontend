import {
  LOGGIN_SUCCESS,
  LoginResponse,
  LOG_OUT,
  ADD_BORROWED_BOOK,
  REMOVE_BORROWED_BOOK,
} from '../../types'

import { Dispatch } from 'redux'
import axios from 'axios'

export function loginSuccess({ loggedUser, token }: LoginResponse) {
  return {
    type: LOGGIN_SUCCESS,
    payload: {
      loggedUser,
      token,
    },
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}

export function addBorrowedBook(bookId: string) {
  return {
    type: ADD_BORROWED_BOOK,
    payload: {
      bookId,
    },
  }
}

export function removeBorrowedBook(bookId: string) {
  return {
    type: REMOVE_BORROWED_BOOK,
    payload: {
      bookId,
    },
  }
}

export function postBorrowedBook(bookId: string) {
  return (dispatch: Dispatch, state: any) => {
    return axios
      .post(
        `http://localhost:5000/api/v1/users/borrow/${
          state().loginDetail.user._id
        }`,
        { bookId: bookId }
      )
      .then((res) => {
        if (res.status === 200) dispatch(addBorrowedBook(bookId))
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

export function returnBook(bookId: string) {
  return (dispatch: Dispatch, state: any) => {
    return axios
      .post(
        `http://localhost:5000/api/v1/users/return/${
          state().loginDetail.user._id
        }`,
        { bookId: bookId }
      )
      .then((res) => {
        if (res.status === 200) dispatch(removeBorrowedBook(bookId))
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
