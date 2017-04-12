import React, {  Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Col,
  ControlLabel,
  Well
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
    this.props.userSignupRequest(this.state);
  }


  render() {
    const { email, password, passwordConfirmation } = this.state;
    return (
        <Well>
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

SignUpForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
} 

export default SignUpForm;