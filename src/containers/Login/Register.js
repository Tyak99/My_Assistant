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
    }
    passInput = (e) => {
        this.setState({pass: e.target.value})
    }
    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onRegister(this.state.email, this.state.pass, this.state.username)
    }
    onUserInput = e => {
        this.setState({username: e.target.value})
    }
    render() {
        let authRedirect;
        if(this.props.token) {
            authRedirect = <Redirect to='/welcome'/>
        }
        return (
            <RegisterUi 
                emailInput = {this.emailInput}
                passInput = {this.passInput}
                usernameInput = {this.onUserInput}
                submit = {this.onSubmitHandler}
                error = {this.props.error}
                loading = {this.props.loading}
                authRedirect = {authRedirect}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (email, pass, username) => dispatch(actions.register(email, pass, username))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);