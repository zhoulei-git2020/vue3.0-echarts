<template>
    <div style="width:100%;height:100%">
        <VueEcharts
            :options="options"
        />
    </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import Echarts from 'echarts'

export default {
    name:'CustomMap',

    setup(){
        const options = ref({})
        const update = () =>{
            fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
            .then(response=>response.json())
            .then(data =>{
                Echarts.registerMap('js',data)
                console.log(Echarts.getMap('js'));
                options.value = {
                     geo:[{
                        map:'js',//渲染地图的名称
                        zoom:2
                    }]
                }
                   
            } )
            
            
        }
        onMounted(update)
   

         return{
            options 
         }
    }
}
</script>

<style lang="scss" scoped>
    
</style>