export const ADD_TOPPINGS = 'ADD_TOPPINGS'
export const DELETE_TOPPINGS = 'DELETE_TOPPINGS'

export const addToppings = (toppings) => {
  return {
    type: ADD_TOPPINGS,
    payload: toppings
  }
}


export const deleteToppings = ( toppings ) => {
  return {
    type: DELETE_TOPPINGS,
    payload: toppings
  }
}