/* 基于axios的 封装的请求模块*/
import aixos from "axios";

const request = aixos.create({
  baseURL: "" // 请求的基础路径
});

export default request;
