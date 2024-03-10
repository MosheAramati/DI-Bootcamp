import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function Products(props) {

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/about')
    }

    const params = useParams()
  return (<>
    <div>iPhone {params.id}</div>
    <Link to='/shop'>Go back to Shop</Link><br />
    <button onClick={()=>goBack()}>About us</button>
    </>
  )
}
