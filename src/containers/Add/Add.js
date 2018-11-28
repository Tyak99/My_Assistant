import React, { Component } from "react";
import { TextInput } from 'components';

class AddT extends Component {
    state = {
        name: '',
        password: ''
    }
    render() {
        return (
            <div>
                <TextInput/>
            </div>
        )
    }
}

export default AddT;