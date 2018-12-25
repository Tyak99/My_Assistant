import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody , Form, FormGroup, Label, Input, Button, Alert} from "reactstrap";
import { PanelHeader } from "components";
import Spinner from "../Spinner/Spinner";


const RegisterUi = ({emailInput, passInput, usernameInput ,submit, error, loading, authRedirect}) => {
    let ErrorMessage = <div> </div>;
    if(error) {
        ErrorMessage = <Alert color="info">
                        <span className ='d-flex justify-content-center'> {error} </span>
                    </Alert>
    }
    let Display =  (
                    <Form onSubmit = {submit}>
                         <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name="text" id="textInput" placeholder="username" onChange = {usernameInput}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange = {emailInput}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={passInput}/>
                        </FormGroup>
                        <Button color="primary">Submit</Button> 
                     </Form>
    )

    if(loading) {
        Display = <div> <Spinner/> </div>
    }
   
    return (
        <div> 
            {authRedirect}
            <PanelHeader size="sm" />
            <div className="content">
            <Row>
                <Col md = {8} xs = {12}>
                <Card>
                    <CardHeader>Register</CardHeader>
                    {ErrorMessage}
                    <CardBody> 
                        {Display}
                    </CardBody>
                </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}

export default RegisterUi;