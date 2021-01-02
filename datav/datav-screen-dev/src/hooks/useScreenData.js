import {ref, onMounted,onUnmounted} from 'vue'

export default function(){
    const TodaysTemperature = ref(36)
    const YesterdayTemperature = ref(36)
    const GrowthRate = ref(12.78)

    let task

    onMounted(()=>{
      task =  setInterval(()=>{
        TodaysTemperature.value = TodaysTemperature.value+1
        YesterdayTemperature.value = YesterdayTemperature.value+1
        GrowthRate.value = GrowthRate.value+1
        },3000)
    })
    

    onUnmounted(()=>{
        task && clearInterval(task)
    })

    return{
        TodaysTemperature,
        YesterdayTemperature,
        GrowthRate
    }
}

