<template>
  <div class="home">
      <top-view />
      <sales-view />
      <bottom-view />
      <map-view />
  </div>
</template>
<script>
import TopView from "../components/TopView"
import SalesView from "../components/SalesView"
import MapView from "../components/MapView"
import BottomView from "../components/BottomView"
export default {
  name: 'Home',
  components:{
    TopView,
    SalesView,
    MapView,
    BottomView
  }
  
}
</script> 
<style lang="scss" scoped>
  .home{
    width:100%;    /*宽度100%*/
   //height: 100%;  /*高度100%*/
    padding: 20px; /*上下左右间隔20px*/
    background:#eee;/*背景色*/
    box-sizing: border-box;
  }
</style>