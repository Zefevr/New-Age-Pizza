import { ADD_BASE } from '../actions/base'

export default (state = null, {type, payload}) => {
  switch (type) {
  case ADD_BASE:
    return payload
  default:
    return state
  }
}