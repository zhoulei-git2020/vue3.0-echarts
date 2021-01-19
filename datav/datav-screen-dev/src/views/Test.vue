<template>
    <div  style="width:100%;height:100%;">
      <VueEcharts 
        :options="options" 
      />
    </div> 
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
 setup(){
    const options = ref({})
    const update = () =>{
      // options.value = {
      //   baseOption:{
      //       timeline:{
      //         axisType:'category', //时间轴类型

      //         //播放按钮样式
      //         controlStyle:{
      //           position:'left',
               
      //         },
      //         //动画播放属性
      //         autoPlay:true, //自动播放
      //         playInterval:1000,//自动播放时间间隔
      //         loop:false, //是否循环播放
      //         inverse:false, //是否倒放 
      //         currentIndex:1, //从哪个位置开始播放
      //         realtime:true, //点击节点是否拖动视图
              

      //          //时间轴每个节点的数据
      //         data:[  
      //            {
      //              value:'2002-01-01', //节点数据
      //              symbol:'diamond',     //节点形状
      //              symbolSize:20        //节点形状大小
      //            },          
      //            {
      //              value:'2003-01-01',
      //              symbol:'diamond'
      //            }, 
      //            {
      //              value:'2004-01-01',
      //              symbol:'diamond'
      //            },     
      //            {
      //              value:'2005-01-01',
      //              symbol:'diamond'
      //            },     
      //            {
      //              value:'2006-01-01',
      //              symbol:'triangle',
      //              symbolSize:20
      //            },         
                
      //           ],
      //           label:{
      //             formatter(v){
      //               return new Date(v).getFullYear()
      //             }
      //           }  
      //       }
      //   },
      //   options:[]
      // }
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