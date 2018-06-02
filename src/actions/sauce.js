export const ADD_SAUCE = 'ADD_SAUCE'

export const addSauce = (sauce) => {
  return {
    type: ADD_SAUCE,
    payload: sauce
  }
}