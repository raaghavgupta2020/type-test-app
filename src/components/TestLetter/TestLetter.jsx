import React from "react";
import "./TestLetter.css";

const TestLetter = ({letterinfo}) => {

    const {status} = letterinfo //or const {status} = letterinfo

    let statusClass;

    if(status === "correct"){
        statusClass = "test-letter-correct"
    }else if(status === "incorrect"){
        statusClass = "test-letter-incorrect"
    }else{
        statusClass = "test-letter-not-attempted"
    }

    return ( 
        <span className={`test-letter ${statusClass}`}>
            {letterinfo.testLetter}
        </span>
        //now each letter is first coming here and then it is returned as testletter
    );
}
 
export default TestLetter;