import React from 'react'
import BlogList from './BlogList'
import useCustom from './useCustom'
function Home() {
  const {blogs,loading}=useCustom('http://localhost:8000/blogs')
  return (
    
    <div>
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs}  />}
  
    </div>
    
  )
}

export default Home