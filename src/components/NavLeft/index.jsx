import { Menu } from "antd";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NumContext } from "../../App";
import MenuConfig from "../../config/menuConfig";
import "./index.less";
const { SubMenu } = Menu;
const NavLeft = (props) => {
  let { setState } = useContext(NumContext);
  /**
   *  @description  渲染菜单
   *  @data 导航数据
   */

  const renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  const handleClick = ({ item, key }) => {
    setState({ name: item.props.title });
  };
  return (
    <div>
      <div className="logo">
        <img src="/assets/logo-ant.svg" alt="logo" />
        <h3> Hooks</h3>
      </div>
      <Menu mode="vertical" theme="dark" onClick={handleClick}>
        {renderMenu(MenuConfig)}
      </Menu>
    </div>
  );
};
export default NavLeft;
