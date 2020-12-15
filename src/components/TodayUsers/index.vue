<template>
  <div >
     <common-card
         title="今日交易用户数"
         value="81,014"
     >
     <template>
        <div id="today-users-chart" :style="{width:'100%',height:'100%'}">
         
        </div>
     </template>
     <template v-slot:footer>         
              <span>退货率 </span>
              <span class="emphasis">5.14%</span>
      </template>  
     </common-card>
     
  </div>
</template>
<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
export default {
   mixins:[CommonCardMixin],
   mounted(){
      const chartDom = document.getElementById('today-users-chart')
      const chart = this.$echarts.init(chartDom)
      chart.setOption({
         color:['#3398DB'],//柱状图颜色
         series:[{//系列表示图表,一个系列表示一张图表
            type:'bar',//类型:柱状图
            data:[620, 323, 456, 766, 234, 234, 542, 834, 385, 674, 643, 936],
            barWidth:'60%'//柱状图柱子的宽度
         }],
         xAxis:{//x轴坐标
            type:'category', //类型显示面积
            data:['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','010:00','11:00',],
            show:false,//隐藏x轴信息
            
         },
         yAxis:{
            show:false//隐藏y轴信息
         },
         grid:{
            top:0, //距离顶部0
            bottom:0,//距离底部0
            left:0,//距离左边0
            right:0//距离右边0
         }
      })
   }
}
</script> 
<style lang="scss" scoped>
  
</style>