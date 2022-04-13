import axios from "axios"
import nprogress from "nprogress"
import store from "@/store"

const requests =axios.create({
    baseURL:"/api",      //发请求时自动带上此前缀
    timeout:5000    //请求超时时间：5s
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config:配置对象
    nprogress.start()
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token
    }
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
    return config
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error("fail"))
})

export default requests