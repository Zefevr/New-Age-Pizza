export const DRONE_DELIVERY='DRONE_DELIVERY'

export const droneDelivery = ( delivery ) => {
  return {
    type: DRONE_DELIVERY,
    payload: delivery
  }
}