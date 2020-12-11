<template>
  <div class="common-card">
    <div class="title">1</div>
    <div class="value">￥2323</div>
    <div class="chart"></div>
    <div class="line" ></div>
    <div class="total">5</div>
  </div>
</template>
<script>
export default {
  
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
    background: red
  }
  .line{
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total{
    font-size: 12px;
    color:#666
  }
  

</style>