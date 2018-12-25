import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import EmojiHold from "./EmojiHold";
import smile from "assets/img/smile.png";
import sad from 'assets/img/sad.png';
import love from 'assets/img/love.png';
import rock from 'assets/img/rock.png';
import angry from 'assets/img/angry.png';
import "./EmojiHold.css"


class Emoji extends Component {
    state = {
        emojis: [
            {symbol: <img src={love} alt='' height="50" width="50"/>, label: 'love' },
            {symbol: <img src={smile} alt='' height="50" width="50"/>, label: 'smile' },
            {symbol: <img src={angry} alt='' height="50" width="50"/> , label: 'angry'},
            {symbol: <img src={sad} alt='' height="50" width="50"/>, label: 'sad'},
            {symbol: <img src={rock} alt='' height="50" width="50"/>, label: 'rock'},
        ],
        mood: null
    }
    render() {
        const clickHandler = (label) => {
            this.setState({mood: label})
        }
        let Display = this.state.emojis.map(emoji => {
            return  <EmojiHold key = {emoji.label} symbol = {emoji.symbol} click = {() => clickHandler(emoji.label)}/>
        })
        if(this.state.mood !== null) {
            Display = <h6 style = {{textAlign: 'center'}}> {this.state.mood == "love" ? "Ah, see who is in Love" 
                                        : this.state.mood == "smile"  ? "Nice, You are happy, hehe" 
                                        : this.state.mood == "sad"  ? "Hey, can you not be sad?" 
                                        : this.state.mood == "angry"  ? "Ahhh, Superhumans shouldn't get angry"
                                        : this.state.mood == "rock"  ? "Heheh, You rock": "I dont know"}</h6>
        }
        
        return (
            <div> 
                <Row> 
                    <Col md= {12} xm = {12}>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardHeader> <span style={{color:'#17f4ac'}}> 
                            <i className="fas fa-smile fa-2x"></i>
                                </span> How are you feeling? </CardHeader>
                            <CardBody className="font-weight-bold">
                                <Row>
                                    <Col md = {10} xm = {12}>
                                        <Card className = "emojiCard" body inverse style={{ backgroundColor: '#252321', borderColor: '#333' }}>
                                            {Display} 
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