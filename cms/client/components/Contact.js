import ToggleTheme from "../components/ToggleTheme";
import { LockOutlined, UserOutlined , MailOutlined, DatabaseFilled  }  from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useContext, useState , useEffect} from 'react';
import axios from 'axios'
import {useRouter} from 'next/router'
import {Col , Row } from "antd"
import toast from "react-hot-toast";

import { AuthContext } from "../context/auth";

const ContactForm = () => {

    const [loading, setloading] = useState(false)
    const router = useRouter()
    const [form ] = Form.useForm();

  
    const onFinish = async (values) => {
      // console.log('Received values of form: ', values);

      try{
        setloading(true)
      
      }
      catch(err){
          console.log(err);
          setloading(false)
          toast.error('SignIN failed')
      }
    };
  
    return (
        <Row>
            <Col span={20} offset={2}>
            <h1> Contact Form </h1>
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
          name="Name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
              hasFeedback: true
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Your name" />
        </Form.Item>
          
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: 'Please Enter your email address',
              
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Your Email"
          />
        </Form.Item>
        
        <Form.Item
          name="Message"
          rules={[
            {
              required: true,
              message: 'Please write your message here',
              
            },
            
          ]}
          hasFeedback
        >
          <Input.TextArea
            prefix={<LockOutlined className="site-form-item-icon" />}
            
            placeholder="Please write your message here"
          />
        </Form.Item>
       
        <Form.Item>
          <Button  type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        
        </Form.Item>
      </Form>
      
          

            </Col>
        </Row>
       
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
export default ContactForm;