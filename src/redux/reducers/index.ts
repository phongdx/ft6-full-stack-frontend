import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import country from './country'
import inCart from './inCart'

const createRootReducer = () =>
  combineReducers({
    country,
    product,
    ui,
    inCart,
  })

export default createRootReducer
