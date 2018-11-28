import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
import { PanelHeader, CardData } from "components";
import AddT from "../Add/Add";
import { connect } from 'react-redux';
import { thead, tbody } from "variables/general";

class Today extends Component {
    render() {
        return (
            <div>
                 <PanelHeader size="sm"/>
                    <div className="content">
                        <Row>
                            <Col md = {6} xs={12}>
                            <Card >
                                <CardHeader>
                                <CardTitle tag="h4">Simple Table</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                              {this.props.theader.map((prop, key) => {
                                                  if (key === thead.length - 1)
                                                  return (
                                                    <th key={key} className="text-right">
                                                      {prop}
                                                    </th>
                                                  );
                                                  return <th> {prop} </th>
                                              })}  
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tbody.map((props, key) => {
                                                return (
                                                    <tr key={key}>
                                                      {props.data.map((prop, key) => {
                                                        if (key === thead.length - 1)
                                                          return (
                                                            <td key={key} className="text-right">
                                                              {prop}
                                                            </td>
                                                          );
                                                        return <td key={key}>{prop}</td>;
                                                      })}
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col md = {6} xs={12}>
                            <Card>
                                <CardHeader tag = 'h4'> Add a new data</CardHeader>
                                <CardBody>
                                    <AddT/>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        theader: state.thead
    }
}

export default connect(mapStateToProps)(Today);