import React, { useState } from "react";
//import "./header.css";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  return (
    
    <Menu theme='dark' onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    <Item key="home" icon={<AppstoreOutlined />}>
      
        <Link to="/"><span style={{ fontSize: '20px' }}>Home</span></Link>
      </Item>

      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register"><span style={{ fontSize: '20px' }}>Register</span></Link>
      </Item>

      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login"><span style={{ fontSize: '20px' }}>Login</span></Link>
      </Item>

      <SubMenu icon={<SettingOutlined />} title=<span style={{ fontSize: '20px' }}>Username </span>>
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
