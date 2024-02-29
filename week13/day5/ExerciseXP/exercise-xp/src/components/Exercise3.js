import React from "react";
import "./Exercise.css"

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  

class Exercise extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                margin: '10px',
                padding: '10px'
              }}>
                <h1 style={style_header}>Exercise Component</h1>
                <p className="para" >This is a paragraph.</p>
                <a href="google.com">This is a link</a>
                <br/>
                <form>
                    <input type="text" placeholder="Enter text" />
                    <button type="submit">Submit</button>
                </form>
                <br/>
                <img src="https://t.ly/E_e_V" alt="Image" style={{ width: '200px', height: 'auto' }} />
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                </ul>
            </div>
        );
    }
}


export default Exercise;