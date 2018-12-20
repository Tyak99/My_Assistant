import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/auth";
import RegisterUi from "../../components/LoginUi/RegisterUi";

class Register extends Component {
    state = {
        email: '',
        pass: '',
        username: ''
    }
    emailInput = (e) => {
        this.setState({email: e.target.value})
        console.log(this.state)
    }
    passInput = (e) => {
        this.setState({pass: e.target.value})
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onRegister(this.state.email, this.state.pass, this.state.username)
        console.log('submitted')
    }
    onUserInput = e => {
        this.setState({username: e.target.value})
    }
    render() {
        return (
            <RegisterUi 
                emailInput = {this.emailInput}
                passInput = {this.passInput}
                usernameInput = {this.onUserInput}
                submit = {this.onSubmitHandler}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (email, pass, username) => dispatch(actions.register(email, pass, username))

    }
}

export default connect(null, mapDispatchToProps)(Register);