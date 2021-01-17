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
      const headerData = ['姓名','性别','年龄','身高',] //标题栏内容
      const headerStyle  = [{color:'red',width:'150px'}] //标题栏样式
      const rowStyle  = [{},{color:'red'}] //列内容样式
      const rowBg = ['rgb(240,240,240)','rgb(255,255,255)'] //行背景颜色
      const aligns = ['center','center','center','center']//居中方式
      const headerFontSize = 20//批量更改标题的文字大小
      const rowFontSize = 24//批量修改每页内容的文字大小
      const headerColor = '#fff' //批量更改标题的文字颜色
      const rowColor = 'green'//批量更改每页内容的文字颜色

      const data = []
       for(let i = 0; i < 10; i++){
         data.push(['温度'+ (i+1), Math.floor(Math.random() *10 +20),Math.floor(Math.random() * 10000 + 10000),Math.floor(Math.random() * 100 + 80)])
       }


      config.value = {
      data,
      rowStyle,
      headerData,
      headerStyle,
      headerBackground:'rgb(80,80,80)',
      headerHeight:'40',
      headerIndex:true,
      headerIndexContent:'$',
      //headerIndexStyle:{width:'80px',color:'red'}
      rowNum:5,
      rowBg,
      aligns,
      headerFontSize,
      rowFontSize,
      headerColor,
      rowColor

      }
      return{
        config
      }
    }
}
</script>


<style lang="scss" scoped>
 
</style>