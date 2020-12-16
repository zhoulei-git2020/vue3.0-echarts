<template>
  
     <common-card 
      title="累计订单量"
      value="2,157,420"
     >
      <template>
         <v-chart :options='getOptions()'/>
          <div id="total-order-chart" :style="{width:'100%',height:'100%'}">
           
          </div>
      </template>
       <template v-slot:footer>         
              <span>昨日订单量 </span>
              <span class="emphasis">2,000,000</span>
      </template>  
     </common-card>
  
</template>
<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
export default {
   mixins:[CommonCardMixin],
   methods:{
      getOptions(){
         return {
            
            xAxis: { //x轴坐标
               type:'category',//类型显示面积
               show:false,//隐藏x轴
               boundaryGap:false //true图表默认和x轴有间距，false表示图表内容和x轴五间距图表顶格展示
            }, 
            yAxis:{//y轴坐标
               show:false //隐藏Y轴
            },  
            series:[{  //系列表示图表,一个系列表示一张图表
               type:'line', //表示渲染类型line表示折线图
               data:[620,323,456,766,234,234,542,834,385,346,766,234,234,542,834],
               areaStyle:{//面积展示区域设置
                  color:'purple' //颜色
               },
               lineStyle:{//表格中线的样式
                  width:0 //线的宽度
               },
               itemStyle:{//表格中每个坐标点的样式设置
                  opacity:0//每个点的透明度为0 不显示
               },
               smooth:true //线段平滑展示
            }],
            grid:{ //每个图表的布局设置
               top:0, //距离顶部0
               bottom:0,//距离底部0
               left:0,//距离左边0
               right:0//距离右边0
            }
         }
      }
  }
}
</script> 
