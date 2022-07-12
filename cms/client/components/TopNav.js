import { AppstoreOutlined, MailOutlined, SettingOutlined , UserAddOutlined , UserOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import {Link} from "next/link"
const items = [
  {
    
    label: <a href="/">
    CMS
  </a>,
    key: 'mail',
    icon: <MailOutlined />,

  },
  {
    
    label: <a href = "/signup">
        SignUp 
    </a>,
    key: 'signup',
    icon: <UserAddOutlined />,
    // disabled: true,
  },
  {
    // label: 'Signin',
    label: <a href = "/signin">
        SignIn 
    </a>,
    key: 'signin',
    icon: <UserOutlined />,
    // disabled: true,
  },
  
  {
    label: 'Dashboard',
    key: 'dashboard',
    style : {marginLeft:"auto"},
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Management',
        children: [
        //   {
        //     label: 'Management',
        //     key: 'setting:1',
        //   },
          {
            label: <a href = "/admin">
                Admin
            </a>,
            key: 'setting:2',
          },
        ],
      },
    //   {
    //     type: 'group',
    //     label: 'Item 2',
    //     children: [
    //       {
    //         label: 'Option 3',
    //         key: 'setting:3',
    //       },
    //       {
    //         label: 'Option 4',
    //         key: 'setting:4',
    //       },
    //     ],
    //   },
    ],
  },
  {
    label: (
        <ToggleTheme/> 
        
    ),
    // style: {marginLeft: "auto"},
    key: 'alipay',
  },
];

const TopNav = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme ="dark"/>;
};

export default TopNav;