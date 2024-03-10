import { Link, useParams } from'react-router-dom'
import Products from './Products'
import {useState} from 'react'
import React from 'react'
const items =[
    {id:15 , name:'iphone 15'},
    {id:14 , name:'iphone 14'},
    {id:13 , name:'iphone 13'},
]

export default function Shop() {
    // const [products, setProducts]= useState(items)
   
  return (<>
    <h3>Shop</h3>
    {
        items.map((item)=>{
            return(
                <Link to={`/products/${item.id}`}>{item.name} / </Link>
            )
        })
    }
    </>
  )
}
