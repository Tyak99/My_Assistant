import React from 'react';
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import {Button} from "components";

const TextInput = ({Aname, Aamount, submitH, select}) => {
    return (
        <div> 
            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputSelect">Options</label>
            </div>
            <select className="custom-select" id="inputSelect"  onChange={select}>
                <option>Choose...</option>
                <option value="Food/Drinks">Food/Drinks</option>
                <option value="Transport">Transport</option>
                <option value="Subscription">Subscription</option>
                <option value="Airtime">Airtime</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
        </div>
            <form onSubmit={submitH}>
            <InputGroup>
                <Input placeholder="name" onChange = {Aname}/>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon addonType="prepend">#</InputGroupAddon>
                    <Input placeholder="Amount" type="number" step="1" onChange = {Aamount}/>
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
            <Button color="primary" round>Submit</Button>
            </form>
        </div>
    )
}

export default TextInput;