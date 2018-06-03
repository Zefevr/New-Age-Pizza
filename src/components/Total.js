import React, {PureComponent} from 'react'
import { connect } from 'react-redux'

class Total extends PureComponent {
        

  render() {

    if(this.props.base){
      this.basePrice = this.props.base.price
    }
    if(this.props.sauce){
      this.saucePrice = this.props.sauce.price
    }

    if(this.props.toppings){
      this.toppingsPrice = (this.props.toppings.length)*0.5
    }

    if(this.props.droneDelivery.id === "1"){
      this.deliveryPrice = (this.basePrice+this.saucePrice+this.toppingsPrice)*0.1
    
    }


    return (
      <div>
        <h1>Total Price </h1>
        {
          this.props.droneDelivery === "0"  && <div><h4>Total:</h4>
            <h2>{this.basePrice+this.saucePrice+this.toppingsPrice}€</h2></div>
        }
        {
          this.props.droneDelivery.id === "0"  && <div><h4>Total:</h4>
            <h2>{this.basePrice+this.saucePrice+this.toppingsPrice}€</h2></div>
        }
        <div>
          {
            this.props.droneDelivery.id === "1" && <div><h4>Total:</h4><h2>{(Math.round(this.basePrice+this.saucePrice+this.toppingsPrice)+(this.basePrice+this.saucePrice+this.toppingsPrice)*0.1).toFixed(2)}€</h2></div>
          }
        </div>
        <div>
          {
            this.props.droneDelivery.id === "1" && <div><h4>Turbo Drone 10%</h4><h2>€{(Math.round(this.basePrice+this.saucePrice+this.toppingsPrice)*0.1).toFixed(2)}€</h2></div>
          }
        </div>
      </div>
    )
  }
}



function mapStateToProps(state){
  return {
    base: state.base,
    sauce: state.sauce,
    toppings: state.toppings,
    droneDelivery: state.droneDelivery
  }
}
  
export default connect(mapStateToProps)(Total)


