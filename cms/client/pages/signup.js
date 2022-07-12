import ToggleTheme from "../components/ToggleTheme";
import { LockOutlined, UserOutlined , MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

import {Col , Row } from "antd"

const FormSignup = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
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
            
          <Button type="primary" htmlType="submit" className="login-form-button">
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