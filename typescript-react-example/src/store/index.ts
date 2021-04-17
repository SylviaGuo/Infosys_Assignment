import {createStore} from 'redux'
import PinReducer from './pin/reducer'

const store = createStore(
  PinReducer,
  )

export default store