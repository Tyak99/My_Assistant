import React, { Component } from "react";
import { connect } from 'react-redux';
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { PanelHeader, CardData, Emoji } from "components";
import { Link } from 'react-router-dom'
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
             value: localStorage.getItem('location'), 
             icon: <span style={{color:'yellow'}}>
             <i className="fa fa-location-arrow fa-2x">
             </i></span>},
        ],
    }
    componentWillMount() {
        if(this.props.location !== null) {
            return 
        } else {
            this.props.getLocal()
        }
        this.props.quote();
        const time = new Date().toTimeString().split(' ')
        if(time[0] > "02:59:00" && time[0] <= "11:59:00") {
            localStorage.removeItem('greet')
            localStorage.setItem('greet', "Good morning")
        } else if(time[0] > "11:59:00" && time[0] <= "15:59:00") {
            localStorage.removeItem('greet')
            localStorage.setItem('greet', "Good afternoon")
        } else {
            localStorage.removeItem('greet')
            localStorage.setItem('greet', "Good evening")
        }
    }
    render() {
        let Display = (
            <CardBody>
              Welcome to Your Assistant, Please log in
            </CardBody>
        )
        let displayName;
        if(this.props.isAuthenticated) {
            displayName = this.props.username
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
                        <h6 style={{color: '#ffffff', fontWeight: 600, fontSize: 13}}> Check out your today's activity 
                        <Link to ='/dashboard'><span style={{color:'#17f4ac'}}> HERE<i className="fas fa-arrow-right"></i>
                            </span> </Link>
                        </h6>
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
                            <CardHeader><h4><span style = {{color: '#00ffac'}}>Hey, {displayName} </span>{localStorage.getItem('greet')}</h4></CardHeader>
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
                                <blockquote className="blockquote">
                                    <p className="mb-0">{this.props.qod.quote}</p>
                                    <footer className="blockquote-footer">{this.props.qod.author}</footer>
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
        location: state.gen.location,
        token: state.auth.token,
        username: state.auth.username
    }
}
const mapDispatchToProps = dispatch => {
    return {
        quote: () => dispatch(actions.quote()),
        getLocal: () => dispatch(actions.getLocation()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);