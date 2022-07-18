import {Button} from "antd"
import {Layout} from "antd"
import { useContext  ,useEffect , useState} from "react";
import AdminNav from "../../components/nav/AdminNav"
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons"; 

import ToggleTheme from "../../components/ToggleTheme";



const {Content } = Layout;



function AdminLayout (props) {

    // Securing routes 
    const [auth, setAuth ] = useContext(AuthContext)

    const [loading , setLoading ] = useState(true)

    const router = useRouter()

    useEffect(() => {
        
        if(auth?.user?.role != "admin"){
            router.push('/')
            
        }
        else {
            setLoading(false)
        }
        
    },[auth])


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