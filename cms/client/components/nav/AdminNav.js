// import {
//     PushpinOutlined,
//     AppstoreOutlined,
//     PieChartOutlined,
//     DatabaseOutlined,
//     PlusOutlined,
//     FolderViewOutlined,
//     CommentOutlined,
//     BookOutlined,
//     PlusCircleOutlined,
//     UserOutlined,
//     ProfileOutlined,
//     UserAddOutlined,
//     UsergroupAddOutlined,
//     EditOutlined ,
//   } from '@ant-design/icons';

//   import { Button, Menu ,Layout } from 'antd';
//   import React, { useState , useEffect } from 'react';
//   import Link from "next/link"

  


  
//   function getItem(label, key, icon, children, type) {

//     label.className = 'active'
   
//     return {

//       key,
//       icon,
//       children,
//       label,
//       type,
//     };
//   }
//   const {Sider} = Layout
 
 
  
//   // const items = [
//   //   getItem(<a className={activeName("/admin")} href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
//   //   getItem('Posts','o1' , <PushpinOutlined/>,[ 
//   //   getItem(<a className={activeName("/admin/post")}  href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
//   //   getItem(<a className={activeName("/admin/post/new")} href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
//   //   getItem(<a className={activeName("/admin/post/categories")} href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
//   //   getItem('Media', 'o2', <AppstoreOutlined />, [
//   //     getItem(<a className={activeName("/admin/media/libraries")} href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
//   //     getItem(<a className={activeName("/admin/media/new")}  href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
      
//   //   ]),
//   //   getItem(<a className={activeName("/admin/comments")} href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
//   //   getItem('Users' , 'o3',<UsergroupAddOutlined />, [
//   //       getItem(<a className={activeName("/admin/users")} href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
//   //       getItem(<a className={activeName("/admin/users/new")} href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
//   //   ]),
//   //   getItem(<a className={activeName("/admin/userid")} href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
//   //   getItem(<a className={activeName("/admin/customise")} href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
//   // ];
  
//   const AdminNav = () => {

    

//     const [collapsed, setCollapsed] = useState(false);
    

//     // useEffect(()=>{
//     //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//     // },[process.browser && window.location.pathname])
//     // const [current,setCurrent ] = useState('')
//     // const activeName = (name) => `${current === name && current == "active"}`

//     const items = [
//       getItem(<a className='' href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
//       getItem('Posts','o1' , <PushpinOutlined/>,[ 
//       getItem(<a className='active'  href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
//       getItem(<a className='active' href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
//       getItem(<a className='active' href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
//       getItem('Media', 'o2', <AppstoreOutlined />, [
//         getItem(<a className='active' href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
//         getItem(<a className='active'  href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
        
//       ]),
//       getItem(<a className='active'href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
//       getItem('Users' , 'o3',<UsergroupAddOutlined />, [
//           getItem(<a className='active' href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
//           getItem(<a className='active' href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
//       ]),
//       getItem(<a className='active'href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
//       getItem(<a className='active' href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
//       // useEffect(()=>{
//       //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//       // },[process.browser && window.location.pathname])
//     ];

//     // const items = [
//     //   getItem(<a href ="/admin"> DashBoard </a> , '1', <PieChartOutlined />),
//     //   getItem('Posts','o1' , <PushpinOutlined/>,[ 
//     //   getItem(<a href ="/admin/post"> AllPosts </a> , '2', <FolderViewOutlined />),
//     //   getItem(<a href ="/admin/post/new"> Add New  </a> , '3', <PlusOutlined />),
//     //   getItem(<a href ="/admin/post/categories"> Categories </a> , '4', <DatabaseOutlined/>),]),
//     //   getItem('Media', 'o2', <AppstoreOutlined />, [
//     //     getItem(<a href ="/admin/media/libraries"> Library </a>, '5',<BookOutlined />),
//     //     getItem(<a href ="/admin/media/new"> Add new </a>, '6',<PlusCircleOutlined />),
        
//     //   ]),
//     //   getItem(<a href ="/admin/comments"> Comments </a> , '7', <CommentOutlined />),
//     //   getItem('Users' , 'o3',<UsergroupAddOutlined />, [
//     //       getItem(<a href ="/admin/users"> All Users </a> , '9', <UserOutlined />),
//     //       getItem(<a href ="/admin/users/new"> Add New User  </a> , '10', <UserAddOutlined />),
//     //   ]),
//     //   getItem(<a href ="/admin/userid"> Profile </a> , '11', <ProfileOutlined />),
//     //   getItem(<a href ="/admin/customise"> Customise </a> , '12', <EditOutlined />),
//     //   // useEffect(()=>{
//     //   //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//     //   // },[process.browser && window.location.pathname])
//     // ];
//     // // process.browser && console.log(window.location.pathname)
    
//     const toggleCollapsed = () => {
//       setCollapsed(!collapsed);
//     };
  
//     return (
//       <Sider collapsible
    
        
//       >
      
//         <Menu
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['o1','o2','o3']}
//           mode="inline"
//         //   theme="dark"
//           inlineCollapsed={collapsed}
//           items={items}
//           // useEffect(()=>{
//           //   process.browser && setCurrent(window.location.pathname)  // access the pathname
//           // },[process.browser && window.location.pathname])


//         />
//       </Sider>
//     );
//   };
  
//   export default AdminNav;

import React, { useState, useEffect } from "react";
import { Menu, Button, Layout } from "antd";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import {
  PieChartOutlined,
  MailOutlined,
  PushpinOutlined,
  CameraOutlined,
  UserSwitchOutlined,
  SettingOutlined,
  BgColorsOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");

  const onlywidth = useWindowWidth()
  

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  useEffect(() => {
    if(onlywidth<650)
    {
    setCollapsed(true)
    }
    else if( onlywidth > 650 )
    {
      setCollapsed(false)
    }
  },[onlywidth<650])

  const activeName = (name) => `${current === name && "active"}`;

  return (
    <Sider collapsible collapsed = {collapsed} onCollapse = {()=> setCollapsed(!collapsed) }>
      <Menu
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["2", "6", "10"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<SettingOutlined />}>
          <Link href="/admin">
            <a className={activeName("/admin")}>Dashboard</a>
          </Link>
        </Menu.Item>

        {/* posts */}
        <SubMenu key="2" icon={<PushpinOutlined />} title="Posts">
          <Menu.Item key="3">
            <Link href="/admin/posts">
              <a className={activeName("/admin/post")}>All Posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/admin/post/new">
              <a className={activeName("/admin/post/new")}>Add New</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/admin/post/categories">
              <a className={activeName("/admin/post/categories")}>Categories</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* library */}
        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item key="7">
            <Link href="/admin/media/library">
              <a className={activeName("/admin/media/library")}>Library</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link href="/admin/media/new">
              <a className={activeName("/admin/media/new")}>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* comments */}
        <Menu.Item key="9" icon={<CommentOutlined />}>
          <Link href="/admin/comments">
            <a className={activeName("/admin/comments")}>Comments</a>
          </Link>
        </Menu.Item>

        {/* users */}
        <SubMenu key="10" icon={<UserSwitchOutlined />} title="Users">
          <Menu.Item key="11">
            <Link href="/admin/users">
              <a className={activeName("/admin/users")}>All Users</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="12">
            <Link href="/admin/users/new">
              <a className={activeName("/admin/users/new")}>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* profile */}
        <Menu.Item key="13" icon={<UserOutlined />}>
          <Link href="/admin/userid">
            <a className={activeName("/admin/userid")}>Profile</a>
          </Link>
        </Menu.Item>

        {/* Customize */}
        <Menu.Item key="14" icon={<BgColorsOutlined />}>
          <Link href="/admin/customize">
            <a className={activeName("/admin/customise")}>Customize</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminNav;