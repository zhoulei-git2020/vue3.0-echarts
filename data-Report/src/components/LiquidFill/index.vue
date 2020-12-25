<template>
       
            <!-- <div>
                {{liquidfill_Data}}
            </div> -->
        <ve-liquidfill  :data="chartData" height="100%" :settings="chartSettings"/>
    
</template>

<script>
import commonDataMinix from '../../mixins/commonDataMinxin'

function getColor(value){ //针对不同的值给不同的颜色
    return value > 0 && value<=0.5 ? 'rgba(97,216,0,.7)'
        : value > 0.5 && value <= 0.8 ?  'rgba(204,178,26,.7)'
       : value > 0.8 ? 'rgba(241,47,28,.7)': '#c7c7cb'
}
export default {
    mixins:[commonDataMinix],
    watch:{
        liquidfill_Data(){
            this.chartData={
                  columns:['title','percent'],
                rows:[{
                    title:'rate',
                    percent: this.liquidfill_Data
                }]
            },
                this.chartSettings = {
                           seriesMap:{
                   rate:{
                       radius:'80%',
                       label:{ //图中文本
                           normal:{
                               formatter:(v)=>{
                                  return `${Math.floor(v.data.value * 100)}%`
                               },
                           textStyle:{
                               fontSize:36,//字体大小
                               color:'#999',
                               fontWeight:'normal'
                            },
                            position:['50%','50%']
                           },
                       },
                       outline:{ //外边框
                          itemStyle:{
                             borderColor:'#aaa4a4', 
                             borderWidth:1,
                             color:'none',
                             shadowBlur:0, //阴影大小
                             shadowColor:'#fff'
                          },
                          borderDistance:0, //外边框和内边框边距
                       },
                        backgroundStyle:{ //背景颜色
                            color:'#fff'
                        },
                        itemStyle:{ 
                            shadowBlur:0,
                            shadowColor:'#fff'
                        },
                        amplitude:8, //水球图波浪幅度
                        color:[getColor(this.chartData.rows[0].percent)]

                   }
               }
         }
        }
    },

    data(){
        return{
          
            chartData:{
              
            },
            chartSettings:{

            }
        }
    },
    mounted(){
    

        // console.log(this.getLiquidfillData());
    },

      
    
}
</script>>

<style lang="scss" scoped>

</style>