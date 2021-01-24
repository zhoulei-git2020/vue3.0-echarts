<template>
   <div class="order-map">
       <div class="loading" v-if="loading">加载中...</div>
       <VueEcharts
        :options="options"
        v-else
       />
   </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import echarts from 'echarts'

export default {
    name:'OrderMap',
   
    setup(props){
      const options = ref({}) 
      const loading = ref(true)
      const update = ()=>{
          fetch('http://www.youbaobao.xyz/datav-res/datav/map.json')
            .then(response => response.json())
            .then (data =>{
             echarts.registerMap('china',data)
             const citys = ['北京','上海','深圳','广州']
             options.value = {
               timeline:{
                   data:citys,
                   axisType:'category',
                   autoPlay:true,//自动播放
                   playInterval:3000,//播放时间间隔
                   left:'10%',
                   right:'5%',
                   bottom:'3%',
                   //字体样式
                   label:{
                       //默认时
                      normal:{
                          textStyle:{
                              color:'#ddd'
                          }
                      },
                      //鼠标高亮时
                      emphasis:{
                          textStyle:{
                             color:'#fff' 
                          }
                      }
                   },
                   symbolSize:10 ,//修改节点图案尺寸
                   lineStyle:{
                       color:'#555'
                   },
                   //
                   checkpointStyle:{
                       borderColor:'#777',
                       borderWidth:2
                   },
                   controlStyle:{
                      showNextBtn:true, 
                      showPrevBtn:true,
                      normal:{
                        color:'#666',
                        borderColor:'#666'
                      },
                      emphasis:{
                        color:'#aaa' , 
                        borderColor:'#aaa'
                      }
                   }
               },
               baseOption:{
                   geo:{
                      map:'china' ,
                      zoom:1.1,
                      roam:true,
                      scaleLimit:{
                          min:0.5,
                          max:3
                      },
                      center:[113.83531246, 34.0267395887], //中心点坐标
                      itemStyle:{
                          normal:{
                              borderColor:'rgba(147,235,248,1)',//每个元素的边框颜色
                              borderWidth:1,                    //每个元素的边框宽度
                               //每个图块的属性
                               areaColor:{
                                  type:'radial',
                                  x:0.5,
                                  y:0.5,
                                  r:0.8,//颜色扩散半径
                                  colorStops:[{
                                      offset:0,color:'rgba(147,235,248,0)'// 0%处的颜色
                                  },
                                  {
                                      offset:1,color:'rgba(147,235,248,0.2)'// 100%处的颜色
                                  }],
                                  global:false//缺省值为false                                   
                               }, 
                                  shadowColor:'rgba(128,217,248,1)', //阴影色
                                  shadowOffsteX:-2, //阴影色位移x轴
                                  shadowOffsteY:2, //阴影色位移y轴
                                  shadowBlur:10,
                                 
                          },
                          emphasis:{
                              areaColor:'#389BB7',
                              borderWidth:0
                          }
                      }
                   }
               },
               options: []
             }
             loading.value = false
            })
     }

        onMounted(update)
   

         return{
            options,
            loading
         }
    }
}
</script>

<style lang="scss" scoped>
    .order-map{
        width:100%;
        height: 100%;
         background: rgb(48,48,48);
        .loading{
            display: flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height: 100%;
            font-size: 36px;
            background: rgb(48,48,48);
            color: #fff;
        }
    }
</style>