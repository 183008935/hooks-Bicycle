import { Button, Result } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const Results = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <NavLink to="/">Back Home</NavLink>
        </Button>
      }
    />
  );
};
export default Results;
