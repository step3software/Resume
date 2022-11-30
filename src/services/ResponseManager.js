import Api from "./ApiManager";

export default {
  postResponse(responseData) {
    return Api.postData("/server/response/", responseData);
  }
};
