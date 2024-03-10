import React, { Component } from 'react'
import data from "../../data/data2.json"

export default class Example3 extends Component {
  render() {
return data.Experiences.map((experience)=>{ 
    const companyName = experience.companyName
    const roles= experience.roles
    const logo= experience.logo
    return(<>

    <img src={logo} alt="" /><br />
    <a href={experience.url}>{companyName}</a>

    {roles.map((role)=>(<>
       <h6>{role.title}</h6>
       <p>{role.startDate} {role.location}</p>
       <p>{role.description}</p>
       </>
    ))}
    </>
    )
})
}
}