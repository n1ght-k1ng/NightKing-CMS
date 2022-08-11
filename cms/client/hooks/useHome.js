import {useContext, useState ,useEffect } from 'react'

import { MediaContext } from '../context/media'
import axios from 'axios'
import toast from 'react-hot-toast'

import { useRouter } from "next/router";
const useHome = () => {
    const [ media, setMedia] = useContext(MediaContext)
    const router = useRouter()
    const [ title , setTitle] = useState('')
    const [ subtitle, setSubtitle] = useState('')
    const [loading , setLoading] = useState(false)
    const [ fullWidthImage , setfullWidthImage] = useState('')


    const handleSave = async () => 
    {
        try{
            setLoading(true)
            const { data } = await axios.post('/page', {
                page: "home",
                title ,
                subtitle, 
                fullWidthImage: media?.selected?._id
            })
            console.log("Posted data" , data)
            setLoading(false)
            toast.success("Saved")
            router.push('/')
        }
        catch(err) 
        { 
        console.log(err) 
        setLoading(false)
     }

    }
    return { title, subtitle, fullWidthImage , setTitle ,setSubtitle , setfullWidthImage}
         
}

export default useHome