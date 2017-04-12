import React, {  Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  Checkbox,
  Button,
  Col,
  ControlLabel,
  Well
} from 'react-bootstrap'

class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    }
  }
  render() {
      const { email, password } = this.state;
    return (
        <Well>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                    Email
                </Col>
                <Col sm={10}>
                    <FormControl 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    />
                </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                <Col sm={10}>
                    <FormControl 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    />
                </Col>
                </FormGroup>

                <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Checkbox>Remember me</Checkbox>
                </Col>
                </FormGroup>

                <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button 
                    type="submit"
                    bsSize="large"
                    block
                    >
                    Sign in
                    </Button>
                </Col>
                </FormGroup>
            </Form>
        </Well>
    );
  }
}

export default SignInForm;