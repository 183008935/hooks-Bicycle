import { Button, Card, Radio } from "antd";
import React, { useState } from "react";
import "./ui.less";
const Buttons = () => {
  const [state, setState] = useState({
    loading: true,
    size: "default",
    open: "关闭",
  });
  const handleCloseLoading = () => {
    setState({
      loading: !state.loading,
      open: state.open === "开启" ? "关闭" : "开启",
    });
  };
  return (
    <div>
      <Card title="基础按钮" className="card-wrap">
        <Button type="primary">Imooc</Button>
        <Button>Imooc</Button>
        <Button type="dashed">Imooc</Button>
        <Button type="danger">Imooc</Button>
        <Button disabled>Imooc</Button>
      </Card>
      <Card title="图形按钮" className="card-wrap">
        <Button icon="plus">创建</Button>
        <Button icon="edit">编辑</Button>
        <Button icon="delete">删除</Button>
        <Button shape="circle" icon="search"></Button>
        <Button type="primary" icon="search">
          搜索
        </Button>
        <Button type="primary" icon="download">
          下载
        </Button>
      </Card>
      <Card title="Loading按钮" className="card-wrap">
        <Button type="primary" loading={state.loading}>
          确定
        </Button>
        <Button type="primary" shape="circle" loading={state.loading}></Button>
        <Button loading={state.loading}>点击加载</Button>
        <Button shape="circle" loading={state.loading}></Button>
        <Button type="primary" onClick={handleCloseLoading}>
          {state.open}
        </Button>
      </Card>
      <Card title="按钮组" style={{ marginBottom: 10 }}>
        <Button.Group>
          <Button type="primary" icon="left">
            返回
          </Button>
          <Button type="primary" icon="right">
            前进
          </Button>
        </Button.Group>
      </Card>
      <Card title="按钮尺寸" className="card-wrap">
        <Radio.Group
          value={state.size}
          onChange={(e) =>
            setState({
              size: e.target.value,
            })
          }
        >
          <Radio value="small">小</Radio>
          <Radio value="default">中</Radio>
          <Radio value="large">大</Radio>
        </Radio.Group>
        <Button type="primary" size={state.size}>
          Imooc
        </Button>
        <Button size={state.size}>Imooc</Button>
        <Button type="dashed" size={state.size}>
          Imooc
        </Button>
        <Button type="danger" size={state.size}>
          Imooc
        </Button>
      </Card>
    </div>
  );
};
export default Buttons;
