import request from '../utils/request'

export function wordcloud(){
    return request({
        url:'',
        method:'get',
         params:{ //get添加请求参数 post用data传递数据
           icode:'13926EAFCAA16CC3'
         }


    })
}