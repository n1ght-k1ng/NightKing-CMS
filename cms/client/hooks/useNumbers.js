import { useState , useEffect} from 'react'
import axios from 'axios'

const useNumbers =() => {
        
        const [numbers, setNumbers] = useState({})
        useEffect(() =>
        {
            getNumbers()
    
        },[])
    
        const getNumbers = async () => 
        {
            try{
                const { data } = await axios.get("/numbers")
                setNumbers(data)
            }
            catch(err){ console.log(err)}
        }  
        

        return {
            numbers,
        }
}

export default useNumbers