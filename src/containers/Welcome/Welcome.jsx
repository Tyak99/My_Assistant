import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { PanelHeader, CardData, Emoji } from "components";
import "./Welcome.css";
import * as actions from '../../store/actions/general'
class Welcome extends Component {
    state = {
        datas: [
            {name: "Current Date",
             id: 1, 
             value: new Date().toDateString(), 
             icon: <span style={{color:'tomato'}}> 
             <i className="fas fa-calendar-alt fa-2x"></i> 
             </span>},
            {name: "Your Current Location",
             id: 2,
             value: this.props.location, 
             icon: <span style={{color:'yellow'}}>
             <i className="fa fa-location-arrow fa-2x">
             </i></span>},
            // {name: "Temperature in your area", 
            //  value: '10 deg', 
            //  id: 3,
            //  icon: <span style={{color:'blue'}}>
            //  <i className="fas fa-temperature-high fa-2x">
            //  </i></span>}  
        ],
    }
    componentDidMount() {
        if(this.props.location !== null) {
            return 
        } else {
            this.props.getLocal()
        }
        this.props.quote();
    }
    render() {

        let Display = (
            <CardBody>
              Welcome to Your Assistant, Please log in
            </CardBody>
        )
        if(this.props.isAuthenticated) {
            Display = (
                    <CardBody>
                        {this.state.datas.map(data => {
                            return <CardData
                            key = {data.id}
                            icon = {data.icon}
                            name = {data.name}
                            value = {data.value}/>
                                })}
                        <Emoji/>
                    </CardBody>
                )
        }
        return (
            <div>
                 <PanelHeader size="sm"/>
                    <div className="content">
                    <Row>
                        <Col md = {8} xs={12}>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader>Hello, Good Morning</CardHeader>
                            <hr className = "hrst"/>
                           {Display}
                        </Card>
                        </Col>
                        <Col md = {4} xs={12}>
                        <Card>
                            <CardHeader>Quotes</CardHeader>
                            <CardBody>
                            <div>
                                <h2> {this.props.qod.title} </h2>
                                <blockquote class="blockquote">
                                    <p class="mb-0">{this.props.qod.quote}</p>
                                    <footer class="blockquote-footer">{this.props.qod.author}</footer>
                                </blockquote>
                            </div>
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
        isAuthenticated: state.auth.token !== null,
        qod: state.gen.qod,
        location: state.gen.location
    }
}
const mapDispatchToProps = dispatch => {
    return {
        quote: () => dispatch(actions.quote()),
        getLocal: () => dispatch(actions.getLocation())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);