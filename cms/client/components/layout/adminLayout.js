import {Button} from "antd"
import {Layout} from "antd"
import { useContext  ,useEffect , useState} from "react";
import AdminNav from "../../components/nav/AdminNav"
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons"; 

import axios from 'axios'

import ToggleTheme from "../../components/ToggleTheme";
// import { get } from "mongoose";



const {Content } = Layout;



function AdminLayout (props) {


    const getcurrentAdmin = async() => {
        
        try{
            const {data } = await axios('/current-admin')
             setLoading(false)


        }
        catch(err){ console.log(err) 
        router.push('/')}
    }

    // Securing routes 
    const [auth, setAuth ] = useContext(AuthContext)

    const [loading , setLoading ] = useState(true)

    const router = useRouter()

    useEffect(() => {


        
        getcurrentAdmin()
        
        setLoading(false)        
    },[auth?.token])


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
        <AdminNav/>
            <Content style ={{padding: '10px'}}>

            {props.children}

            </Content>

        
            </Layout>
        </Layout>
        
          
    )
}

export default AdminLayout