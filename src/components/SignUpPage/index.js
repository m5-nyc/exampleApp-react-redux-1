import React, {  Component } from 'react'
import SignUpForm from './SignUpForm'
import { connect } from 'react-redux'
import { userSignupRequest } from '../../actions/signupActions.js'

class SignUpPage extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <SignUpForm userSignupRequest={userSignupRequest} />
    );
  }
}

SignUpPage.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
} 

export default connect(null, { userSignupRequest })(SignUpPage);