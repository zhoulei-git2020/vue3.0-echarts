import {ref, onMounted,onUnmounted} from 'vue'
import { mapActions } from 'vuex'

//平均年龄组件
const ageMockData = [
    {"startValue":0,"value":131107,"axis":"0-20","color":"rgb(116,166,49)"},
    {"startValue":0,"value":330831,"axis":"20-30","color":"rgb(190,245,99)"},
    {"startValue":0,"value":551238,"axis":"30-50","color":"rgb(202,252,137)"},
    {"startValue":0,"value":31088,"axis":">50","color":"rgb(251,253,142)"}
]

//登录设备组件
const deviceMockData = {"totalDevices":1070909,
                            "devices":[
                                {"key":"Android","value":423676},
                                {"key":"iOS","value":373581},
                                {"key":"PC","value":273652}
                         ]}


//性别统计组件
const genderMockData = [{"key":"male","value":1442542},{"key":"female","value":1442548}]
   
//骑手组件数据
const riderMockData = {"axisX":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                       "orderData":{"legend1":"去年骑手月人均接单",
                                    "legend2":"今年骑手月人均接单",
                                     "data1":["330","420","560","450","610","890","720","610","580","750","770","600"],
                                     "data2":["430","510","660","550","710","990","620","550","760","810","930","720"]
                                   },
                       "rateData":{"legend1":"去年月新增骑手",
                                   "legend2":"今年月新增骑手",
                                   "data1":["129","223","202","197","300","112","333","249","178","322","401","167"],
                                   "data2":["179","263","282","297","330","344","222","299","190","455","566","233"]
                                  }
                      }

//随机数方法
function random(val){
 return  Math.floor(Math.random()*val) 
}



export default function(){
    const TodaysTemperature = ref(36)
    const YesterdayTemperature = ref(36)
    const GrowthRate = ref(12.78)
    const ageData = ref(ageMockData)
    const averageAge = ref(0)
    let task
    const deviceData = ref(deviceMockData)
    const genderData = ref(genderMockData)
    const riderData = ref(riderMockData)

    onMounted(()=>{
      task =  setInterval(()=>{
        TodaysTemperature.value = TodaysTemperature.value+1
        YesterdayTemperature.value = YesterdayTemperature.value+1
        GrowthRate.value = GrowthRate.value+1
        averageAge.value = averageAge.value+1
        

        const _ageData = [...ageData.value]
        _ageData.forEach(item =>{
            item.startValue = item.value
            item.value = item.value+random(100)
        })
        ageData.value = _ageData

        const _deviceData = {...deviceData.value}
        _deviceData.totalDevices += random(100) 
        _deviceData.devices.forEach(item=>{
            item.value += random(100) 
        })
        deviceData.value = _deviceData

        const _genderData = [...genderData.value]
        _genderData.forEach(item=>{
            item.value += random(100)
        })
        genderData.value = _genderData

        },3000)

    })
    

    onUnmounted(()=>{
        task && clearInterval(task)
    })

    return{
        TodaysTemperature,
        YesterdayTemperature,
        GrowthRate,
        ageData,
        averageAge,
        deviceData,
        genderData,
        riderData
    }
}

