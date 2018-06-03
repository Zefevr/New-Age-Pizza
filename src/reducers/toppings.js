import { ADD_TOPPINGS } from '../actions/toppings'
import { DELETE_TOPPINGS} from '../actions/toppings'

export default function (state = [], action = {}) {
  switch (action.type) {
  case ADD_TOPPINGS:
    if (state.length < 3) {
      return state.concat(action.payload)
    } else {
      return state
    }

  case DELETE_TOPPINGS:
    return state.filter(toppings => toppings !== action.payload)
  default:
    return state
  }
}