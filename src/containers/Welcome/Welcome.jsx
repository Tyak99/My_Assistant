import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { PanelHeader, CardData } from "components";

class Welcome extends Component {
    state = {
        datas: [
            {name: "Current Date", value: new Date().toDateString()},
            {name: "Location", value: "London"},
            {name: "temperature", value: '10 deg'} 
        ]
    }
    render() {
        return (
            <div>
                 <PanelHeader size="sm"/>
                    <div className="content">
                    <Row>
                        <Col md = {8} xs={12}>
                        <Card >
                            <CardHeader>Welcome Page</CardHeader>
                            <CardBody>
                                {this.state.datas.map(data => {
                                     return <CardData 
                                            name = {data.name}
                                            value = {data.value}/>
                                })}
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