import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { PanelHeader, CardData, Emoji } from "components";
import "./Welcome.css";
class Welcome extends Component {
    state = {
        datas: [
            {name: "Current Date", 
             value: new Date().toDateString(), 
             icon: <span style={{color:'tomato'}}> 
             <i class="fas fa-calendar-alt fa-2x"></i> 
             </span>},
            {name: "Your Current Location", 
             value: "London, UK", 
             icon: <span style={{color:'yellow'}}>
             <i class="fa fa-location-arrow fa-2x">
             </i></span>},
            {name: "Temperature in your area", 
             value: '10 deg', 
             icon: <span style={{color:'blue'}}>
             <i class="fas fa-temperature-high fa-2x">
             </i></span>}  
        ],
        emojis: [
            {symbol: <i class="fa fa-smile-wink fa-4x"></i> , label: "grinning face"},
            {symbol: <i class="fa fa-smile-wink fa-4x"></i> , label: "grinning face"},
            {symbol: <i class="fa fa-smile-wink fa-4x"></i> , label: "grinning face"},
            {symbol: <i class="fa fa-smile-wink fa-4x"></i> , label: "grinning face"},
        ]
    }
    render() {
        return (
            <div>
                 <PanelHeader size="sm"/>
                    <div className="content">
                    <Row>
                        <Col md = {8} xs={12}>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader>Good Morning</CardHeader>
                            <hr className = "hrst"/>
                            <CardBody>
                                {this.state.datas.map(data => {
                                     return <CardData
                                            icon = {data.icon}
                                            name = {data.name}
                                            value = {data.value}/>
                                })}
                                <Emoji/>
                                {/* {this.state.emojis.map(emoji => {
                                    return <Emo/>
                                })} */}
                            </CardBody>
                        </Card>
                        </Col>
                        <Col md = {4} xs={12}>
                        <Card>
                            <CardHeader>Welcome Page</CardHeader>
                            <CardBody>
                            <div> In here i will mount all my welcome shitss </div>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    </div>
            </div>

        )
    }
}

export default Welcome;