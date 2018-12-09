import React, {Component } from 'react';
import axios from 'axios';

class TestInput extends Component {
    state = {
        title: '',
        value: '',
        amount: null
    }
    
    
   
    componentDidUpdate() {
        console.log(this.state)
    }
    render() {
        const titleHandler = (e) => {
            this.setState({title: e.target.value})
        }
        const valueHandler = (e) => {
            this.setState({value: e.target.value})
        }
        const amountHandler = (e) => {
            this.setState({amount: e.target.value})
        }
        const submitHandler = () => {
            console.log('submit')
            const expense = {
                title: this.state.title,
                value: this.state.value,
                amount: this.state.amount
            }
            axios.post('http://localhost:3001/expense', expense)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        }
        return (
            <div>
                <input type='text' placeholder='title' onChange = {titleHandler}/>
                <input type='text' placeholder='value' onChange={valueHandler}/>
                <input type='number' placeholder='amount' onChange={amountHandler}/>
                <input type='Submit' placeholder='Sunmit' onClick= {submitHandler}/>
            </div> 
        )
    }
}

export default TestInput;