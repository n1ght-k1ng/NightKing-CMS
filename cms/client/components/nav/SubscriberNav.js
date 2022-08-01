
import React, { useState, useEffect, useContext } from "react";
import { Menu,  Layout } from "antd";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import {

  PushpinOutlined,
  CameraOutlined,

  SettingOutlined,

  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const SubscriberNav = () => {
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
          <Link href="/subscriber">
            <a className={activeName("/subscriber")}>Dashboard</a>
          </Link>
        </Menu.Item>

       

        {/* library */}
     

        {/* comments */}
        <Menu.Item key="9" icon={<CommentOutlined />}>
          <Link href="/subscriber/comments">
            <a className={activeName("/subscriber/comments")}>Comments</a>
          </Link>
        </Menu.Item>

        {/* users */}
       

        {/* profile */}
        <Menu.Item key="13" icon={<UserOutlined />}>
          <Link href="/subscriber/profile">
            <a className={activeName("/subscriber/profile")}>Profile</a>
          </Link>
        </Menu.Item>

        {/* Customize */}
    
      </Menu>
    </Sider>
  );
};

export default SubscriberNav;