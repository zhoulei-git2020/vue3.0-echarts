<template>
    <common-card 
        title="累计销售额"
        value="￥ 32,039,165"
    >
      <template>
          <div class="compare-wrapper">
            <div class="compare">
             <span>日同比</span>
             <span class="emphasis">7.33%</span>
             <div class="increase" />
           </div>
            <div class="compare">
             <span>月同比</span>
             <span class="emphasis">7.33%</span>
             <div class="decrease" />
           </div>
          </div>
      </template>
      <template v-slot:footer>         
              <span>昨日销售额 </span>
              <span class="emphasis">￥ 30,000,000</span>
      </template>  
    
    </common-card>
</template>
<script>
import CommonCardMixin from '../../mixins/commonCardMixin'
export default {
  mixins:[CommonCardMixin]
}
</script> 
<style lang="scss" scoped>
    .compare-wrapper{
        height: 100%;
        display: flex;
        flex-direction: column; //将内部元素竖型排列
        justify-content: center; //内部元素垂直居中
        .compare{
      margin-top: 3px;
      // background: yellow;
       font-size: 12px;
        display: flex;
        align-items: center;
     

    }
}
   

</style>