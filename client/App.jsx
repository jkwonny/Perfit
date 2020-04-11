import React, { Component } from 'react'
import { render } from 'react-dom'
import axios from 'axios';
import * as THREE from "three";


import MainPage from './components/MainPage.jsx';


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
        
        return (
            <div>
                <MainPage />
            </div>
        )
    };
}



export default App;