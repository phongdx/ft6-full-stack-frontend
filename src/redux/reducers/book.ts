import { BookActions, BookState, FETCH_BOOKS_SUCCESS } from '../../types'

export default function country(
  state: BookState = {
    books: [],
  },
  action: BookActions
): BookState {
  switch (action.type) {
  case FETCH_BOOKS_SUCCESS: {
    const { books } = action.payload

    return { ...state, books }
  }
  default:
    return state
  }
}
