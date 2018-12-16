import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody , Form, FormGroup, Label, Input, Button, Alert} from "reactstrap";
import { PanelHeader } from "components";
import Spinner from "../Spinner/Spinner";


const RegisterUi = ({emailInput, passInput, submit}) => {
    let ErrorMessage = <div> </div>
    let Display =  (
                    <Form onSubmit = {submit}>
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

    // if(loading) {
    //     Display = <div> <Spinner/> </div>
    // }
    // if(error) {
    //     ErrorMessage = <Alert color="info">
    //                     <span className ='d-flex justify-content-center'> The Email or Password is invalid </span>
    //                 </Alert>
    // }
    return (
        <div> 
            <PanelHeader size="sm" />
            <div className="content">
            <Row>
                <Col md = {8} xs = {12}>
                <Card>
                    <CardHeader>Register here</CardHeader>
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