import axios from 'axios'
const service = axios.create({
    baseURL:'http://localhost:3000/', //接口请求的默认API
    timeout:5000 //超时时间
})

service.interceptors.response.use(
    response =>{ //请求正常时的处理
       if(response.status === 200 && response.data){
        
        return response.data
            
       }else {
           return Promise.reject(new Error('请求失败'))
       }   
    },
    error =>{   //请求异常时的处理
        return Promise.reject(error)
    }
)

export default service