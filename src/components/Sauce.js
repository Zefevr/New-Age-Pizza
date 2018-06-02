import React from 'react';
import { sauce } from '../lib/PizzaData'
import { connect } from 'react-redux'
import { addSauce } from '../actions/sauce'

class Sauce extends React.Component{
  constructor(props) {
    super(props);
    this.state = { suace: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ sauce: event.target.value });
  }
  
  render() {
    return (
      <div>
        <h2>Choose your sauce:</h2>
        {
          sauce.map((sauce) => {
            return <p key={sauce.id}>
              <label>{sauce.name} &euro; {sauce.price}
                <input type="radio" name="sauce" onChange={_ => this.props.addSauce(sauce)}/></label>
            </p>
          })
        }
      </div>
      
    );
  }
}


export default connect(null, { addSauce })(Sauce)
