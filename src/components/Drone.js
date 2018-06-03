import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Delivery } from '../lib/PizzaData'
import { droneDelivery } from '../actions/drone'

class Drone extends Component {
  render() {
    return (
      <div>
        <h2>Choose your delivery option:</h2>
        {
          Delivery.map((Delivery) => {
            return <p key={Delivery.id}>
              <label>
                {Delivery.name}
                <input type="radio" name="Delivery" onChange={() => this.props.droneDelivery(Delivery)} />
              </label>
            </p>
          })
        }
      </div>
    )
  }
}


export default connect(null, { droneDelivery })(Drone)