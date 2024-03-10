import React from "react";

class TestClass extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'John',
            users: [],
        }
        // this.name = "John"
    }
    getUsers = () =>{
        // this.setState({name: "Dan"})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({ users: data})
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    render(){
        return(
            <>
            <h2>I'm a class component</h2>
            <h1>{this.state.name}</h1>
            <button onClick={this.getUsers}>Get Users Data</button>
            {this.state.users.map(item =>{
                return <div>{item.name}</div>
            })}
            </>
        )
    }
}

export default TestClass
