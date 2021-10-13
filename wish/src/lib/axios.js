import axios from "axios";

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: "http://www.wish.shop",
  // baseURL: "http://localhost:4000/",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
  // withCredentials: true,
});

export default instance;
