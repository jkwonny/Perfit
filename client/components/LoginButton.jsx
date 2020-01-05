import React, { Component} from 'react'

class LoginButton extends Component {
    render() {
        return (
            <div>
            <button onClick={this.props.loginButtonClicked} id="login_button">Login</button>
            <button onClick={this.props.signupButtonClicked} id="signup_button">Sign Up</button>
            </div>
        )
    }
}

export default LoginButton;