import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default axios.create({
  baseURL: "https://qr-appraisal.com.au/apiii"
  // baseURL: "http://localhost:3000/api",
});
