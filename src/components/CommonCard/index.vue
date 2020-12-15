<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
        <slot></slot>
    </div>
    <div class="line" ></div>
    <div class="total">
        <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {

    //父组件传值子组件
  props:{
      title:String, //传值类型为String
      value:String, //传值类型为String


  }
}
</script> 
<style lang="scss" scoped>
  .titel{
    font-size: 12px;
    color:#999;
  }
  .value{
    font-size: 25px;
    color:#000;
    margin-top: 5px;
    letter-spacing: 1px;  //字母之间的间距加1px
  }
  .chart{
    height: 50px;
   
  }
  .line{
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total{
    font-size: 20px;
    color:#666
  }
</style>

<style lang="scss">
.emphasis{
      margin-left: 5px;
      color: #333;
      font-weight: 700;
  }
    .increase{ //绘制三角形
          
           width: 0;
           height: 0;
           border-width: 6px;
           border-color:transparent transparent red transparent;
           border-style: solid;
           margin: 0 0  3px 5px; //距离下面3个像素右边5像素
       }
        .decrease{ //绘制三角形
          
           width: 0;
           height: 0;
           border-width: 6px;
           border-color:green transparent transparent transparent;
           border-style: solid;
           margin: 3px 0 0 5px; //距离下面3个像素右边5像素
       }
</style>