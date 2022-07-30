import React from 'react'
import {Link} from 'react-router-dom'

function Notfound() {
  return (
    <div>
        <h1 className='font-bold'>Oops !!</h1>
        <h2>This Page doesnt exists </h2>
        <br />
        <Link className='bg-gray-300 rounded-md p-2 m-2' to="/">Go Back to Home Page </Link>
    </div>
  )
}

export default Notfound