import React from 'react'
import {useState}  from 'react'
import {useNavigate} from 'react-router-dom'
function Create() {
  const navigate = useNavigate()
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const[loading,setloading]=useState(false)
  const handlesubmit =(e)=>{
    e.preventDefault();
    const blog={title,description} ;
    setloading(true)
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body:JSON.stringify(blog)
    }).then(setloading(false))
    navigate('/')

  }
  return (
    <div className='create continer'>
        <h2 className='font-bold mb-3'>Create a new Blog</h2>
        
        <form className='bg-blue-200 mx-4 rounded-md' onSubmit={handlesubmit}>
        <div className='flex flex-col container-md justify-center items-center place-content-center '>
          <label className='font-bold' >Blog Title:</label>
          <input value={title} className='rounded-md' type="text" required onChange={(event)=>{settitle(event.target.value)}} />
          <label className='font-bold'>Blog Descripion:</label>
          <textarea value={description} onChange={(event)=>{setdescription(event.target.value)}} className='rounded-md m-2' required ></textarea>
          {!loading  && <button class="bg-blue-500 hover:shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2">
             Submit
          </button>}
          {loading && <button disabled class="bg-blue-500 hover:shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-2">
             Loading..
          </button>} 
          </div>
        </form>
        
    </div>
  )
}

export default Create