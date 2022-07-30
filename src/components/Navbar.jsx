
import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="Navbar bg-blue-300 flex flex-colomn justify-between m-3 py-3 place-items-center rounded-lg shadow-lg">
        <h1 className="text-2xl ml-3 font-bold  ">MyBlog</h1>
        <div className="links flex flex-row mx-3 ">
            <Link className="mx-2 hover:bg-blue-700 hover:rounded-lg p-3 font-bold hover:shadow-lg" to="/"><i className=" mr-1 fa-solid fa-house"></i>Home</Link>
            <Link className="mx-2 hover:bg-blue-700 hover:rounded-lg p-3 font-bold hover:shadow-lg" to="/create">New Blog
            <i className="ml-2 fa-solid fa-circle-plus"></i></Link>
        </div>
     </nav>

  )
}

export default Navbar