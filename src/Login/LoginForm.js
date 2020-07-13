import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { CardContent, Card } from '@material-ui/core';

const http = axios.create({
  baseURL: window.location.origin
});

export const updateAPI = () => {
  const req = {
    RequestInfo: {
      "apiId": "Rainmaker",
      "ver": ".01",
      "ts": "",
      "action": "_search",
      "did": "1",
      "key": "",
      "msgId": "20170310130900|en_IN",
      "authToken": "null"
    },
    user: {
      tenantId: "pb",
      userName: "9999999999"
    }
  };
  return http.post('user/profile/_update?tenantId=pb', req, {
    proxy: {
      host: 'https://egov-micro-dev.egovernments.org'
    }
  });
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  render() {
    return (
      <div style={divStyle}>
        <Card>
          <CardContent>
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
                <Button bsStyle="primary" type="submit"
                  onClick={updateAPI()} > Login
              </Button>
              </FormGroup>
            </Form>
          </CardContent></Card>
      </div>
    )
  }
}

export default LoginForm;