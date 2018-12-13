import React, { Component } from 'react';
import { Input, InputGroup, Button } from 'reactstrap';
import * as actionCreators from '../../store/actions/task';
import { connect } from 'react-redux';

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
    submitHandler = () => {
        const taskData = {
            text: this.state.taskInput,
            id: Math.random()
        }
        this.props.addTask(taskData)
    }
    componentDidUpdate() {
        console.log(this.state)
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
            Display = (
                <div>
                    <InputGroup>
                        <Input placeholder="name" onChange = {this.inputHandler}/>
                    </InputGroup>
                    <Button color="primary" round = 'true' onClick = {this.submitHandler}>Submit</Button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (taskData) => dispatch(actionCreators.add(taskData))
    }
}

export default connect(null, mapDispatchToProps)(AddTask);