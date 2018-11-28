import React, { Component } from "react";
import { connect } from 'react-redux';
import { TextInput, Spinner } from 'components';
import * as actionCreators from "../../store/actions/actions";

class AddT extends Component {
    state = {
        name: '',
        amount: ''
    }

    onExpName = (e) => {
        this.setState({name: e.target.value})
    }
    onExpAmt = (e) => {
        this.setState({amount: e.target.value})
    }
    onSubmitHandler = () => {
        if(this.state.name.length <= 0 || this.state.amount.length <= 0) {
            return 
        }
        //submit the entry
        this.props.submit(this.state.name, `#${this.state.amount}`)
        // im trying to clear the text field here
        this.setState({name: ''})
        this.setState({amount: ''})
    }
    render() {
        let Display = <TextInput
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