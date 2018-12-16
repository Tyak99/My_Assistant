import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as actions from "../../store/actions/auth";
import RegisterUi from "../../components/LoginUi/RegisterUi";

class Register extends Component {
    state = {
        email: '',
        pass: ''
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
        this.props.onRegister(this.state.email, this.state.pass)
        console.log('submitted')
    }
    render() {
        return (
            <RegisterUi 
                emailInput = {this.emailInput}
                passInput = {this.passInput}
                submit = {this.onSubmitHandler}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (email, pass) => dispatch(actions.register(email, pass))
    }
}

export default connect(null, mapDispatchToProps)(Register);