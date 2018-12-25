import React, { Component}  from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../../store/actions/auth";
import LoginUi from "../../components/LoginUi/LoginUi";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    emailHandler = (e) => {
        this.setState({email: e.target.value})
    }
    passHandler = (e) => {
        this.setState({password: e.target.value})
    }
    SubmitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmitH(this.state.email, this.state.password)
        // this.props.history.push('/welcome')
    }
    componentDidMount() {
        console.log(this.props.history)
    }
    render() {
        let authRedirect;
        if(this.props.token) {
            authRedirect = <Redirect to='/welcome'/>
        }
        return (
            <div>
                <LoginUi
                    error = {this.props.error}
                    emailHandler = {this.emailHandler} 
                    passHandler = {this.passHandler} 
                    submit ={this.SubmitHandler}
                    loading={this.props.loading}
                    authRedirect = {authRedirect}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitH: (email, password) => dispatch(actionCreators.login(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);