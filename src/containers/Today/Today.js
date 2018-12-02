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
            this.props.getExp()
        }
    }
    render() {
        const dateToFormat = new Date()
        let data = null;
        if(this.props.tbody) {
            data = this.props.tbody.map((prop) => {
                const Today = moment().format("DD/MM/YYYY")
                let day = prop.createdAt
                if(prop.createdAt == Today) {
                    day = "Today"
                }
               return (
                <tr> 
                    <td className = 'h6'><strong> {prop.name} </strong> </td>
                    <td className='text-right text-info'> {prop.amount} 
                        <br/> <span className="font-italic badge badge-pill badge-secondary"> 
                        {day} </span> </td>
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
                                    <Moment date={dateToFormat} format="DD/MM/YYYY"/>
                                </CardTitle>
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
