import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { toppings } from '../lib/PizzaData'
import {addToppings, deleteToppings} from '../actions/toppings'
import store from '../store'


class Toppings extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {value: ''}
    
    this.handleChange = this.handleChange.bind(this);
  
  }
  handleChange = (event) => {
    if (event.target.checked) {
      store.dispatch(addToppings(event.target.value))
    } else {
      store.dispatch(deleteToppings(event.target.value));
    }
  }
            
  handleSubmit(event) {
    event.preventDefault();
  }
            
    
  render() {
    return (

      <form 
        value={this.state.value}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}>
        <h2>Choose your Toppings (Max 3); 0.5 € each:</h2>
    
        <input type="checkbox" value={toppings[0].name}/>
        <label>{toppings[0].name}</label>
        
        <input type="checkbox" value={toppings[1].name}/>
        <label>{toppings[1].name}</label>
        
        <input type="checkbox" value={toppings[2].name}/>
        <label>{toppings[2].name}</label>

        <input type="checkbox" value={toppings[3].name}/>
        <label>{toppings[3].name}</label>
        
        <input type="checkbox" value={toppings[4].name }/>
        <label>{toppings[4].name}</label>

        <input type="checkbox"value={toppings[5].name}/>
        <label>{toppings[5].name}</label>

        <input type="checkbox" value={toppings[6].name}/>
        <label>{toppings[6].name}</label>
          
      </form>
    )
  }
}


const mapStateToProps = function (state, props) {
  return {
    toppings: state.toppings,
  
  }
}

export default connect(mapStateToProps, {addToppings, deleteToppings})(Toppings)



