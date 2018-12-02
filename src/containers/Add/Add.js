import React, { Component } from "react";
import { connect } from 'react-redux';
import { TextInput, Spinner } from 'components';
import * as actionCreators from "../../store/actions/actions";

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
        if(this.state.name.length <= 0 || this.state.amount.length <= 0) {
            return 
        }
        //submit the entry
        this.props.submit(this.state.name, `NGN ${this.state.amount}`)
        // im trying to clear the text field here
        this.setState({name: ''})
        this.setState({amount: ''})
    }
    componentDidMount() {
        console.log("hii")
        console.log(this.state.value)
    }
    componentDidUpdate() {
        console.log("update")
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
        Addloading: state.Addloading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submit: (name, amount) => dispatch(actionCreators.add(name, amount)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddT);