import React from "react";
import "./TestLetter.css";

const TestLetter = ({letterinfo}) => {

    const {status} = letterinfo //or const {status} = letterinfo

    // let statusClass;
    //for these situations where 1 variable can have multiple values , we can create js object
    // if(status === "correct"){
    //     statusClass = "test-letter-correct"
    // }else if(status === "incorrect"){
    //     statusClass = "test-letter-incorrect"
    // }else{
    //     statusClass = "test-letter-not-attempted"
    // }

    const statusClassName = {
        //key value pairs
        correct:"test-letter-correct" , 
        incorrect: "test-letter-incorrect",
        notAttempted:"test-letter-not-attempted"
    }[status]
    //now this means that if status is correct , statusClassName = "test-letter-correct" and so on

    return ( 
        <span className={`test-letter ${statusClassName}`}>
            {letterinfo.testLetter}
        </span>
        //now each letter is first coming here and then it is returned as testletter
    );
}
 
export default TestLetter;