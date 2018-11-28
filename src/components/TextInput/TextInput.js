import React from 'react';
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import {Button} from "components";

const TextInput = ({Aname, Aamount, submitH}) => {
    return (
        <div> 
            <InputGroup>
                <Input placeholder="name" onChange = {Aname}/>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">#</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" onChange = {Aamount}/>
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button color="primary" round onClick = {submitH}>Rounded</Button>
        </div>
    )
}

export default TextInput;