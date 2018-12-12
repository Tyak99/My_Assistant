import React, { Component } from 'react';
import { Input, InputGroup, Button } from 'reactstrap';

class AddTask extends Component {
    state = {
        showInput: false,
    }
    showInputHandler = () => {
        this.setState({showInput: !this.state.showInput})
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
                        <Input placeholder="name"/>
                    </InputGroup>
                    <Button color="primary" round = 'true' >Submit</Button>
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

export default AddTask;