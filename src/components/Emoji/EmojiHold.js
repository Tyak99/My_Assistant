import React from "react";
import "./EmojiHold.css";


const EmojiHold = (props) => {
    return (
        <span onClick = {props.click} className = "emoji grow" style={{cursor: "pointer"}}> {props.symbol} </span>
    )
}


export default EmojiHold