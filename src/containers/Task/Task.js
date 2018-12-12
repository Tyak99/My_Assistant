import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
import { PanelHeader, CardData, Spinner, Tasks, Button } from "components";
import Moment from 'react-moment';
import moment from 'moment'
import { connect } from 'react-redux';
import * as actionCreators from "../../store/actions/task";


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
                                    {/* <div className="table-full-width table-responsive">
                                        <table className="table">
                                        <tbody>
                                            {data}
                                        </tbody>
                                        </table>
                                    </div> */}
                                    <Tasks/>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col md = {6} xs={12}>
                            <Card>
                                <CardHeader tag = 'h4'> Add a new data</CardHeader>
                                <CardBody>
                                    Welcome
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