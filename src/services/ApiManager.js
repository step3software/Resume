import axios from "axios";

export default {
  getData(url, params) {
    const urlString = url + this.toParamString(params);
    console.log(this.toParamString(params));
    return axios.get(urlString).then(response => response.data);
  },
  postData(url, body, params) {
    return axios
      .post(url + this.toParamString(params), body)
      .then(response => response.data)
      .catch(e => console.error(e));
  },
  toParamString(params) {
    let paramString;
    if (typeof params === "string") {
      paramString = params;
    } else if (Array.isArray(params)) {
      paramString = params.join("/");
    } else {
      paramString = "";
    }
    return paramString;
  }
};
