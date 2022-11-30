import Api from "./ApiManager";

export default {
  isValid(hash) {
    return hash !== undefined && hash !== "x";
  },
  decrypt(hash) {
    let str = "";
    for (let i = 0; i < hash.length; i++) {
      switch (hash.charAt(i)) {
        case "a":
          str += "0";
          break;
        case "b":
          str += "1";
          break;
        case "c":
          str += "2";
          break;
        case "d":
          str += "3";
          break;
        case "e":
          str += "4";
          break;
        case "f":
          str += "5";
          break;
        case "g":
          str += "6";
          break;
        case "h":
          str += "7";
          break;
        case "j":
          str += "8";
          break;
        case "k":
          str += "9";
          break;
        default:
          throw "Invalid";
      }
    }
    return str;
  },
  encrypt(id) {
    let str = "" + id;
    let hash = "";
    for (let i = 0; i < str.length; i++) {
      switch (str.charAt(i)) {
        case "0":
          hash += "a";
          break;
        case "1":
          hash += "b";
          break;
        case "2":
          hash += "c";
          break;
        case "3":
          hash += "d";
          break;
        case "4":
          hash += "e";
          break;
        case "5":
          hash += "f";
          break;
        case "6":
          hash += "g";
          break;
        case "7":
          hash += "h";
          break;
        case "8":
          hash += "j";
          break;
        case "9":
          hash += "k";
          break;
        default:
          return "x";
      }
    }
    return hash;
  },
  postMTurkId(id) {
    return Api.postData("/server/register/m-turk/", {id}).then(
      response => response.REGISTRATIONID
    );
  },
  getCode(id) {
    return ("" + id).padStart(4, "0");
  }
};
