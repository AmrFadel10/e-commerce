import axios from "axios";
const request = axios.create({
  baseURL: "https://backend-ecommerce-ashy.vercel.app/api/v2",
});
export default request;
