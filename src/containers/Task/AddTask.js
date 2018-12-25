import React, { Component } from 'react';
import { Input, InputGroup, Button } from 'reactstrap';
import * as actionCreators from '../../store/actions/task';
import { connect } from 'react-redux';
import { Spinner } from 'components';

class AddTask extends Component {
    state = {
        taskInput: '',
        showInput: false,

    }
    showInputHandler = () => {
        this.setState({showInput: !this.state.showInput})
    }
    inputHandler = (e) => {
        this.setState({taskInput: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        if(this.state.taskInput.length <= 8) {
            return 
        }
        const taskData = {
            text: this.state.taskInput,
            timestamp: new Date().getTime(),
            id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7),
        }
        // this.props.addTask(taskData, this.props.token, this.props.userId)
        this.props.addTask(this.props.userId, taskData, this.props.token)
    }
    render() {
        let Display =  (
                 <Button  color="info" onClick = {this.showInputHandler}>
                    <span style={{color:'tomato'}} > 
                        <i className="fas fa-plus fa-3x"></i>
                    </span>
                </Button>    
            )
        if(this.state.showInput == true) {
            let input = <Input placeholder="name" onChange = {this.inputHandler}/>
            if(this.props.loading) {
                input = <Spinner/>
            }
            Display = (
                <div>
                    <form onSubmit = {this.submitHandler}> 
                    <InputGroup>
                        {input} 
                    </InputGroup>
                    <Button color="primary" round = 'true' >Submit</Button>
                    </form>
                </div>
            )
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
        loading: state.task.loading,
        token: state.auth.token,
        userId: state.auth.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addTask: (taskData, token, userId) => dispatch(actionCreators.add(taskData, token, userId)),
        addTask: (userId, taskData, token) => dispatch(actionCreators.add(userId, taskData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);