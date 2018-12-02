import React from 'react';
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import {Button} from "components";

const TextInput = ({Aname, Aamount, submitH, select}) => {
    return (
        <div> 
            <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputSelect">Options</label>
            </div>
            <select class="custom-select" id="inputSelect"  onChange={select}>
                <option>Choose...</option>
                <option value="Food/Drinks">Food/Drinks</option>
                <option value="Transport">Transport</option>
                <option value="Three">Three</option>
            </select>
            </div>
            <InputGroup>
                <Input placeholder="name" onChange = {Aname}/>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">#</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" onChange = {Aamount}/>
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button color="primary" round onClick = {submitH}>Submit</Button>
        </div>
    )
}

export default TextInput;