<template>
  <div >
     <common-card
         title="今日用户数"
         value="1,087,503"
     >
      <template>
          <div id="total-users-chart" :style="{width:'100%',height:'100%'}">
           
          </div>
      </template>
       <template v-slot:footer>  
          <div class="total-users-footer">
            <span>日同比</span>
            <span class="emphasis">8.14%</span>
            <div class="increase"></div>
            
            <span class="mouth">月同比</span>
            <span class="emphasis">8.14%</span>
            <div class="decrease"></div>
          </div>                
      </template>  
     </common-card>
  </div>
</template>
<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
export default {
   mixins:[CommonCardMixin],
   mounted(){
      const chartDom = document.getElementById('total-users-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
         xAxis:{
            type:'value',
            show:false
         },
         yAxis:{
            type:'category',
            show:false
         },
         grid:{
            top:0, //距离顶部0
            bottom:0,//距离底部0
            left:0,//距离左边0
            right:0//距离右边0
         },
         series:[{
            type:'bar',
            data:[200],
            stack:'总量', //名称相同合并
            barWidth:'10px',
            itemStyle:{
              color:'#45c946' 
            }

         },
         {
            type:'bar',
            data:[260],
            stack:'总量',//名称相同合并
            barWidth:'10px', 
             itemStyle:{
              color:'#eee' 
            }
         },
         {
            //自定义图形
            type:'custom',
            data:[200],
            stack:'总量',//名称相同合并
            renderItem:(params,api)=>{
               const value = api.value(0) //拿到初始坐标点200
               const endPoint = api.coord([value,0]) //传入x轴坐标拿到需要绘制的x轴坐标和y轴坐标 
               return{//返回需要绘制的图形
               
                  type:'group', //绘制直线
                  position:endPoint,//绘制的坐标点
                  children:[
                  {
                     type:'path',
                     shape:{
                     d:'M488.533333 211.2l-450.133333 563.2c-14.933333 19.2-2.133333 49.06666701 23.466667 49.066667L962.133333 823.466667c25.6 0 38.4-29.866667 23.466667-49.066667l-450.133333-563.2c-12.8-14.933333-34.133333-14.933333-46.933334 0z',
                     x:-6, //x轴的相对偏移量
                     y:0, //y轴的相对偏移量
                     width:10,//宽
                     height:20,//高
                     layout:'center'
                     },
                  style:{//绘制图形样式
                     fill:'#45c946' //填充色
                     }

                  },
                  {
                     type:'path',
                     shape:{
                     d:'M535.467 812.8L985.6 249.6c14.933-19.2 2.133-49.067-23.467-49.067H61.867c-25.6 0-38.4 29.867-23.467 49.067l450.133 563.2c12.8 14.933 34.134 14.933 46.934 0z',
                     x:-6, //x轴的相对偏移量
                     y:-20, //y轴的相对偏移量
                     width:10,//宽
                     height:20,//高
                     layout:'center'
                     },
                  style:{//绘制图形样式
                     fill:'#45c946' //填充色
                     }
                  }
                ]
              
               }
            }
      
            
         }
         ]
      })
   }
}
</script> 
<style lang="scss" scoped>
  .total-users-footer{
     display: flex;
     align-items: center;
     .mouth{
        margin-left: 10px;
     }
  }
</style>


