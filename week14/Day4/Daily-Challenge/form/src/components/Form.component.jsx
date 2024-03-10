import React from "react";

const Form = (props) =>{
    console.log(props.firstName);

const handleSubmit= (e)=>{
        e.preventDefault()
        console.log("final version of form", props)
        const entries = Object.entries({
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age,
            gender: props.gender,
            destination: props.destination,
            noNuts: props.noNuts,
            noLactose: props.noLactose,
            vegan: props.vegan
          });
          console.log(entries.join("&").replace(/,/g ,"=" ));
          const params = entries.join("&").replace(/,/g ,"=" )
          const url = "http://localhost:5174/?"+ params
          fetch(url)
    };
    return<>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" placeholder="First Name"  onChange={(e)=> props.changeFirstName(e.target.value)}/>
            <input type="text" name="lastname" placeholder="Last Name" onChange={(e)=> props.changeLastName(e.target.value)}/>
            <input type="text" name="age" placeholder="Age" onChange={(e)=> props.changeAge(e.target.value)}/>

            <label htmlFor="male">Male</label>
            <input type="radio" id="male" value="male" checked={props.gender=== "male"} onChange={(e)=> props.changeGender(e.target.value)}/>
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" value="female" checked={props.gender === "female"} onChange={(e)=> props.changeGender(e.target.value)}/> <br/>

            <label htmlFor="destination">Destination</label>
            <select name="destination" id="destination" onChange={(e)=> props.changeDestination(e.target.value)}>
                <option value="thailand" selected={props.destination === "Thailand"}>Thailand</option>
                <option value="japan" selected={props.destination === "Japan"}>Japan</option>
                <option value="brazil"selected={props.destination === "Brazil"}>Brazil</option>
            </select>

            <p>Dietary restrictions</p>
            <label htmlFor="nonuts">Nuts free</label>
            <input type="Checkbox" id="nonuts" checked={props.noNuts} onChange={(e)=> props.changeNoNuts(e.target.checked)}/>
            <label htmlFor="nonolactosenuts">Lactose free</label>
            <input type="Checkbox" id="nolactose"checked={props.noLactose} onChange={(e)=> props.changeNoLactose(e.target.checked)}/>
            <label htmlFor="vegan">Vegan</label>
            <input type="Checkbox" id="vegan"checked={props.vegan}onChange={(e)=> props.changeVegan(e.target.checked)}/><br/>

            <input type="submit" value="submit"/>
            
        </form>
    </>
}

export default Form