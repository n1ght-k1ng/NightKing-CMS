import { useState , useEffect} from 'react'
import axios from 'axios'

const useLatestPosts =() => {
        const [ posts , setposts ] = useState([])
        
        useEffect(() => {
            const getposts = async () => {
                try{
                    const { data } = await axios.get("/posts/1")
                    setposts(data)
                }
                catch(err){ console.log(err)}
            }
            getposts()
        },[])

        return {
            posts,
        }
}

export default useLatestPosts