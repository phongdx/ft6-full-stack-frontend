// Action types
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const LOGGIN_SUCCESS = 'LOGGIN_SUCCESS'
export const LOG_OUT = 'LOG_OUT'
export const ADD_BORROWED_BOOK = 'ADD_BORROWED_BOOK'
export const REMOVE_BORROWED_BOOK = 'REMOVE_BORROWED_BOOK'

//Login Details
export type UserInfo = {
  firstName: string
  lastName: string
  email: string
  userType: string
  _id: string
  borrowedBooks: string[]
}

export type LoginState = {
  token: string
  user: UserInfo
}

export type LoginResponse = {
  loggedUser: UserInfo
  token: string
}

export type LoginSuccess = {
  type: typeof LOGGIN_SUCCESS
  payload: {
    loggedUser: UserInfo
    token: string
  }
}

export type LogOut = {
  type: typeof LOG_OUT
}

export type AddBorrowedBook = {
  type: typeof ADD_BORROWED_BOOK
  payload: {
    bookId: string
  }
}

export type RemoveBorrowedBook = {
  type: typeof REMOVE_BORROWED_BOOK
  payload: {
    bookId: string
  }
}

export type LoginActions =
  | LoginSuccess
  | LogOut
  | AddBorrowedBook
  | RemoveBorrowedBook

//Books

export type Book = {
  _id: string
  isbn: string
  title: string
  pages: number
  publishedDate: Date
  description: string
  author: string
  coverUrl: string
}

export type BookState = {
  books: Book[]
}

export type FetchBooksSuccess = {
  type: typeof FETCH_BOOKS_SUCCESS
  payload: {
    books: Book[]
  }
}

export type BookActions = FetchBooksSuccess

export type BookProp = {
  book: Book
}
//Country
export type Languages = {
  name: string
}

export type Country = {
  flag: string
  languages: Languages[]
  name: string
  population: number
  region: string
}

export type CountryState = {
  countriesData: Country[]
}

export type FetchCountriesSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: {
    countries: Country[]
  }
}

export type CountryActions = FetchCountriesSuccess

//Cart
export type InCartState = {
  inCart: Country[]
}

export type AddToCart = {
  type: typeof ADD_TO_CART
  payload: {
    country: Country
  }
}

export type RemoveFromCart = {
  type: typeof REMOVE_FROM_CART
  payload: {
    country: Country
  }
}

export type InCartActions = AddToCart | RemoveFromCart

export type ToogleDarkMode = {
  type: typeof TOGGLE_DARK_MODE
  payload: {}
}

export type UiActions = ToogleDarkMode

// Using dynamic keys from an enum
export type UiState = {
  darkMode: boolean
}

export type AppState = {
  book: BookState
  ui: UiState
  inCart: InCartState
  loginDetail: LoginState
}

export type AppBarProp = {
  darkMode: boolean
  value: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  responseGoogle: (res: any) => void
}

export type SearchBarProp = {
  value: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type CountriesProps = {
  countries: Country[]
}

export type FlagProp = {
  flag: string
}

export type ButtonCellProp = {
  addCountryToCart: () => void
  added: boolean
}

export type DropdownCartProps = {
  isCartOpen: boolean
  handleCartClose: () => void
}

export type CartItemProp = {
  country: Country
}
