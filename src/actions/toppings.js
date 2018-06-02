export const ADD_TOPPINGS = 'ADD_TOPPINGS'

export const addToppings = (toppings) => {
  return {
    type: ADD_TOPPINGS,
    payload: toppings
  }
}