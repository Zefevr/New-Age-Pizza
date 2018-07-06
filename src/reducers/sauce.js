import { ADD_SAUCE } from '../actions/sauce'

export default (state = [], {type, payload}) => {
  switch (type) {
  case ADD_SAUCE:
    return payload
  default:
    return state
  }
}