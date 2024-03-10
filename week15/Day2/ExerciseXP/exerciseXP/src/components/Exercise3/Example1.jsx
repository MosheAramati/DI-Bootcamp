import React, { Component } from 'react'
import data from "../../data/data2.json"

export default class Example1 extends Component {
  render() {
    const socialMedia = data.SocialMedias.map((social=>(
        <div>{social}</div>
    )))
    return (<>
    <h1>Social Medias</h1>
    {socialMedia}
    </>)
  }
}
