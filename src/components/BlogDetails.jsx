import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useCustom from './useCustom'

function BlogDetails() {
  const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+ blogs.id,
    {method :'DELETE'}
  ).then(()=>{
     navigate('/')
  })
}
const navigate = useNavigate()
  const {id}= useParams()
  const {blogs,loading}=useCustom('http://localhost:8000/blogs/' + id)
  return (
    <div>
      {loading && <div className='font-bold font-xl'>Loading...</div>}
      {blogs && (
          <article className='rounded bg-gray-100'>
            <h2 className='text-xl font-bold'>{blogs.title}</h2>
            <div className='text-md'>
            <p>{blogs.description}</p>
            </div>
            <button onClick={handleClick} className='bg-blue-500 rounded-md p-2 m-2'>Delete</button>

          </article>
        )
      }
    </div>
  )
}

export default BlogDetails