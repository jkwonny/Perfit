import React, { Component} from 'react';


class Navbar extends Component {
    render() {
        return (
            <div className="loginpage">
                <h1>Login</h1>
                <form onSubmit={this.props.submit}>
                    <input name="username" id="username" type="text" placeholder="username" onChange={this.props.handleChange}></input>
                    <input name="password" id="password" type="password" placeholder="password" onChange={this.props.handleChange}></input>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
            <div>
            <button onClick={this.props.loginButtonClicked} id="login_button">Login</button>
            <button onClick={this.props.signupButtonClicked} id="signup_button">Sign Up</button>
            </div>
        )
    }
}

export default LoginPage;