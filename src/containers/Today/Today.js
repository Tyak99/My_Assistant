import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
import { PanelHeader, CardData, Spinner } from "components";
import AddT from "../Add/Add";
import { connect } from 'react-redux';
import { thead, tbody } from "variables/general";
import * as actionCreators from "../../store/actions/actions";

class Today extends Component {
    componentDidMount() {
        if(this.props.tbody !== null) {
            return
        } else {
            this.props.getExp()
        }
    }
    render() {
        let data = null;
        if(this.props.tbody) {
            data = this.props.tbody.map((prop) => {
               return (
                <tr> 
                    <td> {prop.name} </td>
                    <td className='text-right'> {prop.amount}</td>
                </tr>
               ) 
            })
        }
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
                                           {data}
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
        theader: state.exp.thead,
        tbody: state.exp.tbody,
        loading: state.exp.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getExp: () => dispatch(actionCreators.getExp())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Today);
