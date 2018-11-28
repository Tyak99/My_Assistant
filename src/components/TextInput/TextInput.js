import React from 'react';
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

const TextInput = () => {
    return (
        <div> 
            <InputGroup>
                <Input placeholder="username" />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input placeholder="Amount" type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default TextInput;