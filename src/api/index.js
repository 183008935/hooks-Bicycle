import Jsonp from "jsonp";

export default class Api {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(
        options.url,
        {
          param: "callback"
        },
        function(err, response) {
          if (response.status === "success") {
            resolve(response);
          } else {
            reject(response.messsage);
          }
        }
      );
    });
  }
}
