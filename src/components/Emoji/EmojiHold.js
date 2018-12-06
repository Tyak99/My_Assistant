import React from "react";
import "./EmojiHold.css";


const EmojiHold = (props) => {
    return (
        <span onClick = {props.click} className = "emoji grow"> {props.symbol} </span>
    )
}


export default EmojiHold