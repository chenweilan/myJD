import axios from "axios"
import nprogress from "nprogress"

const requests =axios.create({
    baseURL:"/mock",      //发请求时自动带上此前缀
    timeout:5000    //请求超时时间：5s
})

//请求拦截器
requests.interceptors.request.use((config)=>{
    //config:配置对象
    nprogress.start()
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