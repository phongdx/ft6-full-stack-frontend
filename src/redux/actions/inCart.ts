import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  Country,
  InCartActions,
} from '../../types'

export function addToCart(country: Country): InCartActions {
  return {
    type: ADD_TO_CART,
    payload: {
      country,
    },
  }
}

export function removeFromCart(country: Country): InCartActions {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      country,
    },
  }
}
