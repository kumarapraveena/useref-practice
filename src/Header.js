import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <navbar style={{display:"flex",justifyContent:"space-between"}}>
            <Link to="/add">AddingProduct</Link>
            <Link to="/update">UpdateProduct</Link>
            <Link to="/login">login</Link>
            <Link to="/register">Register</Link>
           
        </navbar>
    </div>
  )
}

export default Header