export default {
  formDate(time) {
    if (!time) return "";
    let dt = new Date(time);
    let year = dt.getFullYear(); // 获取年
    let month = dt.getMonth() + 1; //获取月
    let day = dt.getDate(); //获取日
    let hour = dt.getHours(); //获取时
    let minute = dt.getMinutes(); //获取分
    let second = dt.getSeconds(); //获取秒
    return (
      year +
      "年" +
      //判断解决单数问题
      (month >= 10 ? month : "0" + month) +
      "月" +
      (day >= 10 ? day : "0" + day) +
      "日" +
      (hour >= 10 ? hour : "0" + hour) +
      "时" +
      (minute >= 10 ? minute : "0" + minute) +
      "分" +
      (second >= 10 ? second : "0" + second) +
      "秒"
    );
  },
};
