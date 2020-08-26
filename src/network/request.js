import axios from "axios"

export function request(config){
  const instance = axios.create({
    baseURL:"http://152.136.185.210:8000/api/z8",
    timeout:5000
  })
// axios拦截器
// 1、请求拦截
  instance.interceptors.request.use(config =>{
    // console.log(config);
    // 1、比如config中的一些信息不符合服务器的要求

    // 2、比如每次发送网络请求时，都希望在界面显示一个请求的图标

    // 3、某些网络请求（比如登录），必须携带一些特殊的信息

    return config
  },err =>{
    // console.log(err);
  })

  
// 2、响应拦截
  instance.interceptors.response.use(res =>{
    // console.log(res);
    return res.data
  },err =>{
    // console.log(err);
  })

  return instance(config)
}
