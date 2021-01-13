<template>
    <div  style="width:500px;height:400px;">
        <BaseScrollList
          :config="config"
        />
    </div> 
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
      const config = ref({})
      const headerData = ['姓名','性别','年龄','身高',]
      const headerStyle  = [{color:'red',width:'150px'}]
      const data = []
       for(let i = 0; i < 5; i++){
         data.push(['温度'+ (i+1), Math.floor(Math.random() *10 +20),Math.floor(Math.random() * 10000 + 10000)])
       }


      config.value = {
      data,
      headerData,
      headerStyle,
      headerBackground:'rgb(80,80,80)',
      headerHeight:'40',
      headerIndex:true,
      headerIndexContent:'$',
      //headerIndexStyle:{width:'80px',color:'red'}
      rowNum:20
      }
      return{
        config
      }
    }
}
</script>


<style lang="scss" scoped>
 
</style>