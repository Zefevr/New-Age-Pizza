import React from 'react';
import { toppings } from '../lib/PizzaData'
import { connect } from 'react-redux'
import { addToppings } from '../actions/toppings'

class Toppings extends React.Component{
  constructor(props) {
    super(props);
    this.state = { toppings: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState ({ toppings: event.target.value });
    
  }

  isDisabled = id => {
    return (
      this.state.toppings.length > 2 && this.state.toppings.indexOf(id) === -1
    );
  };
  
  render() {
    return (
      <div>
        <h2>Choose your Toppings:</h2>
        <form >
          <legend>Toppings (Max 3 € 0,50 each)</legend>
          <br />
          <input type="checkbox" value="Pineapple" disabled={this.isDisabled("Pineapple")} onChange={this.handleChange} />
          <label for="Pineapple">Pineapple</label>
          <input type="checkbox" value="Corn" disabled={this.isDisabled("Pineapple")} onChange={this.handleChange} />
          <label for="Corn">Corn</label>
          <br />
          <input type="checkbox" value="Green Olives" disabled={this.isDisabled("Pineapple")} onChange={this.handleChange} />
          <label for="Green Olives">Green Olives</label>
          <input type="checkbox" value="Red Onion" disabled={this.isDisabled("Pineapple")} onChange={this.handleChange} />
          <label for="Red Onion">Red Onion</label>
          <br />
          <input type="checkbox" value="Spinach" disabled={this.isDisabled("Pineapple")} onChange={this.handleChange} />
          <label for="Spinach">Spinach</label>
          <input type="checkbox" value="Cherry Tomatoes" disabled={this.isDisabled("Pineapple")} onChange={this.handleChange} />
          <label for="Cherry Tomatoes">Cherry Tomatoes</label>
          <input type="checkbox" value="Chicken" disabled={this.isDisabled("Pineapple")} onChange={this.handleChange} />
          <label for="Chicken">Chicken</label>
        </form>
      </div>
      
    );
  }
}


export default connect(null, { addToppings })(Toppings)







/* import React from "react";
import ReactDOM from "react-dom";
import { Checkbox, Row, Col } from "antd";

class CheckBoxed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  onChange = checkedValues => {
    this.setState(() => {
      return { checked: checkedValues };
    });
  };

  isDisabled = id => {
    return (
      this.state.checked.length > 1 && this.state.checked.indexOf(id) === -1
    );
  };
  render() {
    return (
      <Checkbox.Group style={{ width: "100%" }} onChange={this.onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="A" disabled={this.isDisabled("A")}>
              A
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B" disabled={this.isDisabled("B")}>
              B
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C" disabled={this.isDisabled("C")}>
              C
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D" disabled={this.isDisabled("D")}>
              D
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E" disabled={this.isDisabled("E")}>
              E
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    );
  }
} */
