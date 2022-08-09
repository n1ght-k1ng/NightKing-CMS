import {Button} from "antd"
import AdminLayout from "../../components/layout/adminLayout";
import { useEffect , useState } from "react";
import { Row , Col , Divider} from "antd"
import Link from 'next/link'

import RenderProgress from "../../components/posts/RenderProgress"
import ToggleTheme from "../../components/ToggleTheme";
// const {Content , Sider} = Layout;
import useNumbers from "../../hooks/useNumbers";
function Admin () {
    const {numbers}  = useNumbers()
    return(
        <AdminLayout>
            <Row>
                <Col span ={24}>
                    <Divider>
                        <h1>Statistics</h1>
                    </Divider>
                
                </Col>
            </Row>
            <Row>
                <Col span ={12} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.posts} name = "Posts" link = '/admin/posts'/>
                </Col>
                <Col span ={12} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.comments} name = "Comments" link = '/admin/comments'/>
                </Col>
                <Col span ={12} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.categories} name = "Categories" link = '/admin/categories'/>
                </Col>
                <Col span ={12} style ={{marginTop: 100 , textAlign: 'center' , fontSize:20}}>
                    <RenderProgress number= {numbers.users} name = "Users" link = '/admin/users'/>
                </Col>
            </Row>

       
        

        </AdminLayout>
        
          
    )
}

export default Admin;