import ToggleTheme from "../components/ToggleTheme";
import { LockOutlined, UserOutlined , MailOutlined, DatabaseFilled } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useContext, useState , useEffect} from 'react';
import axios from 'axios'
import {useRouter} from 'next/router'
import {Col , Row } from "antd"
import toast from "react-hot-toast";

import { AuthContext } from "../context/auth";

const FormSignin = () => {

    const [auth , setAuth] = useContext(AuthContext)
    const [loading, setloading] = useState(false)
    const router = useRouter()
    const [form ] = Form.useForm();

    useEffect(() => {
          if(auth?.token){
            router.push('/')
          }
    },[auth])
    const onFinish = async (values) => {
      // console.log('Received values of form: ', values);

      try{
        setloading(true)
        const { data } = await axios.post("/signin", values)

        if(data?.error) {
          toast.error(data.error)
          setloading(false)

        }else{
        console.log('SignIN response: ', data)
        // save user and token to context 
        setAuth(data)
        // save user and token to local storage
        localStorage.setItem('auth',JSON.stringify(data))
        toast.success("Successfully Signed In - Welcome to NightKing-CMS")
        setloading(false)
        //redirect
        // router.push('/')

        if(data?.user?.role === 'Admin'){

          router.push('/admin')
        } 
        else if (data?.user?.role === 'Author'){
          router.push("/author")
        }
        else {
          router.push('/subscriber')
        }
        form.resetFields()
        }
      }
      catch(err){
          console.log(err);
          setloading(false)
          toast.error('SignIN failed')
      }
    };
  
    return (
      <Form
        form = { form }
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
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
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>


        
          <a className="login-form-forgot" href="/forgot-password">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
             
            Forgot password??
            
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          &nbsp;Or <a href="/signup"> register now!</a>
        </Form.Item>
      </Form>
    );
  };








function signin (){

    return(
        <Row>
      <Col span={8} offset = {8}>
        <h1 style={{paddingTop: "100px"}}> Sign In </h1>

        <FormSignin/>



      </Col>
      </Row>
    )
} 
export default signin;