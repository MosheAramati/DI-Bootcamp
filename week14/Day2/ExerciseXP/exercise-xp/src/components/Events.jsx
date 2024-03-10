import { useState } from "react"; 

const Event = () =>{
    const [isToggleOn, setIsToggleOn] = useState(true);

    return <>
        <button onClick={clickMe}>Click me!</button>
        <br/>
        <input type="text" onKeyDown={handleKeyDown}></input>
        <br/>
        <button onClick={() => setIsToggleOn(!isToggleOn)}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
}

export default Event

const clickMe = () => { alert ("I was clicked")}

const handleKeyDown = (e) => {
    if (e.key != "Enter") return 

    alert ("The Enter key was pressed, your input is: " + e.target.value )
    console.log(e.target.value);
    
    }