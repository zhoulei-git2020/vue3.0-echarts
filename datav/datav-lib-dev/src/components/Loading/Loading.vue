<template>
    <div class="loading">
        <svg :width="width" :height="height" viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet">
            <!-- 
                stroke-dasharray = 2pir/4 =2*3.1415926*22/4 = 34
             -->
            <circle
                cx="25"
                cy="25"
                r="22"
                fill="none"
                stroke-width="3"
                :stroke="outsideColor"
                stroke-dasharray="34"
                stroke-linecap="round"
            >
                <!-- 旋转动画 -->
                <animateTransform
                    attributeName = "transform"
                    type="rotate"
                    values="0 25 25;360 25 25"
                    :dur="`${+duration}s`"
                    repeatCount="indefinite"
                />
                 <!-- 变色动画 -->
                <animate
                    attributeName="stroke"
                    :values="outsideColorAnimation"
                    :dur="`${+duration}s`"
                    repeatCount="indefinite"
                />    
            </circle>

            <circle
                cx="25"
                cy="25"
                r="12"
                fill="none"
                stroke-width="3"
                :stroke="insideColor"
                stroke-dasharray="19"
                stroke-linecap="round"
            >
            <!-- 旋转动画 -->
              <animateTransform
                    attributeName = "transform"
                    type="rotate"
                    values="0 25 25;-360 25 25"
                    :dur="`${+duration}s`"
                    repeatCount="indefinite"
                />
            <!-- 变色动画 -->
                <animate
                    attributeName="stroke"
                    :values="insideColorAnimation"
                    :dur="`${+duration}s`"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
        <div class="loading-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
 import {computed} from 'vue'
export default {
   
   name:'Loading',
   //父组件传参设置
   props:{

       //宽度
       width:{
           type:[Number, String], //允许传入的类型
           default:50//默认值
       },
       //高度
       height:{
           type:[Number, String], //允许传入的类型
           default:50
       },
       //外圈颜色
       outsideColor:{
           type:String,
           default:'#3be6cb'
       },
       //内圈颜色
       insideColor:{
           type:String,
           default:'#02bcfe'
       },

        //旋转及变色速度
       duration:{
         type:[Number,String],
         default:2
       }

 },


    setup(ctx){
            const outsideColorAnimation = computed(()=> `${ctx.outsideColor};${ctx.insideColor};${ctx.outsideColor}`)//外圈颜色变换
            const insideColorAnimation = computed(()=> `${ctx.insideColor};${ctx.outsideColor};${ctx.insideColor}`) //内圈颜色变换
           return {
            outsideColorAnimation,
            insideColorAnimation
           }
              
       }

  

}
</script>

<style lang="scss" scoped>
    .loading{
       
        display: flex; /*居中显示*/
        flex-direction: column;/*竖向排列 */
        align-items: center;
        justify-content: center;

    }
</style>