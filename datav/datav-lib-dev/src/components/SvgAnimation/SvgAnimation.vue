   
<template>
    <div>
        <div class="container">
            <svg width="500" height="200" viewBox="0 0 500 200">

                <!-- x起始点0 y起始点0 宽100px 高50px fill=填充色红色  transform=向x轴右偏移10px向下偏移10 rotate(30)顺时针旋转30度-->
                <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10, 10) rotate(30)"/>  
            </svg>
        </div>
    </div>
    
</template>

<script>
import {computed,ref} from 'vue'
 /* eslint-disable */
export default {
    name:'SvgAnimation',
    

}
</script>

<style lang="scss" scoped>
   .container{
    svg{
        border:1px solid
      }
       
   }
</style>