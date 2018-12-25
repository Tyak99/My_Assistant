import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { PanelHeader, Tasks } from "components";
import AddTask from './AddTask';


class Task extends Component {
    render() { 
        return (
            <div>
                <PanelHeader size="sm"/>
                    <div className="content">
                        <Row>
                            <Col md = {6} xs={12}>
                            <Card >
                                <CardHeader>
                                <CardTitle tag="h4">
                                    Todo List
                                </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Tasks/>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col md = {6} xs={12}>
                            <Card>
                                <CardHeader tag = 'h4'> Add a new data</CardHeader>
                                <CardBody>
                                    <AddTask/>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                    </div>
            </div>
        )
    }
}



export default Task;