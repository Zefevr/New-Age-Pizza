export const TOTAL_PRICE='TOTAL_PRICE'

export const totalPrice = ( price ) => {
  return {
    type: TOTAL_PRICE,
    payload: price
  }
}