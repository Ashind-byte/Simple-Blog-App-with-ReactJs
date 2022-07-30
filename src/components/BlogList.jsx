import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({blogs}) {
    
  return (
    <div className='bloglist'>
         <div >
      {
        blogs.map((blog)=>{
          return(
              <div className=" rounded overflow-hidden   place-items-center" key={blog.id}>
  
               <div class="px-6 py-4 mb-2 hover:bg-gray-100 hover:shadow-lg">
               <Link to={`/blogs/${blog.id}`}>
               <div class="font-bold text-xl mb-2">{blog.title}</div>
                <p class="text-gray-700 text-base">
                 {blog.description}
                </p>
               </Link>
              </div>

            </div>
            
          )
        })
      }
    </div>
    </div>
  )
}

export default BlogList