
import { useEffect,useState } from 'react'

const useCustom =(url)=>{
    const [blogs, setblog] = useState(null)
    const [loading,setloading]=useState(true)
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
        .then(res=>{return res.json();}).then(data=>{setblog(data)
        setloading(false)})
          
        },2000);
        },[url]);
        return {blogs,loading}
      
      
}

export default useCustom;