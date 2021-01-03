import {ref, onMounted,onUnmounted} from 'vue'
import { mapActions } from 'vuex'

const ageMockData = [
    {"startValue":0,"value":131107,"axis":"0-20","color":"rgb(116,166,49)"},
    {"startValue":0,"value":330831,"axis":"20-30","color":"rgb(190,245,99)"},
    {"startValue":0,"value":551238,"axis":"30-50","color":"rgb(202,252,137)"},
    {"startValue":0,"value":31088,"axis":">50","color":"rgb(251,253,142)"}
]

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
        averageAge
    }
}

