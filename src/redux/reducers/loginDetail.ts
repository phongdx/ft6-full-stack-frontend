import {
  LoginActions,
  LoginState,
  LOGGIN_SUCCESS,
  LOG_OUT,
  ADD_BORROWED_BOOK,
  REMOVE_BORROWED_BOOK,
} from '../../types'

export default function loginDetail(
  state: LoginState = {
    token: '',
    user: {
      email: '',
      firstName: '',
      lastName: '',
      userType: '',
      _id: '',
      borrowedBooks: [],
    },
  },
  action: LoginActions
): LoginState {
  switch (action.type) {
  case LOGGIN_SUCCESS: {
    const { loggedUser, token } = action.payload

    return { ...state, token, user: loggedUser }
  }
  case LOG_OUT: {
    return {
      token: '',
      user: {
        email: '',
        firstName: '',
        lastName: '',
        userType: '',
        _id: '',
        borrowedBooks: [],
      },
    }
  }
  case ADD_BORROWED_BOOK: {
    const { bookId } = action.payload
    return {
      ...state,
      user: {
        ...state.user,
        borrowedBooks: [...state.user.borrowedBooks, bookId],
      },
    }
  }
  case REMOVE_BORROWED_BOOK: {
    const { bookId } = action.payload
    return {
      ...state,
      user: {
        ...state.user,
        borrowedBooks: state.user.borrowedBooks.filter(
          (book) => book !== bookId
        ),
      },
    }
  }
  default:
    return state
  }
}
