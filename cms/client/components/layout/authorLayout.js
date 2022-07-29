import {Button} from "antd"
import {Layout} from "antd"
import { useContext  ,useEffect , useState} from "react";
import AuthorNav from "../nav/AuthorNav";
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons"; 

import axios from 'axios'

import ToggleTheme from "../../components/ToggleTheme";
// import { get } from "mongoose";



const {Content } = Layout;



function authorLayout (props) {
    const [auth, setAuth ] = useContext(AuthContext)
    const [loading , setLoading ] = useState(true)

    useEffect(() => {


        
        if(auth?.token) getcurrentAuthor()
        
        setLoading(false)        
    },[auth?.token])

    const getcurrentAuthor = async() => {
        
        try{
            const {data } = await axios.get('/current-author')
             setLoading(false)


        }
        catch(err){ console.log(err) 
        router.push('/')}
    }

    // Securing routes 
   

 

    const router = useRouter()

  


    if(loading ){


        return <LoadingOutlined  
        style = {{

            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize : "50px",
            height : "100vh",
            color : "red"
            
        }}/>

                }
                


    

    return(
        <Layout>
            
        <Layout>
        <AuthorNav/>
            <Content style ={{padding: '10px'}}>

            {props.children}

            </Content>

        
            </Layout>
        </Layout>
        
          
    )
}

export default authorLayout