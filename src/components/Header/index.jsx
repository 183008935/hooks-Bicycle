import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import Api from "../../api";
import { NumContext } from "../../App";
import Util from "../../Utils";
import "./index.less";

const Herder = (props) => {
  let { state } = useContext(NumContext);
  const [time, setTime] = useState(null);
  const [data, setData] = useState({
    dayPictureUrl: "",
    weather: "",
  });
  /**
   * @description 时间控制
   */
  setInterval(() => {
    const newTime = Util.formDate(new Date().getTime());
    setTime(newTime);
  }, 1000);
  /**
   * @description 跨域请求天气
   */
  const getApi = () => {
    let city = "杭州";
    Api.jsonp({
      url:
        "http://api.map.baidu.com/telematics/v3/weather?location=" +
        encodeURIComponent(city) +
        "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",
    })
      .then((res) => {
        if (res.status === "success") {
          let data = res.results[0].weather_data[0];
          setData({
            dayPictureUrl: data.dayPictureUrl,
            weather: data.weather,
          });
        }
      })
      .catch((error) => {});
  };
  // useEffect(() => {
  //   getApi();
  // }, []);
  return (
    <div className="header">
      <Row className="header-top">
        <Col span={24}>
          <span>欢迎,田家豪</span>
          <a href="javascript;">退出</a>
        </Col>
      </Row>
      <Row className="breadcrumb">
        <Col span={4} className="breadcrumb-title">
          {state.name}
        </Col>
        <Col span={20} className="weather">
          <span className="date">{time}</span>
          <span className="weather-img">
            <img src={data.dayPictureUrl} alt="" />
          </span>
          <span className="weather-detail">{data.weather}</span>
        </Col>
      </Row>
    </div>
  );
};
export default Herder;
