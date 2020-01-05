import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios';
import * as THREE from "three";


import LoginPage from './components/LoginPage.jsx';
import Title from './components/Title.jsx';
import Bio from './components/Bio.jsx';
import Picture from './components/Picture.jsx';
import LoginButton from './components/LoginButton.jsx';
import SignupPage from './components/SignupPage.jsx';
import SignupCompleted from './components/SignupCompleted.jsx';


class App extends Component {
    constructor(props) {
        super(props);
        this.loginButtonClicked = this.loginButtonClicked.bind(this);
        this.signupButtonClicked = this.signupButtonClicked.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            loginButton: false,
            signupButton: false,
            username: '',
            password: '',
            loggedIn: false,
            signedUp: false,
        };
    }

    loginButtonClicked() {
        console.log('login was clicked');
        this.setState({
            loginButton: true,
            signupButton: false
        });
    }

    signupButtonClicked() {
        this.setState({
            signupButton: true,
            loginButton: false
        });
    }

    handleChange(e) {
        if (e.target.id === "username") {
            this.setState({
                username: e.target.value
            })
        } else if (e.target.id === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }

    submitSignup(event) {
        event.preventDefault();
        const data = { 
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/signup', data)
            .then((data) => {
                console.log('Success', data);
                this.setState({signedUp: true});
                if (this.state.signedUp === true) {
                    this.setState({ loginButton: false, signupButton: false })
                }
            })
            .catch((error) => {
                console.error('Error', error);
            })
    }


    componentDidUpdate() {
        console.log('this is loggedin', this.state.loginButton);
        console.log('this is my username', this.state.username);
        console.log('this is my password', this.state.password);
        console.log('this is signedUp', this.state.signedUp);
    }


    render () { 
        let loginPage;
        let signupPage;
        let signupCompleted;
        let loginButton;
        if (this.state.loginButton === false && this.state.signupButton === false) {
            loginButton = <LoginButton signupButtonClicked={this.signupButtonClicked} loginButtonClicked={this.loginButtonClicked} loginButton={this.state.loginButton} signupButton={this.state.signupButton}/>
        }
        if (this.state.loginButton === true) {
            loginPage = <LoginPage handleChange={this.handleChange} loginButtonClicked={this.loginButtonClicked}/>;
        }
        if (this.state.signupButton === true) {
            signupPage = <SignupPage loginButtonClicked={this.loginButtonClicked} submitSignup={this.submitSignup} handleChange={this.handleChange}/>;
        }
        if (this.state.signedUp === true) {
            signupCompleted = <SignupCompleted/>
        }
        
        return (
            <div>
                <div>
                    {loginButton}
                    {loginPage}
                    {signupPage}
                    {signupCompleted}
                </div>

                <div>
                    <Title/>
                    <Picture/>
                    <Bio/>
                </div>
            </div>
        )
    };
}



export default App;