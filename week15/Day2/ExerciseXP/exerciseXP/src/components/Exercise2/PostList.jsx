import React from 'react'
import posts from "../../data/data.json"

export default function (props) {
    const allPost = posts.map((item)=> (
        <div>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
            <p>{item.date}</p>
        </div>)
      )
  return allPost
  }
