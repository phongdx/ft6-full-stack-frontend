import { combineReducers } from 'redux'

import ui from './ui'
import inCart from './inCart'
import loginDetail from './loginDetail'
import book from './book'

const createRootReducer = () =>
  combineReducers({
    book,
    ui,
    inCart,
    loginDetail,
  })

export default createRootReducer
