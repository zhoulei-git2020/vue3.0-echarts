<template>
    <div class="TemperatureIncrease">
       <div class="title">今日实时温度</div>
       <div class="sub-title">Real time temperature today</div>
       <div class="total">
           <CountTo 
            :startVal='startVal'
            :endVal='todaysTemperature' 
            :duration=1000 
            :decimals="1"
            />
       </div>
       <div class="percent-text">
           <span class="percent-text-1">
           昨日此时温度:
            <CountTo
           :startVal='startPercent'
           :endVal='yesterdayTemperature'
           :duration=1000 
           :decimals="1"
           />
           </span>
           <span class="percent-text-2">
           同比增长:
           <CountTo
           :startVal='startPercent2'
           :endVal='growthRate'
           :duration=1000 
           :decimals="1"
           suffix='%'
           />
           </span>
       </div>

       <!-- 进度条 -->
       <div class="percent">
           <div class="percent-inner-wrapper">
               <div class="percent-inner" :style="{width:`${growthRate}%`}"/>
           </div>
       </div>
    </div>
</template>

<script>
import { ref, watch} from 'vue'
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
    setup(props){

        const startVal = ref(0)         //今日温度起始值
        const startPercent = ref(0)     //昨日此时温度起始值
        const startPercent2 = ref(0)    //同比增长起始值

        //watch方法在数据渲染之前起作用
        //监听今日温度起始值是否改变,将上一次今日温度值赋值给今日温度起始值
        watch(()=>props.todaysTemperature,(nextValue,prevValue)=>{
           startVal.value = prevValue   
        })
        //监听昨日此时温度起始值是否改变,将上一次昨日此时温度值赋值给昨日此时温度起始值
         watch(()=>props.growthRate,(nextValue,prevValue)=>{
           startPercent2.value = prevValue   
        })
        //监听增长率起始值是否改变,将上一次增长率值赋值给增长率起始值
         watch(()=>props.yesterdayTemperature,(nextValue,prevValue)=>{
           startPercent.value = prevValue   
        })

        return{
          startVal,
          startPercent,
          startPercent2

        }
    }

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

         /*进度条容器*/
        .percent{
            widows: 100%;
            height: 20px;
            box-sizing: border-box;
            border: 1px solid #fff;
            margin-top: 20px;
                .percent-inner-wrapper{
                    height: 100%;
                    padding: 2px;
                    box-sizing: border-box;
                    overflow: hidden;
                     /*进度条*/
                    .percent-inner{
                        width: 10%;
                        height: 100%;
                        background: rgb(150,150,150);
                        transition: width 1s linear;  /*增加一个过度动画 宽度线性变化*/
                    }
                }

        }

    }



</style>



