import React from "react";
import "./CDC.css"

const CDC = ({cardName , cardValue}) => {
    return (
        <div className="details-card-container">
            <div className="cardname">{cardName}</div>
            <div className="cardvalue">{cardValue}</div>
        </div>
    );
}
 
export default CDC;