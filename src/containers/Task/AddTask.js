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
        loading: state.task.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (taskData) => dispatch(actionCreators.add(taskData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);