import React, { Component } from "react";
import { connect } from 'react-redux';
import { TextInput } from 'components';
import { addExp } from "../../store/actions/actions";

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
        this.props.submit(this.state.name, `# ${this.state.amount}`)
        this.setState({name: ''})
        this.setState({amount: ''})
    }
    render() {
        return (
            <div>
                <TextInput
                    submitH = {this.onSubmitHandler}
                    Aamount = {this.onExpAmt}
                    Aname = {this.onExpName}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (name, amount) => dispatch(addExp(name, amount))
    }
}
export default connect(null, mapDispatchToProps)(AddT);