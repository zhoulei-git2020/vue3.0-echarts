<template>
  <div class="home"> 
      <Loading v-if="loading">
        <div class="loading-text">
          数据大屏加载中...
        </div>
      </Loading>
      <container id="container" :option="{width:3840,height:2160}" v-else>
      
      <!-- 头部 -->
      <div class="header">
        <topHeader>
          
        </topHeader>
      </div>

      <!-- 分割线 -->
      <div class="separator"/>
      
      <!-- 大屏中间部分 -->
      <div class="center">
       
        <!-- 左侧 -->
        <div class="left">
            <div class="left1">
              <TotalUser
                :todays-temperature = "TodaysTemperature"
                :yesterday-temperature = "YesterdayTemperature"
                :growth-rate = "GrowthRate"
              />
            </div>
            <div class="left2">
              <averageAge
                :avgAge = "averageAge"
                :data = "ageData"
              />
            </div>
            <div class="left3">
              <TotalDevice
                :data= "deviceData"
              />
            </div>
            <div class="left4">
              <TotalGender
                :data= "genderData"
              />
            </div>
            <div class="left5">
              <TotalRider
                :data= "riderData"
              />
            </div>
            <div class="left6">888</div>
        </div>

        <!-- 右侧 -->
        <div class="right">
            <div class="right-top1">999</div>
            <div class="right-top2">000</div>
            <div class="right-bottom">
               <div class="right-bottom-left">
                  <div class="right-bottom-left1">111</div>
                  <div class="right-bottom-left2">222</div>
                  <div class="right-bottom-left3">333</div>
                  <div class="right-bottom-left4">444</div>
               </div>
               <div class="right-bottom-right">
                 <div class="right-bottom-right1">444</div>
                 <div class="right-bottom-right2">555</div>
               </div>
             </div>
            
        </div>
      </div>
      </container>
  </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import useTemperatureData from '../hooks/useScreenData'
export default {
  name: 'Home',
  setup(){
    const loading = ref(true) 
    onMounted(() =>{
      setTimeout(()=>{
        loading.value = false
      },1000)
    })
    return{
      loading,
      ...useTemperatureData(),
    }
  }
}
</script>

<style lang="scss" >
  .home{
    position: relative;
    display: flex;//局中展示
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 100%;
    color:#fff ;
    font-size: 48px;
    background: black;

    /*container组件scc*/
    #container{
      /*使用flex布局*/
      display: flex;//居中展示
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      /*使用flex布局需要手动指定宽高*/
      width: 100%;
      height: 100%;


    /*头部css */
    .header{
      width: 100%;
      height: 167px;/*高度167px*/
      
    }

    /*分割线css*/
    .separator{
      width: 100%;
      height: 10px;
      background: rgb(92,88,89);
                           
    }

    /*中间大屏展示部分scc*/
    .center{
      display: flex;
      width: 100%;
      flex: 1;
                

      /*左边展示区*/
      .left{
        flex: 0 0 860px;
        display: flex;
        flex-direction: column; /*内部元素竖向排列*/
        width: 860px;
        height: 100%;
        justify-content: space-between; /*内部元素中间元素有间隙顶头和最下方元素无间隙*/
        padding-bottom: 20px; /*最底部元素留出20px间隙*/
        box-sizing: border-box;
       
         .left1{
          height: 300px;
        }
         .left2{
          height: 320px;  

        }
         .left3{
          height: 280px;
         
        }
         .left4{
          height: 230px;
         
        }
         .left5{
          height: 360px;
         
        }
        .left6{
          height: 360px;
          
        }
      }


      /*右边展示区*/
        .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        background: cyan;
        .right-top1{
          width: 100%;
          height: 206px;
          background: chartreuse;
        }
        .right-top2{
          width: 100%;
          height: 48px;
          background: coral;
        }
         .right-bottom{
            flex: 1;
            display: flex;
            padding-bottom: 20px;
            .right-bottom-left{
              flex: 0 0 1917;
              flex-direction: column;
              width: 1917px;
              display: flex;
              justify-content: space-between;/*内部元素中间元素有间隙顶头和最下方元素无间隙*/
              .right-bottom-left1{
                height: 999px;
                background: darkslategrey;
              }
              .right-bottom-left2{
                height: 80px;
                background: hotpink;
              }
              .right-bottom-left3{
                height: 350px;
                background: maroon;
              }
              .right-bottom-left4{
                height: 220px;
                background: rgb(0, 128, 128);
              }
            }
            .right-bottom-right{
              flex: 1;
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                justify-content: space-between;/*内部元素中间元素有间隙顶头和最下方元素无间隙*/
              .right-bottom-right1{
                width: 100%;
                height: 999px;
                background: mediumpurple;
              }
              .right-bottom-right2{
                margin-top: 20PX;
                width: 100%;
                flex: 1;
                background: midnightblue;
              }

            }
         }
      }
    }
    
    }
  
  }

  /*loading文字样式*/
  .loading-text{  
    font-size: 20px; /*loading文字大小 */
    margin-top: 10px;/*距离上方10px*/


  }
</style>
