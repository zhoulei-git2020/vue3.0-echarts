import request from '../utils/request'

export function test(){
    return request({
        url:'/test',
        method:'get',
        params:{ //get添加请求参数 post用data传递数据
            a:1
        }


    })
}