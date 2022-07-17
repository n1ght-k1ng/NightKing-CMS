import ToggleTheme from "../components/ToggleTheme";
import { LockOutlined, UserOutlined , MailOutlined, DatabaseFilled } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useContext, useState } from 'react';
import axios from 'axios'
import {useRouter} from 'next/router'
import {Col , Row } from "antd"
import toast from "react-hot-toast";

import { AuthContext } from "../context/auth";

 // to empty the fields in the form
// const [form] = Form.useForm();

const Fpass = () => {

    const [auth , setAuth] = useContext(AuthContext)
    const [loading, setloading] = useState(false)
    const router = useRouter()

    const [visible ,setVisible] = useState(false)
    const [form ] = Form.useForm();

    const forgotpasswordRequest = async (values)=>{
        console.log(values)
        try{
            setloading(true);
            const {data} = await axios.post("/forgot-password", values)
            if(data.error){
                toast.error(data.error);
                setloading(false);
            }else{

            toast.success("Password reset link has been sent to email address")
            }
            setloading(false)
            setVisible(true)

        }

        catch(error){
            console.log(error)
            toast.error("Forgot password request failed , Try again" ,error)
            setloading(false)
        }
    }

    const resetpasswordrequest = async (values)=>{
        console.log(values)
        try{
            setloading(true);
            const {data} = await axios.post("/reset-password", values)
            if(data.error){
                toast.error(data.error);
                setloading(false);
            }else{

            toast.success("You can login to NightKing-CMS with your new password")
            }
            form.resetFields = (['email'])
            setloading(false)
            setVisible(false)

        }

        catch(error){
            console.log(error)
            toast.error("Reset request failed , Try again" ,error)
            setloading(false)
        }
    }
      


   
  
    return (
      <Form
        name="normal_login"
        className="login-form"
        form = {form}
       
        onFinish={visible ? resetpasswordrequest: forgotpasswordRequest}
      >
        <Form.Item name="email"
          
          rules={[
            {
            type :'email',
              required: true,
              message: 'Please input your email',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        {visible && 
        <>
          <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your new Password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Enter your new Password!"
          />
        </Form.Item>
        <Form.Item name="resetCode"
          
          rules={[
            {
              required: true,
              message: 'Enter Reset Code',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Reset code" />
        </Form.Item>
        
        
        
        
        
        </>
        }
        
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" loading={loading } >
            Submit
          </Button>
          &nbsp;Or <a href="/signin"> SignIn</a>
        </Form.Item>
      </Form>
    );
  };








function forgotpass (){

    return(
        <Row>
      <Col span={8} offset = {8}>
        <h1 style={{paddingTop: "100px"}}> Forgot Password</h1> 

        <Fpass/>



      </Col>
      </Row>
    )
} 
export default forgotpass;