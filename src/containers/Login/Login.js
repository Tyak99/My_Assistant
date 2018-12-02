import React, { Component}  from 'react';
import { connect } from 'react-redux';
import * as actionCreators from "../../store/actions/auth";
import LoginUi from "../../components/LoginUi/LoginUi";

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
    }
    render() {
        return (
            <div>
                <LoginUi
                    error = {this.props.error}
                    emailHandler = {this.emailHandler} 
                    passHandler = {this.passHandler} 
                    submit ={this.SubmitHandler}
                    loading={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitH: (email, password) => dispatch(actionCreators.login(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);