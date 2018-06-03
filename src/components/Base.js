import React from 'react';
import { base } from '../lib/PizzaData'
import { connect } from 'react-redux'
import { addBase } from '../actions/base'


class Base extends React.Component{
  constructor(props) {
    super(props);
    this.state = { base: '' };
  
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ base: event.target.value });
  }
    
  render() {
    return (
      <div>
        <h2>Choose your base:</h2>
        {
          base.map((base) => {
            return <p key={base.id}>
              <label>{base.name} &euro; {base.price}
                <input type="radio" name="base" onChange={_ => this.props.addBase(base)}/>
              </label>
            </p>
          })
        }
      </div>
        
    );
  }
}
      
export default connect(null, { addBase })(Base)
