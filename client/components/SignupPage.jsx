import React, { Component} from 'react'

class SignupPage extends Component {
    render() {
        return (
            <div className="loginpage">
                <h1>Sign Up</h1>
                <form onSubmit={this.props.submitSignup}>
                    <input name="username" id="username" type="text" placeholder="username" onChange={this.props.handleChange}></input>
                    <input name="password" id="password" type="password" placeholder="password" onChange={this.props.handleChange}></input>
                    <input type="submit" value="sign up"></input>
                </form>
            </div>
        )
    }
}

export default SignupPage;