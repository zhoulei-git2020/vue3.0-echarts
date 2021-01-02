<template>
    <div class="TemperatureIncrease">
       <div class="title">今日实时温度</div>
       <div class="sub-title">Real time temperature today</div>
       <div class="total">
           <CountTo :startVal='0' :endVal='2017' :duration=4000 />
           <!-- 今日温度{{`${todaysTemperature}°`}} -->
       </div>
       <div class="percent-text">
           <span class="percent-text-1">
           昨日温度{{`${yesterdayTemperature}°`}}
           </span>
           <span class="percent-text-2">
           同比增长{{`${growthRate}%`}}
           </span>
       </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
   name:'TotalUser', 
   props:{
       //今日温度
     todaysTemperature:{
         type:Number,
         default:0
     },
        //昨日温度
     yesterdayTemperature:{
         type:Number,
         default:0
     },
        //增长率
     growthRate:{
         type:Number,
         default:0
     }




    },
}
</script>

<style lang="scss" scoped>
    /*总体布局*/
    .TemperatureIncrease{
        width: 100%;
        height: 100%;
        background: rgb(66, 68 , 70 );
        box-shadow: 1 10px 10px rgba(0,0,0,.3);
        padding: 20px 40px;
        box-sizing: border-box;
        /*大标题*/
        .title{
           font-size: 32px; 
        }
        /*小标题*/
        .sub-title{
            font-size: 16px;
            letter-spacing: 1px;
            margin-top: 10px;
        }
        .total{
            font-family: DIN;
            font-size: 68px;
            font-weight: bolder;
            letter-spacing: 2px;
            padding: 10px 0;
        }
        .percent-text{
            font-size: 28px;
            font-family: DIN;
            letter-spacing: 2px;
        }


    }



</style>



