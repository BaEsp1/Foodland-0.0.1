import React from 'react'
import { Link } from 'react-router-dom'


function Error404() {
  return (
    <div>
        <p>Sorry we couldn't find this page.</p>    
        <p>Please redirect to <span><Link to="/">Foodland</Link> and continue shopping!</span></p>    
    </div>
  )
}

export default Error404