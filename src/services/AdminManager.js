import Api from "../services/ApiManager";

export default {
  login(password) {
    return Api.postData("/server/admin/login/", {password});
  },
  setPassword(oldPassword, newPassword) {
    return Api.postData("/server/admin/set-password/", {
      oldPassword,
      newPassword
    });
  },
  downloadAllData(password) {
    return Api.postData("/server/admin/download/", {password});
  },
  getMTurkStatus(password) {
    return Api.getData("/server/admin/mturk/status", {password});
  }
};
