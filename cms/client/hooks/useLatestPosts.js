import { useState , useEffect} from 'react'
import axios from 'axios'

const useLatestPosts =() => {
        const [ Latestposts , setposts ] = useState([])
        
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
            Latestposts,
        }
}

export default useLatestPosts