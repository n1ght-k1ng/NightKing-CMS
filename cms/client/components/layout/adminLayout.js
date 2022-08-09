import {Button} from "antd"
import {Layout} from "antd"
import { useContext  ,useEffect , useState} from "react";
import AdminNav from "../../components/nav/AdminNav"
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons"; 
import LoadingToRedirect from "../LoadingToRedirect";

import axios from 'axios'

import ToggleTheme from "../../components/ToggleTheme";
// import { get } from "mongoose";



const {Content } = Layout;



function AdminLayout (props) {
    const [auth, setAuth ] = useContext(AuthContext)
    const [loading , setLoading ] = useState(true)

    useEffect(() => {


        
        if(auth?.token) getcurrentAdmin()
        
        setLoading(false)        
    },[auth?.token])

    const getcurrentAdmin = async() => {
        
        try{
            const {data } = await axios.get('/current-admin')
             setLoading(false)


        }
        catch(err){ console.log(err) 
        router.push('/')}
    }

    // Securing routes 
   

 

    const router = useRouter()

  


    if(loading ){


        return <LoadingToRedirect/>

                }
                


    

    return(
        <Layout>
            
        <Layout>
        <AdminNav/>
            <Content style ={{padding: '10px'}}>

            {props.children}

            </Content>

        
            </Layout>
        </Layout>
        
          
    )
}

export default AdminLayout