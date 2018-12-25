import React from "react";
import Spinner from "../Spinner/Spinner";
import { Row, Col, Card, CardHeader, CardBody , Form, FormGroup, Label, Input, Button, Alert} from "reactstrap";
import { PanelHeader } from "components";
import { Link, Redirect } from "react-router-dom";


const LoginUi = ({emailHandler, passHandler, submit, loading, error, authRedirect}) => {
    let ErrorMessage = <div> </div>
    let Display =  (
                    <Form onSubmit = {submit}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="email" onChange = {emailHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password " onChange = {passHandler}/>
                        </FormGroup>
                        <Button color="primary">Submit</Button> 
                     </Form>
    )

    if(loading) {
        Display = <div> <Spinner/> </div>
    }
    if(error) {
        ErrorMessage = <Alert color="info">
                        <span className ='d-flex justify-content-center'> The Email or Password is invalid </span>
                    </Alert>
    }
    let RedirectAuth = ''
    // if(token) {
    //     RedirectAuth = <Redirect to = '/welcome'/>
    //     console.log('hereerr')
    // }
    return (
        <div>
        {authRedirect}
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md = {8} xs = {12}>
              <Card>
                <CardHeader>Login</CardHeader>
                {ErrorMessage}
                <CardBody>
                    {Display}
                    <p> Don't have an account yet? <Link to ='/register'>Register</Link></p> 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        </div>
    )
}

export default LoginUi;