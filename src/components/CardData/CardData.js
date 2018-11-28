import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
const CardData = ({name, value}) => {
    return (
        <div>
            <Row> 
                <Col md= {8} xm = {12}>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardHeader> {name} </CardHeader>
                        <CardBody> {value} </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CardData;