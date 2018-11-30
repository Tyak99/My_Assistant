import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import "./CardData.css";
const CardData = ({name, value, icon}) => {
    return (
        <div>
            <Row> 
                <Col md= {8} xm = {12}>
                    <Card body inverse style={{ backgroundColor: '#1d1817', borderTopWidth: '3px', borderTopColor: '#19a700' }}>
                        <CardHeader> {icon} {name} </CardHeader>
                        <CardBody className="font-weight-bold"> {value} </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CardData;