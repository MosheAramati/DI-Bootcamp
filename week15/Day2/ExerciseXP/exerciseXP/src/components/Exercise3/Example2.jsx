import React, { Component } from 'react'
import data from "../../data/data2.json"

export default class Example2 extends Component {
  render() {
return data.Skills.map((skill)=>{ 
    const area = skill.Area
    const skillSet= skill.SkillSet
    return(<>
    <h5>{area}</h5>
    {skillSet.map((set)=>(
        <li>{set.Name}</li>
    ))}
    </>
    )
})
}
}
       
