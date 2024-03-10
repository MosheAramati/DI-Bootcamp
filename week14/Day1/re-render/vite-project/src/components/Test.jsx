import { useState } from "react";

const Test = (props) => {

    const [name, setName] = useState("John")
    const [users, setUsers] = useState([])

    const handleSubmit = () => {
        // setName('Dan')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setUsers(data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    return (
        <>
            <h2>I'm a function components</h2>
            <h1>{name}</h1>
            <button onClick={handleSubmit}>Submit</button>
            {
                users.map(item =>{
                    return <div>{item.email}</div>
                })
            }
        </>
    );
};

export default Test
