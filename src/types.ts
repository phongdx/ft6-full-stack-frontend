// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

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

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToogleDarkMode = {
  type: typeof TOGGLE_DARK_MODE
  payload: {}
}

export type UiActions = ToogleDarkMode

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  darkMode: boolean
}

export type AppState = {
  country: CountryState
  product: ProductState
  ui: UiState
  inCart: InCartState
}

export type AppBarProp = {
  darkMode: boolean
  value: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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
