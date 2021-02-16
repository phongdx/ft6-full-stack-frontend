import { takeLatest } from 'redux-saga/effects'

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  AddToCart,
  RemoveFromCart,
  Country,
} from '../../types'

// function* doSomethingWhenAddingProduct(action: AddProductAction) {
//   yield console.log(action)
// }

function* addCountryToLocalStorage(action: AddToCart) {
  const localData = yield localStorage.getItem('inCart')
  const inCart = localData ? JSON.parse(localData) : []
  inCart.push(action.payload.country)
  localStorage.setItem('inCart', JSON.stringify(inCart))
}

function* removeCountryFromLocalStorage(action: RemoveFromCart) {
  const localData = yield localStorage.getItem('inCart')
  const inCart = localData ? JSON.parse(localData) : []
  const removeCountry = action.payload.country
  const filteredCart = inCart.filter(
    (item: Country) => item.name !== removeCountry.name
  )
  localStorage.setItem('inCart', JSON.stringify(filteredCart))
}

export default [
  takeLatest(ADD_TO_CART, addCountryToLocalStorage),
  takeLatest(REMOVE_FROM_CART, removeCountryFromLocalStorage),
]
