import { DRONE_DELIVERY } from '../actions/drone'


export default function(state = "0", action = {}) {
  switch(action.type) {
  case DRONE_DELIVERY :
    return action.payload
  default :
    return state
  }
}