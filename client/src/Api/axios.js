import axios from "axios";
const instance = axios.create({
  // local version

  // baseURL: "https://evangadi-forum-back-end-753k.onrender.com/api",

  //deployed version of evangadi-server on render.com

  baseURL: "https://evangadi-forum-2024-2.onrender.com",
});
export default instance;
