
import React, { useState, useEffect, useContext } from "react";
import { Menu, Button, Layout } from "antd";
import Link from "next/link";
import { useWindowWidth } from "@react-hook/window-size";
import { AuthContext } from "../../context/auth";
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

const AuthorNav = () => {
  // state
  const [ auth , setAuth ] = useContext(AuthContext)
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
          <Link href="/author">
            <a className={activeName("/author")}>Dashboard</a>
          </Link>
        </Menu.Item>

        {/* posts */}
        <SubMenu key="2" icon={<PushpinOutlined />} title="Posts">
          <Menu.Item key="3">
            <Link href="/author/posts">
              <a className={activeName("/author/posts")}>All Posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/author/posts/new">
              <a className={activeName("/author/posts/new")}>Add New</a>
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="5">
            <Link href="/author/categories">
              <a className={activeName("/author/categories")}>Categories</a>
            </Link>
          </Menu.Item> */}
        </SubMenu>

        {/* library */}
        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item key="7">
            <Link href="/author/media/library">
              <a className={activeName("/author/media/library")}>Library</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link href="/author/media/new">
              <a className={activeName("/author/media/new")}>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* comments */}
        <Menu.Item key="9" icon={<CommentOutlined />}>
          <Link href="/author/comments">
            <a className={activeName("/author/comments")}>Comments</a>
          </Link>
        </Menu.Item>

        {/* users */}
       

        {/* profile */}
        <Menu.Item key="13" icon={<UserOutlined />}>
          <Link href= {`/author/${auth?.user?._id}`}>
            <a className={activeName( `/author/${auth?.user._id}`)}>Profile</a>
          </Link>
        </Menu.Item>

        {/* Customize */}
    
      </Menu>
    </Sider>
  );
};

export default AuthorNav;