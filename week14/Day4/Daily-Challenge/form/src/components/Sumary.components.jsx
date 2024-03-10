import React from "react";

const Summary = (props) => {
    return<>
    <h2>Entered information:</h2>
    <p>Your name: {props.firstName} {props.lastName}</p>
    <p>Your age: {props.age}</p>
    <p>Your gender: {props.gender}</p>
    <p>Your destination: {props.destination}</p>
    <p>Your dietary restrictions:</p><br/>
<span>**Nuts free : {props.noNuts? "yes" : "no"}</span><br/>
<span>**Lactose free : {props.noLactose? "yes" : "no"}</span><br/>
<span>**Vegan meal : {props.vegan? "yes" : "no"}</span><br/>


    </>
}

export default Summary