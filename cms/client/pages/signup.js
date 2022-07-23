import ToggleTheme from "../components/ToggleTheme";
import {useState , useEffect} from 'react'
import { LockOutlined, UserOutlined , MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import axios from 'axios'
import toast ,{Toaster } from 'react-hot-toast' 
import { useContext } from "react";
import {AuthContext } from "../context/auth"
import {useRouter} from "next/router"
 

import {Col , Row } from "antd"

const FormSignup = () => {


    const router = useRouter()
    console.log(router)


    const [auth, setAuth ] = useContext(AuthContext)
    const [loading , setLoading] = useState(false)

    useEffect(() => {
      if(auth?.token){
        router.push('/')
      }
},[auth])

    const onFinish = async (values) => {

      console.log('Received values of form: ', values);
      try{

        setLoading(true);
        const {data} = await axios.post('/signup' ,values)
        // console.log('res =>' , res)
        
        
       if(data?.error){
        toast.error(data.error);
        setLoading(false)
      }
      else{
        toast.success("Signed Up !! Welcome to NightKing-CMS");
        console.log('signup res=>' , data)
        setAuth(data)
        localStorage.setItem('auth', JSON.stringify(data));
        setLoading(false)
        router.push('/admin')

      }
  

      }
      // if(data?.error){
      //   toast.error(data.error);
      // }
      // else{
      //   toast.success("Signed Up !! Welcome to NightKing-CMS");

      // }
      catch(err){
        toast.error("Signup failed , Try Again.")
        console.log(err)
        setLoading(false)
      };

    };
  
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />

        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="Email" />
          
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmpassword"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        
  
        <Form.Item>
            
          <Button type="primary" htmlType="submit" className="login-form-button" loading={loading} >
            Register
          </Button>
          <br/>
            Or <a href="/signin"> Login now </a>
        </Form.Item>
      </Form>
    );
  };
  
  
 
function signup (){
    return(
        <Row>
      <Col span={8} offset = {8}>
        <h1 style={{paddingTop: "100px"}}> SignUp </h1>

        <FormSignup/>



      </Col>
      </Row>
    )
} 
export default signup;