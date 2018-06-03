import { ADD_PRICE } from '../actions/totalPrice'

export default function(state = 0, action = {}) {
  switch(action.type) {
  case ADD_PRICE :
    return action.payload
  default :
    return state
  }
}