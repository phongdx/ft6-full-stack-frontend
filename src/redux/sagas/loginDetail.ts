import { takeLatest } from 'redux-saga/effects'

import {
  AddBorrowedBook,
  ADD_BORROWED_BOOK,
  LOGGIN_SUCCESS,
  LoginSuccess,
  LogOut,
  LOG_OUT,
  RemoveBorrowedBook,
  REMOVE_BORROWED_BOOK,
} from '../../types'

function* addTokenToLocalStorage(action: LoginSuccess) {
  const { token, loggedUser } = yield action.payload
  localStorage.setItem('token', token)
  localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
}

function* removeTokenFromLocalStorage(action: LogOut) {
  localStorage.setItem('token', '')
  const defaultUser = {
    email: '',
    firstName: '',
    lastName: '',
    userType: '',
    _id: '',
    borrowedBooks: [],
  }
  yield localStorage.setItem('loggedUser', JSON.stringify(defaultUser))
}

function* addBorrowedBook(action: AddBorrowedBook) {
  const data = localStorage.getItem('loggedUser')
  const loggedUser = data
    ? JSON.parse(data)
    : {
      email: '',
      firstName: '',
      lastName: '',
      userType: '',
      _id: '',
      borrowedBooks: [],
    }
  const { bookId } = action.payload
  loggedUser.borrowedBooks.push(bookId)
  yield localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
}

function* removeBorrowedBook(action: RemoveBorrowedBook) {
  const data = localStorage.getItem('loggedUser')
  const loggedUser = data
    ? JSON.parse(data)
    : {
      email: '',
      firstName: '',
      lastName: '',
      userType: '',
      _id: '',
      borrowedBooks: [],
    }
  const { bookId } = action.payload
  const updateList = loggedUser.borrowedBooks.filter(
    (book: string) => book !== bookId
  )
  loggedUser.borrowedBooks = updateList
  yield localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
}

export default [
  takeLatest(REMOVE_BORROWED_BOOK, removeBorrowedBook),
  takeLatest(ADD_BORROWED_BOOK, addBorrowedBook),
  takeLatest(LOGGIN_SUCCESS, addTokenToLocalStorage),
  takeLatest(LOG_OUT, removeTokenFromLocalStorage),
]
