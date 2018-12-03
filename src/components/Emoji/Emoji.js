import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import EmojiHold from "./EmojiHold";
import "./EmojiHold.css"


class Emoji extends Component {
    state = {
        emojis: [
            {symbol: <i  className="fa fa-smile-wink fa-3x"></i>, label: 'smile' },
            {symbol: <i  className="fa fa-grin-hearts fa-3x"></i>, label: 'grin' },
            {symbol: <i className="fa fa-angry fa-3x"></i> , label: 'angry'},
            {symbol: <i className="fa fa-frown fa-3x"></i>, label: 'frown'},
            {symbol: <i className="fa fa-tired fa-3x"></i>, label: 'tired'},
        ]
    }
    onClickHandler = (label) => {
        console.log(label)
    }
    render() {
        return (
            <div> 
                <Row> 
                    <Col md= {12} xm = {12}>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader> <span style={{color:'green'}}> 
                            <i className="fas fa-smile fa-2x"></i>
                                </span> How are you feeling today? </CardHeader>
                            <CardBody className="font-weight-bold">
                            <Row>
                                <Col md = {10} xm = {12}>
                                    <Card className = "emojiCard" body inverse style={{ backgroundColor: '#252321', borderColor: '#333' }}>
                                        {this.state.emojis.map(emoji => {
                                            return  <EmojiHold key = {emoji.label} symbol = {emoji.symbol} click = {() => this.onClickHandler(emoji.label)}/>
                                        })}
                                        
                                    </Card>
                                </Col>
                            </Row>
                                    
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Emoji;