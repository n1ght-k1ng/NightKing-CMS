import { useState , useEffect, useContext} from "react";
import AdminLayout from "../../../components/layout/adminLayout";
import { Row , Col , List , Avatar } from "antd"
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { AuthContext } from "../../../context/auth";
import loadCustomRoutes from "next/dist/lib/load-custom-routes";


const AllUsers = () => {
    const [auth, setAuth] = useContext(AuthContext)
    const [users , setUsers] = useState([])

    const router = useRouter()
    useEffect(() => {
        if(auth?.token)
        loadusers()
    },[auth?.token])

    const loadusers = async (req, res) => {
        try{
            const { data } = await axios.get("/users")
            setUsers(data)
            console.log("here we are",data)
        }
        catch(err) { console.log(err)   }
    }
    
    const handleDelete = async (user) => {
        try{

            if(user?._id === auth?.user?._id)
            {
                toast.error('Damn , dont delete yourself !!')
                return
            }
            try {
                const {data} = await axios.delete(`/user/${user?._id}`)
                
                setUsers(prev => prev.filter((u) => u._id !== user._id))
                toast.error('User Deleted')
            }

            catch(err) { console.log(err) }


            if(user._id === auth.user._id){
                toast.error('Damn , dont delete yourself !!')
                return
            }


             }
        catch(err) { console.log(err) }
    }


    return (
        <AdminLayout>
            <Row>
                <Col span= {24}>

                <h4 > All Users ({users?.length}) </h4>

               

                <br/>
                <List
                    itemLayout = 'horizontal'
                    dataSource = {users}
                    renderItem = {(user) => (


                        <List.Item
                        actions={[
                            <Link href={`/admin/users/${user._id}`}><a>Edit</a></Link>,

                            <a disabled ={user?._id === auth?.user?._id} onClick={() => handleDelete(user)}> delete </a>

    





                        ]}>
                            <Avatar src={user?.image?.url}>{user?.name[0]}</Avatar>
                            <List.Item.Meta title = {user.name} style = {{marginLeft: 10}}/>

                            <List.Item.Meta description= {user.email} style = {{marginLeft: 10}}/>
                            <List.Item.Meta description= {user.role} style = {{marginLeft: 10}}/>
                            <List.Item.Meta description= {`${user?.posts?.length || 0}  Posts`} style = {{marginLeft: 10}}/>

                        
                        </List.Item>
                    )} 

                />

                </Col>
            </Row>
        </AdminLayout>
    )

}
export default AllUsers