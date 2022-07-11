import {
    PushpinOutlined,
    AppstoreOutlined,
    PieChartOutlined,
    DatabaseOutlined,
    PlusOutlined,
    FolderViewOutlined,
    CommentOutlined,
    BookOutlined,
    PlusCircleOutlined,
    UserOutlined,
    ProfileOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
    EditOutlined ,
  } from '@ant-design/icons';
  import { Button, Menu ,Layout } from 'antd';
  import React, { useState , useEffect } from 'react';
  import Link from "next/link"

  


  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const {Sider} = Layout
 
 
  
  // const items = [
  //   getItem(<a className={activeName("/admin")} href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
  //   getItem('Posts','o1' , <PushpinOutlined/>,[ 
  //   getItem(<a className={activeName("/admin/post")}  href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
  //   getItem(<a className={activeName("/admin/post/new")} href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
  //   getItem(<a className={activeName("/admin/post/categories")} href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
  //   getItem('Media', 'o2', <AppstoreOutlined />, [
  //     getItem(<a className={activeName("/admin/media/libraries")} href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
  //     getItem(<a className={activeName("/admin/media/new")}  href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
      
  //   ]),
  //   getItem(<a className={activeName("/admin/comments")} href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
  //   getItem('Users' , 'o3',<UsergroupAddOutlined />, [
  //       getItem(<a className={activeName("/admin/users")} href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
  //       getItem(<a className={activeName("/admin/users/new")} href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
  //   ]),
  //   getItem(<a className={activeName("/admin/userid")} href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
  //   getItem(<a className={activeName("/admin/customise")} href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
  // ];
  
  const AdminNav = () => {

    

    const [collapsed, setCollapsed] = useState(false);
    const [current,setCurrent ] = useState('')

    useEffect(()=>{
      process.browser && setCurrent(window.location.pathname)  // access the pathname
    },[process.browser && window.location.pathname])

    const activeName = (name) => `${current === name && "active"}`

    const items = [
      getItem(<a className={activeName("/admin")} href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
      getItem('Posts','o1' , <PushpinOutlined/>,[ 
      getItem(<a className={activeName("/admin/post")}  href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
      getItem(<a className={activeName("/admin/post/new")} href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
      getItem(<a className={activeName("/admin/post/categories")} href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
      getItem('Media', 'o2', <AppstoreOutlined />, [
        getItem(<a className={activeName("/admin/media/libraries")} href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
        getItem(<a className={activeName("/admin/media/new")}  href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
        
      ]),
      getItem(<a className={activeName("/admin/comments")} href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
      getItem('Users' , 'o3',<UsergroupAddOutlined />, [
          getItem(<a className={activeName("/admin/users")} href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
          getItem(<a className={activeName("/admin/users/new")} href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
      ]),
      getItem(<a className={activeName("/admin/userid")} href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
      getItem(<a className={activeName("/admin/customise")} href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
    ];

    // process.browser && console.log(window.location.pathname)
    
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <Sider collapsible
    
        
      >
      
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['o1','o2','o3']}
          mode="inline"
        //   theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </Sider>
    );
  };
  
  export default AdminNav;