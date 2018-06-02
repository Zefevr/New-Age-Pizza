import { ADD_TOPPINGS } from '../actions/toppings'

export default (state = null, {type, payload}) => {
  switch (type) {
  case ADD_TOPPINGS:
    return payload
  default:
    return state
  }
}