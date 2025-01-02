import React from 'react'
import '../css/Error.css'
import { Link } from 'react-router-dom'

const Errorpg = () => {
  return (
    <>
      <div className="error-content">
        <h1>404 Page not found</h1>
        <p>Looks like something's broken. It's not you its us. <br />How about going back to the home page?</p>

        <button> <Link to= "/" className='link'>Home Page</Link></button>
      </div>
    </>
  )
}

export default Errorpg
