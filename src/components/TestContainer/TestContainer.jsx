import React from "react";
import "./TestContainer.css"

const TestContainer = ({
    //props
    words,
    characters,
    wpm
}) => {
    return ( 
        <div className="test-container">
            <h1 className="try-again-container">
                This is try again container
            </h1>
        </div>
    );
}
 
export default TestContainer;