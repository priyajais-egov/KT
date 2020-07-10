import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};



const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
      
          <Form horizontal className="LoginForm" id="loginForm">
          <FormGroup controlId="formName">
              <FormControl type="name" placeholder="Name" />
            </FormGroup>
            <FormGroup controlId="formMobNO.">
              <FormControl type="mobile" placeholder="Mobile No." />
            </FormGroup>
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email " />
            </FormGroup>
            <FormGroup controlId="formAddress">
              <FormControl type="address" placeholder="Address" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button bsStyle="primary" type="submit" >
                Login
              </Button>
            </FormGroup>
          </Form>
      </div>
    )
  }
}

export default LoginForm;