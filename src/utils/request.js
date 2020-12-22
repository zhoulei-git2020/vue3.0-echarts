import axios from 'axios'
const service = axios.create({
    baseURL:'http://www.baidu.com', //接口请求的默认API
    timeout:5000 //超时时间
})

service.interceptors.response.use(
    response =>{ //请求正常时的处理

    },
    error =>{   //请求异常时的处理
        return Promise.reject(error)
    }
)

export default service