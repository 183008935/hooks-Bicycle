import { Col, Row } from "antd";
import React, { createContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavLeft from "./components/NavLeft";
import "./style/common.less";
export const NumContext = createContext();
// 应用的根组件

const App = (props) => {
  const [state, setState] = useState({ name: "首页" });
  console.log(state.name);
  return (
    <Row className="container">
      <NumContext.Provider value={{ state, setState }}>
        <Col span={3} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row className="content">{props.children}</Row>
          <Footer />
        </Col>
      </NumContext.Provider>
    </Row>
  );
};
export default App;
