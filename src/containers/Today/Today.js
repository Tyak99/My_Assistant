import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";
import { PanelHeader, CardData, Spinner } from "components";
import Moment from 'react-moment';
import moment from 'moment'
import AddT from "../Add/Add";
import { connect } from 'react-redux';
import { thead, tbody } from "variables/general";
import * as actionCreators from "../../store/actions/actions";

class Today extends Component {
    componentDidMount() {
        if(this.props.tbody !== null) {
            return
        } else {
            this.props.getExp(this.props.token, this.props.userId)
        }
    }
    render() {
        let data = null;
        if(this.props.tbody) {
            data = this.props.tbody.map((prop) => {
               return (
                <tr key = {prop.timestamp}>  
                    <td ><strong className = "h6">  {prop.value} </strong> 
                        <br/> <span className="font-italic"> 
                        {`'${prop.name}'`} </span> </td>
                    <td className='text-right text-info'> {prop.amount} 
                        <br/> <span className="font-italic badge badge-pill badge-secondary"> 
                        Today </span> </td>
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
                                <CardTitle tag="h4">
                                    Expenses
                                </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className="text-primary">
                                            <tr>
                                              <th> Name </th>
                                              <th className = 'text-right'> Amount </th>
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
        loading: state.exp.loading,
        token: state.auth.token,
        userId: state.auth.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getExp: (token, userId) => dispatch(actionCreators.getExp(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Today);
