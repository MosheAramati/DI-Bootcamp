import { useState } from "react"; 
import Garage from "./Garage";

const Car = (props) =>{
    const [color, setColor] = useState("Red")

    return <div>
        <h2>This car is {color} {props.model}</h2>
        <Garage size= "small"/>
    </div>
}

export default Car