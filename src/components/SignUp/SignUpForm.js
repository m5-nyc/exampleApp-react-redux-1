import React, {  Component } from 'react'
import axios from 'axios'
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  ControlLabel
} from 'react-bootstrap'

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        passwordConfirmation: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e){
    e.preventDefault();
    axios.post('./api/users', {user: this.state });
  }


  render() {
    const { email, password, passwordConfirmation } = this.state;
    return (
        <Form horizontal onSubmit={this.onSubmit}>
            <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
                Email
            </Col>
            <Col sm={10}>
                <FormControl 
                type="email" 
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.onChange}
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
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  />
            </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
                Password Confirmation
            </Col>
            <Col sm={10}>
                <FormControl 
                  type="password" 
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={this.onChange}
                  />
            </Col>
            </FormGroup>

            <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Gender</ControlLabel>
            <FormControl componentClass="select" multiple>
                <option value="select">male</option>
                <option value="other">female</option>
                <option value="other">tran</option>
            </FormControl>
            </FormGroup>

            <FormGroup>
            <Col smOffset={2} sm={10}>
                <Button type="submit">
                Sign in
                </Button>
            </Col>
            </FormGroup>
        </Form>
    );
  }
}

export default SignUpForm;