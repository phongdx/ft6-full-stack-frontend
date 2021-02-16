import {
  InCartActions,
  InCartState,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from '../../types'

export default function inCart(
  state: InCartState = {
    inCart: [],
  },
  action: InCartActions
): InCartState {
  switch (action.type) {
  case ADD_TO_CART: {
    const { country } = action.payload

    return { ...state, inCart: [...state.inCart, country] }
  }
  case REMOVE_FROM_CART: {
    const { country } = action.payload

    return {
      ...state,
      inCart: state.inCart.filter(
        (cartCountry) => cartCountry.name !== country.name
      ),
    }
  }
  default:
    return state
  }
}
