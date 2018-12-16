import React, { Component } from "react";
import { connect } from 'react-redux';
import { TextInput, Spinner } from 'components';
import * as actionCreators from "../../store/actions/actions";
import moment from 'moment';

class AddT extends Component {
    state = {
        name: '',
        amount: '',
        value: 'Choose'
    }

    onExpName = (e) => {
        this.setState({name: e.target.value})
    }
    onExpAmt = (e) => {
        this.setState({amount: e.target.value})
    }
    onSelectName = (e) => {
        this.setState({value: e.target.value})
    }
    onSubmitHandler = () => {
        if(this.state.name.length <= 0 || this.state.amount.length <= 0 || this.state.value == 'Choose') {
            return 
        }
        //data to be sent to the backend
        const expense = {
            name: this.state.name,
            amount: `NGN ${this.state.amount}`,
            value: this.state.value,
            timestamp: new Date().getTime(),
            createdAt: moment().format("DD/MM/YYYY"),
            userId: this.props.userId
        } 
        //submit the entry
        this.props.submit(expense, this.props.token, this.props.userId)
        // im trying to clear the text field here
        this.setState({name: ''})
        this.setState({amount: ''}) 
    }
    componentDidMount() {
        console.log("hii")
        console.log(this.state.value)
    }
    componentDidUpdate() {
        console.log(this.state.value)
    }
    render() {
        let Display = <TextInput
        select = {this.onSelectName}
        submitH = {this.onSubmitHandler}
        Aamount = {this.onExpAmt}
        Aname = {this.onExpName}/>
        if(this.props.Addloading) {
            Display = <Spinner/>
        }
        return (
            <div>
                {Display}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        Addloading: state.exp.Addloading,
        token: state.auth.token,
        userId: state.auth.id
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submit: (expense, token, userId) => dispatch(actionCreators.add(expense, token, userId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddT);